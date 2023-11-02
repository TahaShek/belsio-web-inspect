import { TestBed } from '@angular/core/testing';

import { EcryptionDecrytionService } from './ecryption-decrytion.service';

describe('EcryptionDecrytionService', () => {
  let service: EcryptionDecrytionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcryptionDecrytionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
