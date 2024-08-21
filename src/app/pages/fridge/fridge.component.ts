import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { AddIngredientFormComponent, IngredientComponent } from './components';
import { Ingredient } from './interfaces/ingredient.interface';
import { FilterIngredientsPipe } from './pipes/filter-ingredients.pipe';
import { FridgeService } from './services/fridge.service';
import { Observable, Subscription } from 'rxjs';
import { FridgeIngredientsService } from './signals/fridge-ingredients.service';
@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [
    LayoutComponent,
    IngredientComponent,
    AsyncPipe,
    FormsModule,
    FilterIngredientsPipe,
    AddIngredientFormComponent,
  ],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss',
})
export class FridgeComponent implements OnInit, OnDestroy {
  private fridgeService: FridgeService = inject(FridgeService);
  fridgeIngredients$ = this.fridgeService.getFridgeIngredients();
  fridgeIngredientSignal = inject(FridgeIngredientsService);
  $fridgeIngredients = this.fridgeIngredientSignal.getFridgeIngredients();
  fridgeIngredientsSubscription: Subscription = new Subscription();
  isAddingIngredient: boolean = false;
  searchedIngredientInput: string = '';
  isSearchingIngredients: boolean = false;
  findedIngredient!: Ingredient | undefined;

  ngOnInit() {
    this.fridgeIngredientsSubscription = this.fridgeIngredients$.subscribe({
      next: (ingredients) => {
        this.fridgeIngredientSignal.setFridgeIngredients(ingredients);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  ngOnDestroy() {
    this.fridgeIngredientsSubscription.unsubscribe();
  }

  handleShowAddIngredientsSection() {
    this.isAddingIngredient = !this.isAddingIngredient;
  }

  handleIsSearchingIngredients(): void {
    if (!this.searchedIngredientInput) {
      this.isSearchingIngredients = false;
      return;
    }

    this.fridgeIngredientsSubscription = this.fridgeIngredients$.subscribe({
      next: (ingredients) => {
        this.findedIngredient = ingredients.find((ingredient) =>
          ingredient.name
            .toLowerCase()
            .includes(this.searchedIngredientInput.toLowerCase())
        );
      },
      error(err) {
        console.log(err);
      },
    });
    this.isSearchingIngredients = true;
  }
}
