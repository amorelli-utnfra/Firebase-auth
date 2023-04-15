import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private loginService: LoginService, private router: Router) {}

  logout() {
  
    this.loginService.logout().then(()=> {
      this.router.navigate(['/login']);
    });
  }
}
