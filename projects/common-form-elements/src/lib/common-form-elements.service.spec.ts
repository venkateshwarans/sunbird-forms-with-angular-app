import { TestBed, inject } from '@angular/core/testing';

import { CommonFormElementsService } from './common-form-elements.service';

describe('CommonFormElementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonFormElementsService]
    });
  });

  it('should be created', inject([CommonFormElementsService], (service: CommonFormElementsService) => {
    expect(service).toBeTruthy();
  }));
});
