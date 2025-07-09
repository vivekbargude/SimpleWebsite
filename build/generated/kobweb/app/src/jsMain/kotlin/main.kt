import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable
import com.vivek_bargude.simple_wesbsite.pages.HomePage as _com_vivek_bargude_simple_wesbsite_pages_HomePage

public fun main() {
    AppGlobals.initialize(mapOf("title" to "Simple_website"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register(
            "/",
        ) { pageCtx -> 
            _com_vivek_bargude_simple_wesbsite_pages_HomePage()
        }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("button", com.vivek_bargude.simple_wesbsite.styles.ButtonStyle)
        ctx.theme.registerStyle("social-icon", com.vivek_bargude.simple_wesbsite.styles.SocialIconStyle)
        ctx.theme.registerStyle("theme-icon", com.vivek_bargude.simple_wesbsite.styles.ThemeIconStyle)
        com.vivek_bargude.simple_wesbsite.initStyles(ctx)
        com.vivek_bargude.simple_wesbsite.overrideSilkTheme(ctx)
    }

    router.tryRoutingTo(BasePath.remove(window.location.href.removePrefix(window.origin)), UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("_kobweb-root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "_kobweb-root") {
        com.vivek_bargude.simple_wesbsite.MyApp {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
