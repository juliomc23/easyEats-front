import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './services/sign-in.service';
import { CustomError } from '../../shared/types/customError.class';
import { Router } from '@angular/router';
import { CustomRoutes } from '../../shared/types/routes.enum';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private signInService = inject(SignInService);
  private router: Router = inject(Router);

  isPasswordInText: boolean = false;

  signInError: string | null = null;

  signInFormControl = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  handleChangePasswordToText(): void {
    this.isPasswordInText = !this.isPasswordInText;
  }

  async handleSignIn(): Promise<void> {
    const { email, password } = this.signInFormControl.value;
    if (email && password) {
      try {
        const response = await this.signInService.signIn(email, password);
        if (response.token) {
          this.router.navigate([CustomRoutes.HOME]);
        }
      } catch (error) {
        if (error instanceof CustomError) {
          this.signInError = error.error;
        }
      }
    }
  }
}
