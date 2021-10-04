import { TestBed } from '@angular/core/testing';

import { SelectsService } from './selects.service';

describe('SelectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectsService = TestBed.get(SelectsService);
    expect(service).toBeTruthy();
  });
});
