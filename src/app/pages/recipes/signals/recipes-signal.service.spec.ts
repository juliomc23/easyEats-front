import { TestBed } from '@angular/core/testing';

import { RecipesSignalService } from './recipes-signal.service';

describe('RecipesSignalService', () => {
  let service: RecipesSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
