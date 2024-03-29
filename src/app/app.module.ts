import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GameModule } from "./game/game.module";
import { IndexComponent } from "./index/index.component";
import { SavedgamesComponent } from "./savedgames/savedgames.component";

import { GameComponent } from "./game/game/game.component";

import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "new",
    component: GameComponent
  },
  {
    path: "continue",
    component: GameComponent,
    data: { continue: true }
  },
  {
    path: "savedgames",
    component: SavedgamesComponent
  },
  {
    path: "delete/:id",
    component: GameComponent,
    data: { delete: true }
  },
  {
    path: "continue/:id",
    component: GameComponent,
    data: { continue: true }
  },
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, IndexComponent, SavedgamesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
