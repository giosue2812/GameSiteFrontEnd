import { TestBed } from '@angular/core/testing';

import { ListEnvieService } from './list-envie.service';

describe('ListEnvieService', () => {
  let service: ListEnvieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEnvieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
