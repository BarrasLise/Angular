import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningComponent } from "./warning/warning.component";
import { SuccessComponent } from "./success/success.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tp3Component } from './tp3/tp3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, 
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    Tp3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
