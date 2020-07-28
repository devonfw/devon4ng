import { TestBed } from '@angular/core/testing';

import { Test2Service } from './test2.service';

describe('Test2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test2Service = TestBed.inject(Test2Service);
    expect(service).toBeTruthy();
  });
});
