import { TestBed } from '@angular/core/testing';

import { ErrorPagesService } from './error-pages.service';

describe('ErrorPagesService', () => {
  let service: ErrorPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
