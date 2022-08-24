import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShepsherdComponent } from "./shepsherd/shepsherd.component";

const routes: Routes = [{ path: "shepsherd", component: ShepsherdComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
