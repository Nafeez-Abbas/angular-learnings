/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParentChildDataService } from './parent-child-data.service';

describe('Service: ParentChildData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentChildDataService]
    });
  });

  it('should ...', inject([ParentChildDataService], (service: ParentChildDataService) => {
    expect(service).toBeTruthy();
  }));
});
