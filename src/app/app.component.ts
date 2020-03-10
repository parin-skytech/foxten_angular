import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "foxten-ui";

  appHeight: number = window.innerHeight - 70;
  appWidth: number = window.innerWidth - 50;
  mapHeight: string = this.appHeight.toString() + "px";
  mapWidth: string = (this.appWidth / 3).toString() + "px";
  qlikHeight: string = this.appHeight.toString() + "px";
  qlikWidth: string = ((this.appWidth / 3) * 2).toString() + "px";
}
