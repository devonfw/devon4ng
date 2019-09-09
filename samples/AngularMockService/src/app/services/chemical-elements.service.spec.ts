import { TestBed } from '@angular/core/testing';

import { ChemicalElementsService } from './chemical-elements.service';

describe('ChemicalElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChemicalElementsService = TestBed.get(ChemicalElementsService);
    expect(service).toBeTruthy();
  });
});
