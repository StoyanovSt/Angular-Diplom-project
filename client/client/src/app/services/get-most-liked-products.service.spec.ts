import { TestBed } from '@angular/core/testing';

import { GetMostLikedProductsService } from './get-most-liked-products.service';

describe('GetMostLikedProductsService', () => {
  let service: GetMostLikedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMostLikedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
