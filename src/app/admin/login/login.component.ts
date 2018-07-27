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
  error;
  errorMsg = '';
  loading: boolean;

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmit(f) {
      this.loading = true;
      // console.log(f);
      const email = f.value.email;
      const password = f.value.password;
      this.authService.login(email, password)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/product-list']);
      })
      .catch(err => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err;
        setTimeout(() => {
           this.error = false;
           f.reset();
           this.router.navigate(['/admin-login']);
        }, 5000);
      });
  }
}
