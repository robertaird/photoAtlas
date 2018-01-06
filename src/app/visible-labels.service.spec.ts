import { TestBed, inject } from '@angular/core/testing';

import { VisibleLabelsService } from './visible-labels.service';

describe('VisibleLabelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisibleLabelsService]
    });
  });

  it('should be created', inject([VisibleLabelsService], (service: VisibleLabelsService) => {
    expect(service).toBeTruthy();
  }));
});
