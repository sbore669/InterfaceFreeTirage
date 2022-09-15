import { TestBed } from '@angular/core/testing';

import { PostultireeService } from './postultiree.service';

describe('PostultireeService', () => {
  let service: PostultireeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostultireeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
