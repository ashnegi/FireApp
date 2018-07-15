import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  error = '';

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmit(f) {
      console.log(f);
      const email = f.value.email;
      const password = f.value.password;
      this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['/product-list']);
      })
      .catch(err => {
        this.error = err;
        this.router.navigate(['/admin-login']);
      });
      f.reset();

  }
}
