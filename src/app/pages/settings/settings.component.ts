import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
