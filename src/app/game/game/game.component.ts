import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { StateService, State } from "./../state.service";
import { MyhttpService } from "./../../myhttp.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  private _status: string = "fetching";

  //handles the service StateService
  private _stateService: StateService;

  //Handles the service myhttpService
  private _myhttpService: MyhttpService;

  // Stores the names of the games saved
  private _names: string[];

  // Stores the current player name, game name and gameID
  private _playerName: string;
  private _gameName: string;
  private _id: number;

  constructor(
    private route: ActivatedRoute,
    stateService: StateService,
    myhttpService: MyhttpService
  ) {
    this._stateService = stateService;
    this._myhttpService = myhttpService;
    if (route.snapshot.paramMap.get("id") === null) {
      this._id = 0;
    } else {
      this._id = parseInt(route.snapshot.paramMap.get("id"));
    }
    if (route.snapshot.data.continue) {
      this._names = this._myhttpService.getSavedNames();
      if (this._names.length === 0) {
        this._status = "nomoresaves";
      } else {
        myhttpService.getSavedGameUri(this._id).subscribe(
          (state: State) => {
            stateService.state = state;
            this._status = "success";
          },
          error => {
            this._status = error.statusText;
          }
        );
      }
    } else if (route.snapshot.data.delete) {
      if (myhttpService.removeSavedGame(this._id) == 0) {
        // in this version we dont treat the number of games left console.log("no more saved games");
      }
      this._status = "success";
    } else {
      stateService.reset();
      this._status = "success";
    }
  }

  _handleSubmitClick() {
    this._stateService.state.player_name = this._playerName;
  }

  _handleSaveClick() {
    this._stateService.state.game_name = "save";
  }

  _handleSaveSubmit() {
    this._stateService.state.game_name = this._gameName;
    this._status = "fetching";
    this._myhttpService.postSavedGame(this._stateService.state).subscribe(
      respuesta => {
        this._myhttpService.insertSavedGame(
          this._stateService.state.game_name,
          respuesta["uri"]
        );

        this._names = this._myhttpService.getSavedNames();
        // console.log(this._names);
        this._status = "success";

        //this._router.navigate(["/index"]);
      },
      error => {
        // console.log("Se ha producido un error:", error.statusText, error);
        this._status = error.statusText;
      }
    );
  }

  ngOnInit() {
    this._names = this._myhttpService.getSavedNames();
  }
}
