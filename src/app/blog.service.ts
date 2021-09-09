import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  [x: string]: any;
  private basePath = 'https://localhost:44343/api/blog';
  
  constructor(private http: HttpClient) { }

  //list of blog
  public getBlog(): Observable<any> {
    return this.http.get(this.basePath);
  }

  // add blog
  public addBlog(blog : any): Observable<any> {
    return this.http.post(this.basePath, blog);
  }

 // Edit/ Update 
 update(id: any, data: any): Observable<any> {
  return this.httpClient.put(`${this.basePath}/${id}`, data).pipe(
    catchError(this.handleError)
  );
}

// Delete
deleteBlog(blog: any): Observable<any> {
  return this.httpClient.delete(this.basePath,blog);
   
}

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }



  
}




function catchError(handleError: (handleError: any) => any): any {
  throw new Error('Function not implemented.');
}
/* import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  apiUrl: string = 'http://localhost:3000/books';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

} */