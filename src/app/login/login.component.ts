import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show : boolean;
  admin : boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('Role') === "addmin"){
      this.admin = true;
      this.show = false;
    }
    if(!localStorage.getItem('Role')){
      this.admin = false;
      this.show = true;
    }
  }

  click(u: string, p: string) {
    if (u === 'addmin' && p === 'addmin') {
      console.log(u, p);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.router.navigate(['/admin']);
        localStorage.setItem('Role','addmin');
        setTimeout(() => {
          window.location.reload()
        }, 500);
       
      })
       
    }
   

  }

}
