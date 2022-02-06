import { Component, OnInit } from '@angular/core';
import { Players } from '../players';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.css']
})
export class PlayersNameComponent implements OnInit {

players : Players = new Players();
idMatch:String;
isMatchStarted: boolean;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  private startMatchEvent(): void {
    this.matchService.createMatch(this.players)
    .subscribe(result => this.idMatch = result);
    this.isMatchStarted = true;
  }
}
