import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyhttpService {
  _names: string[];
  _uris: string[];

  constructor(private httpClient: HttpClient) {
    this._names = ["default game"];
    this._uris = ["https://api.myjson.com/bins/i216a"];
  }

  getSavedGameUri(i) {
    return this.httpClient.get(this._uris[i]);
  }
  postSavedGame(game) {
    return this.httpClient.post("https://api.myjson.com/bins", game);
  }

  getSavedNames() {
    return this._names;
  }
  insertSavedGame(name, uri) {
    //Inserts a new game in both the names and uris arrays.
    //The insertion is done at the beginning of the array
    //this way, to load the last saved game you just have to retrieve it from 0 position
    this._uris.splice(0, 0, uri);
    this._names.splice(0, 0, name);
    //returns the number of saved games.
    return this._names.length;
  }

  removeSavedGame(i) {
    this._names.splice(i, 1);
    this._uris.splice(i, 1);
    return this._names.length;
  }
}
