
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';




export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.url)
    .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError (this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
        .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    } else if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    } else {
    return Observable.throw(new AppError(error.json()));
    }
  }
}