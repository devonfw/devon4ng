import { TestBed } from '@angular/core/testing';

import { DataService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
