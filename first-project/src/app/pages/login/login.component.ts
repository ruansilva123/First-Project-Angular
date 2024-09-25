import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/dummy-json.service';
import { LoginResponse } from '../../interfaces/login-response';
import { Router } from '@angular/router';
import { SubmitFormComponent } from '../../shared/submit-form/submit-form.component';
import { InputTextComponent } from '../../shared/input-text/input-text.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, SubmitFormComponent, InputTextComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

// Use the login service to call the backend login function.
export class LoginComponent{
  _fb = inject(FormBuilder)
  loginService = inject(LoginService)
  response?: LoginResponse
  router = inject(Router)

  form = this._fb.group({
    username : ["", Validators.required],
    password : ["", Validators.required],
  })

  logar(){
    this.loginService.login(
      this.form.controls.username.value!,
      this.form.controls.password.value!
    ).subscribe({
      next:(val:LoginResponse)=>{
        this.response = val;
        this.router.navigate(["home"]);
      }
    })
  }
}
