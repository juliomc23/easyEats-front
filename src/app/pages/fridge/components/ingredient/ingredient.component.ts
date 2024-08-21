import { Component, inject, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FridgeService } from '../../services/fridge.service';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss',
})
export class IngredientComponent {
  @Input({ required: true }) ingredient!: Ingredient;

  private fridgeService: FridgeService = inject(FridgeService);

  isEditingFood: boolean = false;

  ingrientFormGroup = new FormGroup({
    name: new FormControl(),
    value: new FormControl(),
    unit: new FormControl(),
  });

  editFood() {
    this.isEditingFood = true;
    this.ingrientFormGroup.patchValue({
      name: this.ingredient.name,
      value: this.ingredient.value,
      unit: this.ingredient.unit,
    });
  }

  cancelEditingFood(ingredientId: number) {
    this.isEditingFood = false;
  }

  saveEditedFood(ingredient: Ingredient) {
    this.isEditingFood = false;

    const { name, value, unit } = this.ingrientFormGroup.value;

    if (!name || !value || !unit) return;

    this.fridgeService.modifyIngredient(ingredient.id, {
      name,
      value,
      unit,
    });
  }
}
