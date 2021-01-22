import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { AdditionComponent } from './components/addition/addition.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { FunctionCallingComponent } from './components/function-calling/function-calling.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AdditionComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    PropertyBindingComponent,
    FunctionCallingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
