import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIssue } from '../interfaces/github/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getMultipleIssues(username: string, reponame: string): Observable<IIssue[]> {
    return this.http.get<IIssue[]>(`https://api.github.com/repos/${username}/${reponame}/issues`);
  }
  getSingleIssue(username: string, reponame: string, issueNumber: number): Observable<IIssue> {
    return this.http.get<IIssue>(`https://api.github.com/repos/${username}/${reponame}/issues/${issueNumber}`);
  }
}
