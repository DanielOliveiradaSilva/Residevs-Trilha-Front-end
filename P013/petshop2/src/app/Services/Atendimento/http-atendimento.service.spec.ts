import { TestBed } from '@angular/core/testing';

import { HttpAtendimentoService } from './http-atendimento.service';

describe('HttpAtendimentoService', () => {
  let service: HttpAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
