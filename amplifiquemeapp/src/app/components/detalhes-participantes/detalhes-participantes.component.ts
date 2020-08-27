import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes-participantes',
  templateUrl: './detalhes-participantes.component.html',
  styleUrls: ['./detalhes-participantes.component.scss']
})
export class DetalhesParticipantesComponent implements OnInit {

  @Input() participante = null;
  @Input() idParticipante = null;

  constructor() { }

  ngOnInit(): void {
  }

}
