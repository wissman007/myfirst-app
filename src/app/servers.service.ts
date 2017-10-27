import {LoggingService} from "./logging.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ServerService {
  servers = ['Testserver', 'Testserver 1'];

  constructor(private loggingService : LoggingService){}

  addServer(serverName: string){
    this.servers.push(serverName + ' 2');
    this.loggingService.logStatusChange(serverName);
  }

  addServer2(serverName){
    this.servers.push(serverName);
    this.loggingService.logStatusChange(serverName);
  }
}
