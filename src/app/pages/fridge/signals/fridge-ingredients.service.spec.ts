import { TestBed } from '@angular/core/testing';

import { FridgeIngredientsService } from './fridge-ingredients.service';

describe('FridgeIngredientsService', () => {
  let service: FridgeIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgeIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
