import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VALIDATION_REGEX } from '../../../shared/constants/email-validation-regex.const';
import { ProjectButtonComponent } from '../../../shared/components/project-button/project-button.component';
import { ProjectInputComponent } from '../../../shared/components/project-input/project-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ProjectButtonComponent, ProjectInputComponent, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {}

  ngOnInit(): void {
      this.form = this._fb.group({
          firstName: ['', Validators.required],
          lastName: '',
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(24), Validators.pattern(VALIDATION_REGEX)]],
      });
  }

  onSubmit() {
      this._authService.register(this.form.value).subscribe({
        next: (data) => console.log('data', data),
        error: (err) => console.log('err', err)
      });
  }

  async handleNavigation() {
    await this._router.navigate(['auth/login']);
  }
}
