import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarTarefaComponent } from './cadastar-tarefa.component';

describe('CadastarTarefaComponent', () => {
  let component: CadastarTarefaComponent;
  let fixture: ComponentFixture<CadastarTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastarTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
