import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  FormControl
} from '@angular/forms';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
room: any;

Room_ID = new FormControl('');
status_ID = new FormControl('');
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
  }

  AddRoom() {
    const body = 'Room_ID=' + this.Room_ID.value
    + '&status_ID=' + this.status_ID.value;

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/servicehotell/API/InsertRoom.php', body, {
        headers
      })
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.room = data;
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'เพิ่มห้องเรียบร้อย',
            showConfirmButton: false,
            timer: 1500
    
          });
        setTimeout(() => {
            window.location.reload();
          }, 2000);

        },
        (error: any) => {
          console.log(error);
        }
      );
   

 }
}
