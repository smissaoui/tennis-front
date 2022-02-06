import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { MatchScoreComponent } from './match-score/match-score.component';


@NgModule({
  declarations: [
    AppComponent,
    NewMatchComponent,
    PlayersNameComponent,
    MatchScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
