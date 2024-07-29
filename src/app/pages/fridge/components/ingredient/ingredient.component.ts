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
    qty: new FormGroup({
      value: new FormControl(),
      unit: new FormControl(),
    }),
  });

  editFood() {
    this.isEditingFood = true;
    this.ingrientFormGroup.patchValue({
      name: this.ingredient.name,
      qty: {
        value: this.ingredient.qty.value,
        unit: this.ingredient.qty.unit,
      },
    });
  }

  cancelEditingFood(ingredientId: number) {
    this.isEditingFood = false;
  }

  saveEditedFood(ingredient: Ingredient) {
    this.isEditingFood = false;

    const { name, qty } = this.ingrientFormGroup.value;

    if (!name || !qty) return;

    this.fridgeService.modifyIngredient(ingredient.id, {
      name,
      qty: { value: qty.value, unit: qty.unit },
    });
  }
}
