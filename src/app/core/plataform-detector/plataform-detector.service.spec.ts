import { TestBed } from '@angular/core/testing';

import { PlataformDetectorService } from './plataform-detector.service';

describe('PlataformDetectorService', () => {
  let service: PlataformDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlataformDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
