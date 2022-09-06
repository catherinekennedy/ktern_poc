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
  constructor(private route: Router, private message: NzMessageService) {}
  checktrue(val) {
    return val == true;
  }
  ngOnInit() {
    GlobalConstants.tour2
      .setOptions({
        tooltipClass: "customTooltip",
        showProgress: true,

        nextLabel: "Next !",
        doneLabel: "Good to Go!",
        hidePrev: true,
        showStepNumbers: true,
        disableInteraction: false,
        steps: GlobalConstants.tour[1],
      })
      .onexit(() => {
        console.log("f");
      })

      .oncomplete(() => {
        this.route.navigate(["./welcome"]);
        console.log("go");
        // GlobalConstants.arrTour.tour2 = true;
        // GlobalConstants.apptourvalue[1] = true;
        // var tourlength = Object.keys(GlobalConstants.arrTour).length;
        // var vals = Object.values(GlobalConstants.arrTour);
        // var num = vals.filter(this.checktrue).length;
        // // console.log(GlobalConstants.percent);
        // GlobalConstants.percentage.percent = (num / tourlength) * 100;
        // console.log(GlobalConstants.percentage.percent);
        // if (GlobalConstants.percentage.percent == 100) {
        //   this.message.success(
        //     "<img width='50px' height='50px' src='https://thumbs.dreamstime.com/b/medal-colour-icon-website-design-development-app-premium-pack-glyph-vector-158230370.jpg'> Congratz Finished the app tour"
        //   );
        // }
      })

      .start();
  }
}
