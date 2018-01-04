import { TestBed, inject } from '@angular/core/testing';

import { StudentMenagementService } from './student-menagement.service';

describe('StudentMenagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentMenagementService]
    });
  });

  it('should be created', inject([StudentMenagementService], (service: StudentMenagementService) => {
    expect(service).toBeTruthy();
  }));
});
