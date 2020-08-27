import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesParticipantesComponent } from './detalhes-participantes.component';

describe('DetalhesParticipantesComponent', () => {
  let component: DetalhesParticipantesComponent;
  let fixture: ComponentFixture<DetalhesParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
