import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  public token;
  public url;

  constructor(private http: HttpClient) {
    this.token=environment.apiKey;
    this.url = environment.url;
  }

  getAllNews(): Observable<any>{
    //let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.token, 'api-key':this.token});
    return this.http.get(this.url+'/api/allNews');
  }

  registerUser(data:any): Observable<any>{
    return this.http.post(this.url+'/api/addUser',data);
  }

}
