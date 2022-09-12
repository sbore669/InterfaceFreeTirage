import { TestBed } from '@angular/core/testing';

import { ListepostservService } from './listepostserv.service';

describe('ListepostservService', () => {
  let service: ListepostservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListepostservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
