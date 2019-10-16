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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showdata;

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
}