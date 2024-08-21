import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomRoutes } from '../../shared/types/routes.enum';
import { SignInService } from './services/sign-in.service';
import { AccessTokenService } from 'app/shared/signals/access-token.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private signInService = inject(SignInService);
  private accessTokenService = inject(AccessTokenService);
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
        if (response.accessToken) {
          this.accessTokenService.setAccessToken(response.accessToken);
          this.router.navigate([CustomRoutes.HOME]);
        }
      } catch (error) {
        if (error instanceof Error) {
          this.signInError = error.message;
        }
      }
    }
  }
}
