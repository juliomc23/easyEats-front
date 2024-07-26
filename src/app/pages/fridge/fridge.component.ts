import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.scss',
})
export class FridgeComponent {}
