import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  mostrarFormulario = false;
  postTitle: string = '';
  postContent: string = '';
  showSuccessMessage: boolean = false;
  showCreateNewPost: boolean = true;

  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.showCreateNewPost = !this.showCreateNewPost;
    if (this.mostrarFormulario) {
      this.showSuccessMessage = false;
    }
  }

  submitPost() {
    this.showSuccessMessage = true;
    this.mostrarFormulario = false;
    this.showCreateNewPost = false;
  }

  reloadPage() {
    window.location.reload();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
