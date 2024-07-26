import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { Ingredient } from './interfaces/ingredient.interface';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [LayoutComponent, IngredientComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss',
})
export class FridgeComponent {
  public ingredientsInFridge: Ingredient[] = [
    { id: 1, name: 'Huevos', qty: { value: 12, unit: 'ud' } },
    { id: 2, name: 'Leche', qty: { value: 12, unit: 'gr' } },
    { id: 3, name: 'Carne', qty: { value: 12, unit: 'gr' } },
    { id: 4, name: 'Pollo', qty: { value: 12, unit: 'gr' } },
    { id: 5, name: 'Jamón', qty: { value: 12, unit: 'gr' } },
    { id: 6, name: 'Queso', qty: { value: 12, unit: 'gr' } },
    { id: 7, name: 'Pescado', qty: { value: 12, unit: 'gr' } },
  ];

  showAddIngredientSection = false;

  handleShowAddIngredientsSection() {
    this.showAddIngredientSection = !this.showAddIngredientSection;
  }
}
