import { TestBed } from '@angular/core/testing';

import { EditOffertService } from './edit-offert.service';

describe('EditOffertService', () => {
  let service: EditOffertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditOffertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
