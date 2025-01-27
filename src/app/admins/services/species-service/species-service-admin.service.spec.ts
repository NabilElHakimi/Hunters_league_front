import { TestBed } from '@angular/core/testing';

import { SpeciesServiceAdminService } from './species-service-admin.service';

describe('SpeciesServiceAdminService', () => {
  let service: SpeciesServiceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesServiceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
