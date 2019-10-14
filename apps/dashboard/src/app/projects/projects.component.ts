import { ProjectsService, Project } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  selectedProject;
  projects$: Observable<Array<Project>>;
  projectsService: Project;

  constructor(private _projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.initProjectEmpty();
  }

  initProjectEmpty() {
    const empty: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };

    this.selectProject(empty);
  }

  getProjects() {
    this.projects$ = this._projectsService.all();
  }

  deleteSeletedProject(project) {
    console.log(project);
    this._projectsService.delete(project.pId).subscribe(e => {
      this.getProjects();
    });
  }

  handleSelectedProject(project) {
    if (!project.id) {
      this.createSelectProject(project);
    } else {
      this.updateSelectProject(project);
    }
  }

  createSelectProject(project) {
    this._projectsService.create(project).subscribe(e => {
      this.getProjects();
    });
  }

  updateSelectProject(project) {
    this._projectsService.update(project).subscribe(e => {
      this.getProjects();
    });
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }

  handleCancel(project) {
    console.log('CANCEL ', project);
    this.initProjectEmpty();
  }
}
