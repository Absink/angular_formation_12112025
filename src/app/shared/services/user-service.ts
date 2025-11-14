import { inject, Injectable } from '@angular/core';
import { map, Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private api = "http://localhost:3000/users";

  private http = inject(HttpClient);

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.api).pipe(
      map(datas => datas.map(
        data => new User(data)
      ))
    );
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`).pipe(
      map(data => new User(data)));
  }

  public deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
  
}
