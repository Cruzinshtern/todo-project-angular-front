import { Component, OnInit } from '@angular/core';
import { ProjectButtonComponent } from "../../../shared/components/project-button/project-button.component";
import { ProjectInputComponent } from "../../../shared/components/project-input/project-input.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VALIDATION_REGEX } from '../../../shared/constants/email-validation-regex.const';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ProjectButtonComponent, ProjectInputComponent, FormsModule, ReactiveFormsModule, RouterLink, TranslateModule]
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {}

    ngOnInit(): void {
        this.form = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(24), Validators.pattern(VALIDATION_REGEX)]],
        });
    }

    onSubmit() {
        this._authService.login(this.form.value).subscribe({
            next: (data) => console.log('data', data),
            error: (err) => console.log('err', err)
          });
    }

    async handleNavigation() {
        await this._router.navigate(['auth/register'])
    }
}
