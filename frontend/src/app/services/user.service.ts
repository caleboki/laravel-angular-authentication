import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private Token: TokenService) { }

  private baseUrl = 'http://localhost:8000/api';

  me() {
    return this.http.get(`${this.baseUrl}/me`)
  }
}
