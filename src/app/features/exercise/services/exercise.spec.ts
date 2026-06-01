import { TestBed } from '@angular/core/testing';
import { ExerciseService } from './exercise';
import { provideHttpClient } from '@angular/common/http';

describe('ExerciseService', () => {
  let service: ExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
