import { Routes } from '@angular/router';
import { CustomRoutes } from './shared/types/routes.enum';

export const routes: Routes = [
  {
    path: '',
    redirectTo: CustomRoutes.LANDING,
    pathMatch: 'full',
  },
  {
    path: CustomRoutes.LANDING,
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
  },
  {
    path: CustomRoutes.HOME,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: CustomRoutes.SIGN_IN,
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(
        (c) => c.SignInComponent
      ),
  },
  {
    path: CustomRoutes.SIGN_UP,
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent
      ),
  },
  {
    path: CustomRoutes.FRIDGE,
    loadComponent: () =>
      import('./pages/fridge/fridge.component').then((c) => c.FridgeComponent),
  },
  {
    path: CustomRoutes.SETTINGS,
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
  {
    path: CustomRoutes.RECIPES,
    loadComponent: () =>
      import('./pages/recipes/recipes.component').then(
        (c) => c.RecipesComponent
      ),
  },
  {
    path: CustomRoutes.RECIPES_GENERATOR,
    loadComponent: () =>
      import('./pages/recipes-generator/recipes-generator.component').then(
        (c) => c.RecipesGeneratorComponent
      ),
  },
  {
    path: CustomRoutes.CONTACT,
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (c) => c.ContactUsComponent
      ),
  },
];
