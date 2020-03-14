import { TestBed } from '@angular/core/testing';

import { MusgosService } from './musgos.service';

describe('MusgosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusgosService = TestBed.get(MusgosService);
    expect(service).toBeTruthy();
  });
});
