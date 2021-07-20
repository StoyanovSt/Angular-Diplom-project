import { TestBed } from '@angular/core/testing';

import { CreateOffertService } from './create-offert.service';

describe('CreateOffertService', () => {
  let service: CreateOffertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOffertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
