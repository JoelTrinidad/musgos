import { TestBed } from '@angular/core/testing';

import { DefinicionesService } from './definiciones.service';

describe('DefinicionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefinicionesService = TestBed.get(DefinicionesService);
    expect(service).toBeTruthy();
  });
});
