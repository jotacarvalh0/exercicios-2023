import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  mostrarFormulario = false;

  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
