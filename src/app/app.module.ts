import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShepsherdComponent } from "./shepsherd/shepsherd.component";
import { ShepherdService } from "angular-shepherd";
import { IntroComponent } from "./intro/intro.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { SampleComponent } from "./sample/sample.component";
import { IconsProviderModule } from "./icons-provider.module";
import { LoginComponent } from "./intro/login/login.component";
import { HomeComponent } from "./intro/home/home.component";
import * as $ from "jquery";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ShepsherdComponent,
    IntroComponent,
    SampleComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
  ],
  providers: [ShepherdService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
