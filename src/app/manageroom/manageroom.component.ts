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
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.scss']
})
export class ManageroomComponent implements OnInit {
  showdata;
  deleteroom;
   edit;
  Room_ID = new FormControl('');
  status_ID = new FormControl('');
  Troom_ID = new FormControl('');
  floor = new FormControl('');
  Decoration = new FormControl('');
  public Room_ID_show;
  public statusName_show;
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

  delete(id, name) {
    this.Room_ID_show = id;
    this.statusName_show = name;
    Swal.fire({
      title: 'คุณจะลบห้องหมายเลข' + ' ' + this.Room_ID_show + ' ' + 'หรือไม่',
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
            'http://localhost/servicehotell/API/deletroom.php?Room_ID=' + this.Room_ID_show
          )
          .subscribe(
            (data: any) => {
              console.log(data[0]);
              this.deleteroom = data[0];
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



  updatePosition(
    Room_ID,status_ID,Troom_ID,Decoration,floor
  ) {
    this.Room_ID = new FormControl(Room_ID);
    this.status_ID = new FormControl(status_ID);
    this.Troom_ID = new FormControl(Troom_ID);
    this.floor = new FormControl(floor);
    this.Decoration = new FormControl(Decoration);
  }
  public updateEmpposition() {
    const body =
      'Room_ID=' + this.Room_ID.value +
      '&status_ID=' + this.status_ID.value
      '&Troom_ID=' + this.Troom_ID.value
      '&floor=' + this.floor.value
      '&Decoration=' + this.Decoration.value
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/UpdatePosition.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.edit = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }


}
