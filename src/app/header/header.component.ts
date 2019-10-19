import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  cleruser(){
    Swal.fire({
      title: 'ยืนยันการออกจากระบบ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.router.navigate(['/home']);
      }
    }).then(()=>{
      
    
    }).then(()=>{
      window.location.reload();
    })
  
    
  }




}
