import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // click ( u: string, p: string) {
  //   if (u === 'addmin' && p === 'addmin') {
  //     this.router.navigate(['/admin' ]);
  //   }
  //   else if (u!='addmin' && p!='addmin'){
  //     alert("กรุณากรอกรหัสผ่านให้ถูกต้อง");
  //   }
  // }

  click(u: string, p: string) {
    if (u === 'addmin' && p === 'addmin') {
      console.log(u, p);
        this.router.navigate(['/admin']);

     
    }setTimeout(() => {
      window.location.reload();
    }, 1000);

  }

}
