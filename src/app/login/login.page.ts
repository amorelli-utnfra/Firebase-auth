import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ]),
  });
  error: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {    
  }

  login() {
    this.loginService.login(
      this.loginForm.get('mail')?.value!, 
      this.loginForm.get('password')?.value!)
      .then(()=> {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.error = 'Correo / Clave incorrectos';
      });
  }

}
