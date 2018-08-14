import { TestBed, inject } from '@angular/core/testing';

import { BetsellerService } from './betseller.service';

describe('BetsellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetsellerService]
    });
  });

  it('should be created', inject([BetsellerService], (service: BetsellerService) => {
    expect(service).toBeTruthy();
  }));
});
