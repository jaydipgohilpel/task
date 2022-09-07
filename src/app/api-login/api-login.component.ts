import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-api-login',
  templateUrl: './api-login.component.html',
  styleUrls: ['./api-login.component.scss']
})
export class ApiLoginComponent implements OnInit {

  constructor(private serviceData: ServiceService, private router: Router) { }

  ngOnInit() {
  }
  postId: any;
  login(loginForm: any) {
    if (loginForm.valid) {
      let personData = {
        email: loginForm.value.username,
        password: loginForm.value.password
      }
      this.serviceData.authentication(personData).subscribe((res: any) => {
        if (res.token) {
          alert("login success")
          this.router.navigate(['head-tail']);
        }
        else {
          loginForm.reset();
          alert("invalid Username or Password");
        }

      })
    }
  }

}
