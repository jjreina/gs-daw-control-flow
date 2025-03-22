import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlFlowIfComponent } from './components/control-flow-if/control-flow-if.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlFlowIfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
