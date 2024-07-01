import { Component, OnInit } from '@angular/core';
import { ProjectButtonComponent } from "../../../shared/components/project-button/project-button.component";
import { ProjectInputComponent } from "../../../shared/components/project-input/project-input.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VALIDATION_REGEX } from '../../../shared/constants/email-validation-regex.const';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { ToastService } from '../../../shared/services/toast.service';
import { ILoginResponse } from '../../../shared/interfaces/login-response.interface';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ProjectButtonComponent, ProjectInputComponent, FormsModule, ReactiveFormsModule, RouterLink, TranslateModule]
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService, private _toastService: ToastService) {}

    ngOnInit(): void {
        this.form = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(24), Validators.pattern(VALIDATION_REGEX)]],
        });
    }

    onSubmit() {
        this._authService.login(this.form.value).subscribe({
            next: async (data: ILoginResponse) => {
                this._authService.setAuthToken(data.token);
                await this._handleRedirect('home');
            },
            error: (err) => this._toastService.error(err.error.message)
          });
    }

    async redirectToRegisterPagePage() {
        await this._handleRedirect('auth/register');
    }
    
    private async _handleRedirect(path: string) {
        await this._router.navigate([path]);
    }
}
