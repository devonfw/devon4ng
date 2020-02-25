import { TestBed } from '@angular/core/testing';

import { MyLibraryService } from './my-library.service';

describe('MyLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibraryService = TestBed.inject(MyLibraryService);
    expect(service).toBeTruthy();
  });

  it('test firstLetterToUpper', () => {
    const service: MyLibraryService = TestBed.inject(MyLibraryService);
    expect(service.firstLetterToUpper('test')).toBe('Test');
  });
});
