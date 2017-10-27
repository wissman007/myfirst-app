import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-server',
 // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
//  template: '<app-serveur></app-serveur><app-serveur></app-serveur>',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus : string = 'No server created !';
  serverName='';
  serverCreated = false;

  servers = ['Testserver', 'Testserver 1'];

  constructor() {
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000);
  }

  getAllowServeur(){
    return this.allowNewServer;
  }
  ngOnInit() {
  }

  onCreateServer2(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server created 2'  + this.serverName ;
    this.servers.push(this.serverName + ' 2');
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server created '  + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
