import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoEsercizio } from './inserimento-esercizio';

describe('InserimentoEsercizio', () => {
  let component: InserimentoEsercizio;
  let fixture: ComponentFixture<InserimentoEsercizio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserimentoEsercizio],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoEsercizio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
