import { Component } from "@angular/core";
import { GlobalConstants } from "src/app/common/globalvar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isCollapsed = false;
  percent = GlobalConstants.percentage;
  appTour = GlobalConstants.arrTour;
}
