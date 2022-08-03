import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CSSContainerComponent } from "./css-container.component";

const routes: Routes = [
    { path: '', component: CSSContainerComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CSSContainerRoutingModule { }