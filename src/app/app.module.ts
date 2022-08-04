import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CSSContainerComponent } from './css-container/css-container.component';
import { NavMenuIndicatorComponent } from './css-container/nav-menu-indicator/nav-menu-indicator.component';
import { SoapBubbleAnimationComponent } from './css-container/soap-bubble-animation/soap-bubble-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularHomeComponent,
    NavBarComponent,
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
