import { TestBed } from '@angular/core/testing';

import { HttpExameService } from './http-exame.service';

describe('HttpExameService', () => {
  let service: HttpExameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
