import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  URL: 'http://localhost/servicehotell/API/BaseModel.php';

 constructor(private http: HttpClient) {

 }

 getConfig() {
  return this.http.get(this.URL);
}

}