import { Component, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient.interface';

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
