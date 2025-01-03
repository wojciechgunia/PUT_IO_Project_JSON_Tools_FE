import { TestBed } from '@angular/core/testing';

import { JsontoolsService } from './jsontools.service';

describe('JsontoolsService', () => {
  let service: JsontoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsontoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
