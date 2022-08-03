import { NgModule } from "@angular/core";
import { CSSContainerRoutingModule } from "./css-container-routing.module";
import { CSSContainerComponent } from "./css-container.component";
import { NavMenuIndicatorComponent } from "./nav-menu-indicator/nav-menu-indicator.component";
import { SoapBubbleAnimationComponent } from "./soap-bubble-animation/soap-bubble-animation.component";

@NgModule({
    imports: [CSSContainerRoutingModule],
    declarations: [
        CSSContainerComponent,
        NavMenuIndicatorComponent,
        SoapBubbleAnimationComponent
    ]
})
export class CSSContainerModule { }