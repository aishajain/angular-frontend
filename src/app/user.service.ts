import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl = "http://localhost:8080/user"
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user: User) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  getUserById(id: number) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(user: User) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`, user);
  }

  deleteUser(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
