import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubIssue } from '../interfaces/github/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getMultipleIssues(username: string, reponame: string): Observable<IGithubIssue[]> {
    return this.http.get<IGithubIssue[]>(`https://api.github.com/repos/${username}/${reponame}/issues`);
  }
  getSingleIssue(username: string, reponame: string, issueNumber: number): Observable<IGithubIssue> {
    return this.http.get<IGithubIssue>(`https://api.github.com/repos/${username}/${reponame}/issues/${issueNumber}`);
  }

}
