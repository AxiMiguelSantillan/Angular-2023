import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../model/login.model';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin?: FormGroup;
  isLoading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginSvc: LoginService,
    private router: Router,
    private utilSvc: UtilService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  LoginClick() {
    this.isLoading = true;
    console.log('click en el Login!!');
    console.log('value form ', this.formLogin?.value);
    const req = this.formLogin?.value as LoginRequest;
    this.loginSvc.login(req).subscribe({
      next: (response) => {
        this.utilSvc.saveToken(response.token);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.isLoading = false;
        console.log('ERROR!!: ', err);
      },
      complete: () => {
        this.isLoading = false;
        console.log('COMPLETED');
      },
    });
    console.log('Ya se envio la peticion');
  }
}
