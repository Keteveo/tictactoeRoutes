import { Injectable } from "@angular/core";

//
//
//   I M P O R T A N T
//  IF YOU USE ANGULAR 6.X consider this changes
//
import { BehaviorSubject } from "rxjs";
// in case you're using Angular version below 7 change the previous line by the next one:
//  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//
//

export interface State {
  turn: string;
  values: string[][];
  player_name: string;
  game_name: string;
}

@Injectable({
  providedIn: "root"
})
export class StateService {
  private _state$: BehaviorSubject<State>;

  constructor() {
    this._state$ = new BehaviorSubject({
      turn: "PLAYERX",
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]],
      player_name: "",
      game_name: ""
    });
  }

  get state$(): BehaviorSubject<State> {
    return this._state$;
  }

  get state(): State {
    return this._state$.getValue();
  }

  set state(state: State) {
    this._state$.next(state);
  }

  updateValue(row, col) {
    if (this.state.values[row][col] === "-") {
      let newValue = this.state.turn === "PLAYERX" ? "X" : "0";
      let newTurn = this.state.turn === "PLAYERX" ? "PLAYER0" : "PLAYERX";
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state = this.state;
    }
  }

  reset() {
    this.state = {
      turn: "PLAYERX",
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]],
      player_name: "",
      game_name: ""
    };
  }
}
