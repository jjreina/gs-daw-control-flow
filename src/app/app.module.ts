import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlFlowIfComponent } from './components/control-flow-if/control-flow-if.component';
import { ControlFlowForComponent } from './components/control-flow-for/control-flow-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlFlowIfComponent,
    ControlFlowForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
