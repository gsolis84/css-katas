import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ButtonHoverGlowingComponent } from "./button-hover-glowing/button-hover-glowing.component";
import { CSSContainerRoutingModule } from "./css-container-routing.module";
import { CSSContainerComponent } from "./css-container.component";
import { NavMenuIndicatorComponent } from "./nav-menu-indicator/nav-menu-indicator.component";
import { SoapBubbleAnimationComponent } from "./soap-bubble-animation/soap-bubble-animation.component";
import { TextAnimationEffectComponent } from './text-animation-effect/text-animation-effect.component';
import { TextAnimationWaterComponent } from './text-animation-water/text-animation-water.component';

@NgModule({
    imports: [
        CSSContainerRoutingModule,
        ButtonHoverGlowingComponent
    ],
    declarations: [
        CSSContainerComponent,
        NavMenuIndicatorComponent,
        SoapBubbleAnimationComponent,
        TextAnimationEffectComponent,
        TextAnimationWaterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CSSContainerModule { }