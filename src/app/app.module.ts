import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Templates } from './angular-templates/templates.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './component interaction/child/child.component';
import { ParentComponent } from './component interaction/parent/parent.component';
import { CpReceiverComponent } from './content projection/cp-receiver/cp-receiver.component';
import { CpSenderComponent } from './content projection/cp-sender/cp-sender.component';

// decorator for module
// has 5 arrays
@NgModule({
  // array of all components created inside the module
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    CpSenderComponent,
    CpReceiverComponent,
    Templates
  ],
  // array of modules that are going to be used in app module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // specifies the root component - can be multiple
  // not done in projects, usually bootstrap component must be one
  bootstrap: [AppComponent],
  // components that are exported from this module
  exports: []
})
export class AppModule { }
