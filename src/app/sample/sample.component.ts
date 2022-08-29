import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"],
})
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (RegExp("multipage", "gi").test(window.location.search)) {
      introJs()
        .setOptions({
          steps: [
            {
              element: document.querySelector(".s1"),
              title: "Welcome",
              intro: "Hello World!",
              position: "right",
              step: 1,
            },
          ],
        })

        .oncomplete(function () {
          window.location.href = "../intro"; // or whatever your original page is
        })
        .start();
    }
  }
}
