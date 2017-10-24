import {Component} from '@angular/core';
@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styles: [`
    .online {
      color: white;
    }
`]

})
export class ServeurComponent {
  serverId: number = 10;
  serverStaus: string = 'offline';

  constructor(){
    this.serverStaus = Math.random()>0.5 ? 'online' : 'offline';
  }
  getServeurStatus(){
    return this.serverStaus;
  }
  getColor(){
    return (this.serverStaus==='online') ? 'green' : 'red';
  }
}
