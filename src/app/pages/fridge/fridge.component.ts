import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { FridgeService } from './services/fridge.service';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [LayoutComponent, IngredientComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss',
})
export class FridgeComponent {
  private fridgeService: FridgeService = inject(FridgeService);

  fridgeIngredients$ = this.fridgeService.getFridgeIngredients();

  showAddIngredientSection = false;

  handleShowAddIngredientsSection() {
    this.showAddIngredientSection = !this.showAddIngredientSection;
  }
}
