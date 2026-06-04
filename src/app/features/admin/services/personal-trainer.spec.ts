import { TestBed } from '@angular/core/testing';

import { PersonalTrainerService } from './personal-trainer';

describe('PersonalTrainer', () => {
  let service: PersonalTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
