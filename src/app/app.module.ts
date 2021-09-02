import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AngularformComponent } from './angularform/angularform.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { MygenderPipe } from './shared/custome/mygender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AngularMatComponent } from './angular-mat/angular-mat.component';
import { MaterialComponent } from './material/material.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    TaskComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    FooterComponent,
    AngularformComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    PipesComponent,
    MygenderPipe,
    AngularMatComponent,
    MaterialComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
