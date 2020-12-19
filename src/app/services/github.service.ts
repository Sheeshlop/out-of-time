import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getIssues(username: string, reponame: string, issueNumber: number | undefined): Observable<any> {
    let numberUrl = '';
    if (issueNumber !== null) {
      numberUrl = '/' + issueNumber;
    }
    console.log(numberUrl);
    return this.http.get(`https://api.github.com/repos/${username}/${reponame}/issues${numberUrl}`);
  }
}
