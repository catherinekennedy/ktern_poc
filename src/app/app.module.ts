import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShepsherdComponent } from "./shepsherd/shepsherd.component";
import { ShepherdService } from "angular-shepherd";

@NgModule({
  declarations: [AppComponent, ShepsherdComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShepherdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
