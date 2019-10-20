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
// room: any;
showBooking;
roomstatus;
deleteB;
Room_ID = new FormControl('');
status_ID = new FormControl('');
BookingS_ID = new FormControl('');

public Booking_ID_show;
public 	BookingName_show;
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get('http://localhost/servicehotell/API/GetBooking.php').subscribe(
      (data: any) => {
        console.log(data);
        this.showBooking = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 
  public updatestatus(Room_ID) {

    const body =
    'Room_ID=' + Room_ID
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/servicehotell/API/UpdateStatus.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.roomstatus = data[0];

        },
        (error: any) => {
          console.log(error);
        }
      );
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'อนุมัติเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      })
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);

      console.log(body);
  }

  public updateBookingS(Booking_ID) {

    const body =
    'Booking_ID=' + Booking_ID
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/servicehotell/API/UpdateBookingS.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.roomstatus = data[0];

        },
        (error: any) => {
          console.log(error);
        }
      );
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'อนุมัติเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      })
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);

      console.log(body);
  }



  public updatebooking(Booking_ID) {

    const body =
    'Booking_ID=' + Booking_ID
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/servicehotell/API/Updatebooking.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.roomstatus = data[0];

        },
        (error: any) => {
          console.log(error);
        }
      );
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'บันทึกข้อมูล',
        showConfirmButton: false,
        timer: 1500
      })
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);

      console.log(body);
  }

  deletebooking(id, name) {
    this.Booking_ID_show = id;
    this.BookingName_show = name;
    Swal.fire({
      title: 'คุณจะลบห้องหมายเลข' + ' ' + this.BookingName_show + ' ' + 'หรือไม่',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00FF33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'ลบเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
        })

        this.http
          .get(
            'http://localhost/servicehotell/API/deletBooking.php?Booking_ID=' + this.Booking_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.deleteB = data[0];
            },
            (error: any) => {
              console.log(error);
            }
          );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    })
  }

 
  
  

}
