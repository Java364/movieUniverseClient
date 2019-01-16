import { TestBed } from '@angular/core/testing';

import { ProfessionTypeService } from './profession-type.service';

describe('ProfessionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessionTypeService = TestBed.get(ProfessionTypeService);
    expect(service).toBeTruthy();
  });
});
