import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<string> {
    return this.http.post<any>(
      environment.apiUrl + '/oauth2/genrate-token',
      {
        username: username,
        password: password,
      }
    );
  }

  public register(
    name: string,
    username: string,
    password: string,
    role: string,
    email: string, 
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/bank/saveuser',
      {
        name: name,
        username: username,
        password: password,
        role: role,
        email: email,
      },
      { responseType: 'text' }
    );
  }
}
