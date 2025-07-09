package com.vivek_bargude.simple_wesbsite.styles

import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.selectors.hover
import com.vivek_bargude.simple_wesbsite.utils.Res
import org.jetbrains.compose.web.ExperimentalComposeWebApi
import org.jetbrains.compose.web.css.Transition
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.ms

val SocialIconStyle = CssStyle {
    base {
        Modifier
            .rotate(0.deg)
            .background(Colors.Transparent)
            .transition {
                property("rotate", "background-color")
                duration(300.ms)
                timingFunction(TransitionTimingFunction.Ease)
            }
    }
    hover {
        Modifier
            .rotate(10.deg)
            .background(
                if (colorMode.isLight)
                    Res.Theme.SOCIAL_ICON_BACKGROUND_LIGHT.color
                else
                    Res.Theme.SOCIAL_ICON_BACKGROUND_DARK.color
            )
    }
}


val ThemeIconStyle = CssStyle {
    base {
        Modifier
            .background(
                if (colorMode.isLight) Colors.White
                else Res.Theme.DARK_BLUE.color
            )
            .transition {
                property("background-color")
                duration(300.ms)
                timingFunction(TransitionTimingFunction.Ease)
            }
    }

    hover {
        Modifier
            .background(
                if (colorMode.isLight)
                    Res.Theme.SOCIAL_ICON_BACKGROUND_LIGHT.color
                else
                    Res.Theme.SOCIAL_ICON_BACKGROUND_DARK.color
            )
    }
}
