import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoEsercizioComponent } from './inserimento-esercizio';

describe('InserimentoEsercizio', () => {
  let component: InserimentoEsercizioComponent;
  let fixture: ComponentFixture<InserimentoEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserimentoEsercizioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoEsercizioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
