import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj: any = {
    "username": "",
    "password": ""
  }

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    // integrate the Api
    /*
      1. Hit the post api
      2. pass loginObj which contains username and password
      3. get the result, if result is True (defined in API response like status) then 4, else 6
      4. store the data in localstorage in string format
      5. navigate to the required page
      6. Show the message/error.
    */
    this.http.post(
      "http://127.0.0.1:8000/api/login/",
      this.loginObj
    ).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('employeeApp', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message)
      }
    })
  }
}
