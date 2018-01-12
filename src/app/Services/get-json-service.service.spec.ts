import { TestBed, inject } from '@angular/core/testing';

import { GetJsonServiceService } from './get-json-service.service';

describe('GetJsonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJsonServiceService]
    });
  });

  it('should be created', inject([GetJsonServiceService], (service: GetJsonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
