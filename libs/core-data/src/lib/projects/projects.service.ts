import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl = 'http://localhost:8790/project/';

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl).pipe(
      map(e => {
        return e;
      })
    );
  }

  create(project) {
    return this.httpClient.post(this.baseUrl, project);
  }

  update(project) {
    return this.httpClient.put(this.baseUrl + project.pId, project);
  }

  delete(projectId): Observable<string> {
    console.log('delete service:', projectId);
    return this.httpClient.delete<string>(this.baseUrl + projectId);
  }
}
