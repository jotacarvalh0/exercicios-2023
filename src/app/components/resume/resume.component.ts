import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  expandido: boolean = false;

  toggleResumo() {
    this.expandido = !this.expandido;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
