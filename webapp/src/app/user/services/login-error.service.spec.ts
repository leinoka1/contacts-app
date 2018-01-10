import { TestBed, inject } from '@angular/core/testing';

import { LoginErrorService } from './login-error.service';

describe('LoginErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginErrorService]
    });
  });

  it('should be created', inject([LoginErrorService], (service: LoginErrorService) => {
    expect(service).toBeTruthy();
  }));
});
