import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { CSSContainerComponent } from './css-container/css-container.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: AngularHomeComponent},
  {path: 'home', component: AngularHomeComponent},
  {path: 'CSS', component: CSSContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
