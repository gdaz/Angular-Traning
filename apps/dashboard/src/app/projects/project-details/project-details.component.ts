import { Project } from '@workshop/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'workshop-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
  constructor() {}

  ngOnInit() {}
}
