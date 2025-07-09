package com.vivek_bargude.simple_wesbsite.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.vivek_bargude.simple_wesbsite.styles.ThemeIconStyle
import com.vivek_bargude.simple_wesbsite.utils.Res
import com.vivek_bargude.simple_wesbsite.utils.Res.Dimens.ICON_SIZE
import com.vivek_bargude.simple_wesbsite.utils.Res.Dimens.ICON_SIZE_LG
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.px

@Composable
fun ThemeSwitchButton(
    colorMode: ColorMode,
    onClick: () -> Unit
) {
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = Modifier
            .fillMaxSize()
            .position(Position.Fixed)
            .zIndex(1)
            .styleModifier {
                property("pointer-events", "none")
            },
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.End
    ) {
        IconButton(
            modifier = ThemeIconStyle.toModifier()
                .margin(all = if (breakpoint > Breakpoint.SM) 24.px else 16.px)
                .styleModifier {
                    property("pointer-events", "auto")
                },
            colorMode = colorMode,
            icon = if (colorMode.isLight) Res.Icon.SUN else Res.Icon.MOON,
            iconSize = if (breakpoint > Breakpoint.SM) ICON_SIZE_LG.px else ICON_SIZE.px,
            onClick = onClick
        )
    }
}