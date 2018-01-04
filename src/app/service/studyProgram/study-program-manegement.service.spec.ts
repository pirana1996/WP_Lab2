import { TestBed, inject } from '@angular/core/testing';

import { StudyProgramManegementService } from './study-program-manegement.service';

describe('StudyProgramManegementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudyProgramManegementService]
    });
  });

  it('should be created', inject([StudyProgramManegementService], (service: StudyProgramManegementService) => {
    expect(service).toBeTruthy();
  }));
});
