import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { GlobalConstants } from "src/app/common/globalvar";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginTour = introJs();

  constructor(private route: Router) {}

  checktrue(val) {
    return val == true;
  }

  ngOnInit() {
    console.log(this.route);
    if (GlobalConstants.arrTour.t1 == false) {
      this.loginTour
        .setOptions({
          tooltipClass: "customTooltip",
          showProgress: true,

          nextLabel: "Next !",
          doneLabel: "Go to home!",
          hidePrev: true,
          showStepNumbers: true,
          disableInteraction: false,
          steps: [
            {
              element: document.querySelector(".inputuser"),
              title: "Username",
              intro: "please enter the username",
              position: "bottom",
              step: 1,
            },
            {
              element: document.querySelector(".inputpassword"),
              intro: "please enter the password",
              position: "top",
              step: 2,
            },
            {
              title: "login",
              element: document.querySelector(".login-form-button"),
              intro: "press login after entering details",
              position: "right",
              step: 3,
            },
            {
              title: "Home",
              element: document.querySelector(".home"),
              intro: "Click here to view home page of school",
              position: "right",
              step: 4,
            },
            // {
            //   element: document.querySelector(".inputuser"),
            //   title: "Username",
            //   intro: "please enter the username",
            //   position: "bottom",
            //   step: 5,
            // },
          ],
        })

        .oncomplete(() => {
          GlobalConstants.arrTour.t1 = true;
          var tourlength = Object.keys(GlobalConstants.arrTour).length;
          var vals = Object.values(GlobalConstants.arrTour);
          var num = vals.filter(this.checktrue).length;
          // console.log(GlobalConstants.percent);
          GlobalConstants.percentage.percent = (num / tourlength) * 100;
          console.log(GlobalConstants.percentage.percent);
          this.route.navigate(["./home"]);
          // window.location.href = "./home";
        })
        .start();
    }
  }
}
