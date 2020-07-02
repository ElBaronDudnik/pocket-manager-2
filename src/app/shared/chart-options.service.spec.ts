import { TestBed } from '@angular/core/testing';

import { ChartOptionsService } from './chart-options.service';

describe('ChartOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartOptionsService = TestBed.get(ChartOptionsService);
    expect(service).toBeTruthy();
  });
});
