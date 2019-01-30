import { TestBed } from '@angular/core/testing';

import { AppRouterService } from './app-router.service';

describe('AppRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRouterService = TestBed.get(AppRouterService);
    expect(service).toBeTruthy();
  });
});
