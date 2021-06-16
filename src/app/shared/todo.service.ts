import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from './todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  url = 'http://localhost:3000/api/todolist';

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log('post was pushed');
    return this.http
      .post<Todo>(this.url, JSON.stringify(todo), httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message + 'handle client error Ang';
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} handle server error Ang`;
    }
    console.log(errorMessage, 'Handle ang');
    return throwError(errorMessage);
  }
}
