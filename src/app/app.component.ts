import { Component } from "@angular/core";
import { GlobalConstants } from "src/app/common/globalvar";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private route: Router) {}
  isCollapsed = false;
  percent = GlobalConstants.percentage;
  appTour = GlobalConstants.arrTour;
  apptourname = GlobalConstants.apptourName;
  apptourval = GlobalConstants.apptourvalue;
  tours = GlobalConstants.tour;
  call(step, title, x) {
    console.log(x);
    if (x === "tour1") {
      console.log("g");
      this.route.navigate(["./login"]);
      GlobalConstants[x].goToStep(step).start();
    } else if (x == "tour2") {
      this.route.navigate(["./home"]);
      GlobalConstants[x].goToStep(step).start();
    }
    // var tou = GlobalConstants.x;
    console.log(GlobalConstants[x]);

    GlobalConstants[x].goToStep(step).start();
  }
  tour(x) {
    console.log(x);
    if (x === "tour1") {
      this.route.navigate(["./login"]);
      console.log("g");
    } else if (x == "tour2") {
      this.route.navigate(["./home"]);
    }
  }
}
