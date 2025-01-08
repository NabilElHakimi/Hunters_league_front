import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient ) { }

  getUsers(page: number) {
    return this.http.get(environment.apiUrl+ '/user/getAll?page=' + page);
  }

  addUser(user: any) {
    return this.http.post(environment.apiUrl+ '/user/update', user);
  }

}
