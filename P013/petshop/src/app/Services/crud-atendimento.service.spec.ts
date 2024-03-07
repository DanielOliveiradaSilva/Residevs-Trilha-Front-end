import { TestBed } from '@angular/core/testing';

import { CRUDAtendimentoService } from './crud-atendimento.service';

describe('CRUDAtendimentoService', () => {
  let service: CRUDAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
