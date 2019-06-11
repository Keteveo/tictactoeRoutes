import { Component, OnInit } from "@angular/core";

import { StateService, State } from "./../state.service";

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

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private _state$: BehaviorSubject<State>;

  constructor(stateService: StateService) {
    this._state$ = stateService.state$;
  }

  ngOnInit() {}
}
