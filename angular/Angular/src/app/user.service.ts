  import { Injectable } from '@angular/core';
  import axios from 'axios';
  import { Observable, from } from 'rxjs';

  export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    age: number;
    post: string;
    joiningDate: string;  
    salary: string;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiUrl = 'http://localhost:4000/users'; // URL to web API

    constructor() { }

    getUsers(): Observable<User[]> {
      return from(axios.get<User[]>(this.apiUrl).then(response => response.data));
    }

    addUser(user: User): Observable<User> {
      return from(axios.post<User>(this.apiUrl, user).then(response => response.data));
    }

    deleteUser(id: number): Observable<any> {
      // Using axios for the HTTP DELETE request
      // Convert the Axios Promise to an Observable with RxJS 'from' function
      return from(axios.delete(`${this.apiUrl}/${id}`));
    }

   
  }
