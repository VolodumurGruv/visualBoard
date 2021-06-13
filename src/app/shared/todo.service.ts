import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  url = 'http://localhost:3000/api/todolist';

  constructor(private http: HttpClient) {}
}
