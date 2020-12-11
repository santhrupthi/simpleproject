/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateProductDetailsService } from './CanActivateProductDetails.service';

describe('Service: CanActivateProductDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateProductDetailsService]
    });
  });

  it('should ...', inject([CanActivateProductDetailsService], (service: CanActivateProductDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
