import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Ingredient,
  Unit,
} from '@pages/fridge/interfaces/ingredient.interface';
import { FridgeService } from '@pages/fridge/services/fridge.service';
import { FridgeIngredientsService } from '@pages/fridge/signals/fridge-ingredients.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-ingredient-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-ingredient-form.component.html',
  styleUrl: './add-ingredient-form.component.scss',
})
export class AddIngredientFormComponent {
  private fridgeService = inject(FridgeService);
  private ingredientSignalService = inject(FridgeIngredientsService);
  private toasterService = inject(ToastrService);
  addingIngredientStatus = {
    completed: false,
    message: '',
  };
  addIngredientFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl(null, Validators.required),
    unit: new FormControl<Unit>('g', Validators.required),
  });

  async handleAddNewIngredient() {
    const { name, value, unit } = this.addIngredientFormGroup.value;
    if (!name || !value || !unit) {
      return;
    }

    try {
      const response = await this.fridgeService.addIngredient({
        name,
        value,
        unit,
      });
      if (response.status === 201) {
        this.toasterService.success('¡Ingrediente añadido!');

        if (response.body) {
          const newIngredientAdded = response.body as Ingredient;
          this.ingredientSignalService.addFridgeIngredient(newIngredientAdded);
        }

        this.addIngredientFormGroup.reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        this.toasterService.error(error.message);
      }
    }
  }
}
