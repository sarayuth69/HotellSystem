import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  FormControl
} from '@angular/forms';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  APIService
} from '../api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showdata;
  Booking_ID = new FormControl('');
  BookingName = new FormControl('');
  Tel = new FormControl('');
  BookingS_ID = new FormControl('');
  DateStart = new FormControl('');
  DateLast = new FormControl('');
  Number_of_people = new FormControl('');
  Room_ID = new FormControl('');
  Troom_ID = new FormControl('');
  statusName = new FormControl('');
  floor = new FormControl('');
  Decoration = new FormControl('');
  Price = new FormControl('');

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost/servicehotell/API/Getdata.php').subscribe(
      (data: any) => {
        console.log(data);
        this.showdata = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

 BookingModel(Room_ID,Troom_ID,floor,Decoration,statusName,Price){
  this.Room_ID = new FormControl(Room_ID);
  this.Troom_ID = new FormControl(Troom_ID);
  this.floor = new FormControl(floor);
  this.Decoration = new FormControl(Decoration);
  this.statusName = new FormControl(statusName);
  this.Price = new FormControl(Price);
 }
  Booking() {
    if(this.statusName.value === "ไม่ว่าง"){
      Swal.fire({
        title: 'ไม่สามารถจองได้',
        text: "เนื่องจากห้องนี้ยังไม่ว่าง",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'ยกเลิกการจองเรียบร้อย',
            'ขอบคุณที่ใช้บริการ',
            'success'
          )
        }
      })
    }
     else{
      const body = 'Booking_ID=' + this.Booking_ID.value
      + '&BookingName=' + this.BookingName.value
      + '&Tel=' + this.Tel.value
      + '&BookingS_ID=' + this.BookingS_ID.value
      + '&DateStart=' + this.DateStart.value
      + '&DateLast=' + this.DateLast.value
      + '&Number_of_people=' + this.Number_of_people.value
      + '&Room_ID=' + this.Room_ID.value
      + '&Troom_ID=' + this.Troom_ID.value
    
      console.log(body);
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http
        .post('http://localhost/servicehotell/API/Booking.php', body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data[0]);
            // this.department = data[0];
          },
          (error: any) => {
            console.log(error);
          }
        );
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'เพิ่มแผนกเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
          
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
    }
 }
}