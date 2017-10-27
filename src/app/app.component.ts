import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: rebeccapurple;
    }
`]
})
export class AppComponent {
  interval: number = 0;
  @Output() odds: number[] = [];
  @Output() evens: number[] = [];
  name = '';

  onIntervalFired(index: number){
    this.interval = index;
    if(this.interval%2 !== 0){
      console.log(' odds array ' + this.odds.length);
      this.odds.push(this.interval);

    }
    console.log(' onIntervalFired ' + this.interval);

  }
}
