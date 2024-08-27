import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { GenerateOptionsComponent } from './generate-options/generate-options.component';
import { RecipesSignalService } from '@pages/recipes/signals/recipes-signal.service';
import { RecipeCardComponent } from 'app/shared/components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipes-generator',
  standalone: true,
  imports: [LayoutComponent, GenerateOptionsComponent, RecipeCardComponent],
  templateUrl: './recipes-generator.component.html',
  styleUrl: './recipes-generator.component.scss',
})
export class RecipesGeneratorComponent {
  wantToGenerateRecipes: boolean = false;

  private recipesSignalService = inject(RecipesSignalService);

  recipes$ = this.recipesSignalService.getRecipes();

  handleWantToGenerateRecipes(event: boolean) {
    this.wantToGenerateRecipes = event;
  }
}
