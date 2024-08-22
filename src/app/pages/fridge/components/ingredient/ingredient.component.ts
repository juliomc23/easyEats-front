import { Component, inject, Input } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FridgeService } from '../../services/fridge.service';
import { ToastrService } from 'ngx-toastr';
import { FridgeIngredientsService } from '@pages/fridge/signals/fridge-ingredients.service';

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
  private fridgeIngredientService = inject(FridgeIngredientsService);
  private toastrService = inject(ToastrService);

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
    const { name, value, unit } = this.ingrientFormGroup.value;

    if (!name || !value || !unit) return;

    this.fridgeService
      .modifyIngredient(ingredient.id, {
        name,
        value,
        unit,
      })
      .subscribe({
        next: ({ status, body }) => {
          if (status === 200) {
            this.toastrService.success('¡Ingrediente modificado con exito!');
            this.isEditingFood = false;
            this.fridgeIngredientService.modifyFridgeIngredient(
              body as Ingredient
            );
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteFood(id: number): void {
    this.fridgeService.deleteIngredient(id).subscribe({
      next: ({ status, body }) => {
        if (status === 200) {
          this.toastrService.success(body?.message);
          this.fridgeIngredientService.deleteFridgeIngredient(id);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
