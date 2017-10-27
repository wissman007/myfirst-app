import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";
import {ServerService} from "../servers.service";


@Component({
  //selector: '.app-server',
 // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
//  template: '<app-serveur></app-serveur><app-serveur></app-serveur>',
  styleUrls: ['./server.component.css'],
 // providers: [LoggingService, ServerService]
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus : string = 'No server created !';
  serverName='';
  serverCreated = false;

  servers = [];

  constructor( private logginService: LoggingService, private serverService: ServerService) {
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000);
  }

  getAllowServeur(){
    return this.allowNewServer;
  }
  ngOnInit() {
    this.servers = this.serverService.servers;
  }

  onCreateServer2(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server created 2'  + this.serverName ;

     this.serverService.addServer2(this.serverName);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server created '  + this.serverName;
    this.serverService.addServer(this.serverName);
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
