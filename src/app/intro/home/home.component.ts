import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { GlobalConstants } from "src/app/common/globalvar";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  tabTour = introJs();
  constructor(private route: Router, private message: NzMessageService) {}
  checktrue(val) {
    return val == true;
  }
  ngOnInit() {
    if (GlobalConstants.arrTour.t2 == false) {
      this.tabTour
        .setOptions({
          tooltipClass: "customTooltip",
          showProgress: true,

          nextLabel: "Next !",
          doneLabel: "Good to Go!",
          hidePrev: true,
          showStepNumbers: true,
          disableInteraction: false,
          steps: [
            {
              title: "Tab Tour",
              intro:
                "this tour  will guide you about programs and teacher of kaar school",
              position: "right",
              step: 1,
            },
            {
              element: document.querySelector(".Scholorship"),
              intro:
                "government supported Scholorship are provided here.  click to view",
              position: "right",
              step: 2,
            },
            {
              title: "Teachers",
              element: document.querySelector(".Teachers"),
              intro: "details of teachers are shown here",
              position: "right",
              step: 3,
            },
            {
              element: document.querySelector(".pro"),
              title: "Programs",
              intro:
                "extra carricular programs are available here. click to view",
              position: "bottom",
              step: 4,
            },
          ],
        })

        .oncomplete(() => {
          GlobalConstants.arrTour.t2 = true;
          var tourlength = Object.keys(GlobalConstants.arrTour).length;
          var vals = Object.values(GlobalConstants.arrTour);
          var num = vals.filter(this.checktrue).length;
          // console.log(GlobalConstants.percent);
          GlobalConstants.percentage.percent = (num / tourlength) * 100;
          console.log(GlobalConstants.percentage.percent);
          if (GlobalConstants.percentage.percent == 100) {
            this.message.success(
              "<img width='50px' height='50px' src='https://thumbs.dreamstime.com/b/medal-colour-icon-website-design-development-app-premium-pack-glyph-vector-158230370.jpg'> Congratz Finished the app tour"
            );
          }
          // this.route.navigate(["./welcome"]);
        })
        .start();
    }
  }
}
