import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {

  constructor(http: HttpClient) {
    super('http://api.github.com/users/mosh-hamedani/followers', http);
  }
}
