/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CourseServiceService } from '../services/course-service.service';

describe('Service: CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseServiceService]
    });
  });

  it('should ...', inject([CourseServiceService], (service: CourseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
