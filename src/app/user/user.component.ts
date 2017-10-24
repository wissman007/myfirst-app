import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = '';
  displaySecret = false;
  events = [];
  i = 0;

  constructor() { }

  ngOnInit() {
  }

  onRestUsername(){
    this.username = '';
  }

  onShowDetails(event: any){

    if(this.displaySecret === true){
      this.displaySecret = false;
    } else {
      this.displaySecret = true;
    }

    this.events.push(this.i++);
  }

  getColor(){

    return this.i >= 5 ? 'blue':'white';
  }
}
