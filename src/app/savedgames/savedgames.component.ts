import { Component, OnInit } from "@angular/core";
import { StateService } from "../game/state.service";
import { MyhttpService } from "../myhttp.service";

@Component({
  selector: "app-savedgames",
  templateUrl: "./savedgames.component.html",
  styleUrls: ["./savedgames.component.css"]
})
export class SavedgamesComponent implements OnInit {
  private _myhttpService: MyhttpService;
  private _names: string[];

  constructor(stateService: StateService, myhttpService: MyhttpService) {
    this._myhttpService = myhttpService;
    this._names = this._myhttpService.getSavedNames();
  }

  ngOnInit() {}
}
