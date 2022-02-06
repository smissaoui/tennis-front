import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { ScoreBoard } from '../score-board';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent implements OnInit {

  @Input() 
  idMatch: String;
  scoreBoard: ScoreBoard; 

  constructor(private matchService: MatchService) { 

}

  ngOnInit(): void {
    
  }

    private playOneBallEvent(): void {
      this.matchService.playOneBall(this.idMatch)
      .subscribe(result => this.scoreBoard = result);
    }

     isMatchFinished(): boolean {
      return (this.winnerCondition("PLAYER1_WIN") || this.winnerCondition("PLAYER2_WIN")) ? true : false;
    }

    winningMessage(): string {
      return this.winnerCondition("PLAYER1_WIN") ? 
      this.scoreBoard.playerName1 + " wins the match" 
      :  this.scoreBoard.playerName2 + " wins the match";
    }

    private libelleButtonOneBall(): string {
      if(this.scoreBoard != null){
        return "Play next ball";
      }
      return "Play first ball";
    }

    private winnerCondition(winner: string): boolean{
      if(this.scoreBoard != null){
        return this.scoreBoard.matchWinner === winner;
      }
      return false;
    }

}
