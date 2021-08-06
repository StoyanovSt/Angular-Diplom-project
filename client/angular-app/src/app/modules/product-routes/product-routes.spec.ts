import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-routes.service';

describe('ProductService', () => {
  // Service-а, който ще тестваме
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProductService] });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
