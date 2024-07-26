import { Component, Input } from '@angular/core';

interface Ingredient {
  id: number;
  name: string;
  qty: number;
}

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss',
})
export class IngredientComponent {
  @Input({ required: true }) ingredient!: Ingredient;
}
