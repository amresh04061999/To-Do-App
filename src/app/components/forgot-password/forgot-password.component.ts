import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;
   constructor(private authService: AuthService) {
    this.resetForm = new FormGroup({
      email: new FormControl('', Validators.required),
     });
   }
   ngOnInit(): void {
   }
   sendResetLink() {
    if (this.resetForm.valid) {
     this.authService.ForgotPassword(this.resetForm.value.email);
    }
   }
}
