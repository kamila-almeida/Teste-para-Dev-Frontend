import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { PopoverModule } from "ngx-smart-popover";
import { DetalhesParticipantesComponent } from './components/detalhes-participantes/detalhes-participantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    DetalhesParticipantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
