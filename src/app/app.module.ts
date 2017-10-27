import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {ServeurComponent} from "./serveur/serveur.component";
import { UserComponent } from './user/user.component';
import { ServerBindingComponent } from './tp-binding/server-binding/server-binding.component';
import { CockpitComponent } from './tp-binding/server-binding/cockpit/cockpit.component';
import { ServerElementComponent } from './tp-binding/server-binding/server-element/server-element.component';
import { GameControlComponent } from './tp-events/game-control/game-control.component';
import { OddComponent } from './tp-events/game-control/odd/odd.component';
import { EvenComponent } from './tp-events/game-control/even/even.component';
import {BasicHightLightDirective} from "./tp-events/game-control/basic-highlight/basic-highlight.directive";
import { BetterHightLightDirective } from './better-hight-light.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServeurComponent,
    UserComponent,
    ServerBindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHightLightDirective,
    BetterHightLightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
