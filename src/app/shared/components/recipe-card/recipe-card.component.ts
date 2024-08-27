import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Recipe } from '@pages/recipes/types/recipes.interface';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
  animations: [
    trigger('toggleSection', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      transition('open <=> closed', [animate('0.4s ease-in-out')]),
    ]),
  ],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;

  openedRecipe = true;

  handleToggleRecipe() {
    this.openedRecipe = !this.openedRecipe;
  }
}
