import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'acceso',
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(
        (c) => c.SignInComponent
      ),
  },
  {
    path: 'registrarse',
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent
      ),
  },
  {
    path: 'frigorifico',
    loadComponent: () =>
      import('./pages/fridge/fridge.component').then((c) => c.FridgeComponent),
  },
  {
    path: 'ajustes',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
  {
    path: 'recetas',
    loadComponent: () =>
      import('./pages/recipes/recipes.component').then(
        (c) => c.RecipesComponent
      ),
  },
  {
    path: 'generador',
    loadComponent: () =>
      import('./pages/recipes-generator/recipes-generator.component').then(
        (c) => c.RecipesGeneratorComponent
      ),
  },
  {
    path: 'contactanos',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
];
