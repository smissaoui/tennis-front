import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMatchComponent } from './new-match/new-match.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { MatchScoreComponent } from './match-score/match-score.component';




const routes: Routes = [
  { path: '', redirectTo: '/new-match', pathMatch: 'full' },
  { path: 'new-match', component: NewMatchComponent },
  { path: 'players-name', component: PlayersNameComponent },
  { path: 'match-score', component: MatchScoreComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
