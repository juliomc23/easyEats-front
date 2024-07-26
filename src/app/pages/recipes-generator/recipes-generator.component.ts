import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-recipes-generator',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './recipes-generator.component.html',
  styleUrl: './recipes-generator.component.scss',
})
export class RecipesGeneratorComponent {}
