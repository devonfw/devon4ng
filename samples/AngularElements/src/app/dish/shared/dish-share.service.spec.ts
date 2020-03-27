import { TestBed } from '@angular/core/testing';
import { DishShareService } from './dish-share.service';

describe('DishShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishShareService = TestBed.inject(DishShareService);
    expect(service).toBeTruthy();
  });
});
