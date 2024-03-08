import { TestBed } from '@angular/core/testing';

import { HttpPetService } from './http-pet.service';

describe('HttpPetService', () => {
  let service: HttpPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
