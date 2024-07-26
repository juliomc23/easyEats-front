import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [LayoutComponent, IngredientComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss',
})
export class FridgeComponent {
  public ingredientsInFridge = [
    { id: 1, name: 'Huevos', qty: 12 },
    { id: 2, name: 'Leche', qty: 12 },
    { id: 3, name: 'Carne', qty: 12 },
    { id: 4, name: 'Pollo', qty: 12 },
    { id: 5, name: 'Jamón', qty: 12 },
    { id: 6, name: 'Queso', qty: 12 },
    { id: 7, name: 'Pescado', qty: 12 },
  ];

  showAddIngredientSection = false;

  handleShowAddIngredientsSection() {
    this.showAddIngredientSection = !this.showAddIngredientSection;
  }
}
