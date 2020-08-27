import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {

  participantes = [];
  
  constructor() { }

  ngOnInit(): void {    
    data.forEach(x => 
      this.participantes.push(x)  
    )
  }

}
