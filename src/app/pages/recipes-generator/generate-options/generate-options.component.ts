import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generate-options',
  standalone: true,
  imports: [],
  templateUrl: './generate-options.component.html',
  styleUrl: './generate-options.component.scss',
})
export class GenerateOptionsComponent {
  @Output() wantToGenerateRecipes = new EventEmitter<boolean>(false);

  userAskForKnoweatsRecipes = false;

  getKnoweatsRecipes() {
    this.wantToGenerateRecipes.emit(true);
    this.userAskForKnoweatsRecipes = true;
  }
}
