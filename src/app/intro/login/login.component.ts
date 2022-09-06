import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { GlobalConstants } from "src/app/common/globalvar";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // loginTour = introJs();

  constructor(private route: Router) {}
  username: string = "";
  password: string = "";

  checktrue(val) {
    return val == true;
  }
  appTour = GlobalConstants.arrTour;
  apptourname = GlobalConstants.apptourName;
  apptourval = GlobalConstants.apptourvalue;
  // loginstepsintro = [
  //   {
  //     title: "Username",
  //     element: ".inputuser",
  //     intro: "please enter the username",
  //     position: "bottom",
  //     step: 1,
  //   },
  //   {
  //     element: ".inputpassword",
  //     intro: "please enter the password",
  //     position: "top",
  //     step: 2,
  //   },
  //   {
  //     title: "login",
  //     element: ".login-form-button",
  //     intro: "press login after entering details",
  //     position: "right",
  //     step: 3,
  //   },
  //   {
  //     title: "Home",
  //     element: ".home",
  //     intro: "Click here to view home page of school",
  //     position: "right",
  //     step: 4,
  //   },
  // ];

  ngOnInit() {
    console.log(GlobalConstants.tour[1]);
    console.log(GlobalConstants.apptourName);
    console.log(this.route);

    GlobalConstants.tour1
      .setOptions({
        tooltipClass: "customTooltip",
        showProgress: true,

        nextLabel: "Next !",
        doneLabel: "Go to home!",
        hidePrev: true,
        showStepNumbers: true,
        disableInteraction: false,

        steps: GlobalConstants.tour[0],
      })
      .onbeforechange((targetElement) => {
        var curstep = GlobalConstants.tour1._currentStep;

        // var s = (<HTMLInputElement>document.getElementById("us")).value;
        // console.log(this.username);

        console.log(GlobalConstants.tour1._currentStep);
        if (GlobalConstants.tour1._currentStep == 1) {
          if (this.username === "") {
            console.log(this.username);
            console.log(GlobalConstants.tour1._introItems.step);
            // document
            //   .querySelector(".introjs-nextbutton")
            //   .element.classList.remove("introjs-disabled");

            $(".introjs-nextbutton").attr("disabled", "true");
          } else {
            $(".introjs-nextbutton").removeAttr("disabled");
          }
        } else if (GlobalConstants.tour1._currentStep == 2) {
          if (this.password === "") {
            console.log(this.password);
            $(".introjs-nextbutton").attr("disabled", "true");
          } else {
            $(".introjs-nextbutton").removeAttr("disabled");
          }
        } else if (GlobalConstants.tour1._currentStep == 3) {
          if (this.password === "" && this.username === "") {
            $(".introjs-donebutton").attr("disabled", "true");
          } else {
            $(".introjs-donebutton").removeAttr("disabled");
          }
          $(".introjs-skipbutton").attr("disabled", "true");
        } else {
          $(".introjs-nextbutton").removeAttr("disabled");
          $(".introjs-skipbutton").removeAttr("disabled");
        }
      })

      .oncomplete(() => {
        GlobalConstants.arrTour.tour1 = true;
        GlobalConstants.apptourvalue[0] = true;
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

    // introJs()
    //   .addStep({
    //     element: document.querySelectorAll("#step2")[0],
    //     intro: "Ok, wasn't that fun?",
    //     position: "right",
    //   })
    //   .start();
  }
}
