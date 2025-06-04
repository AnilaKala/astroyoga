import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log("this.loginForm.valid",this.loginForm.valid)
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const hardcodedAdmin = {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin' as const
      };

      if (email === hardcodedAdmin.email && password === hardcodedAdmin.password) {
        this.authService.login(hardcodedAdmin);
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }
}
