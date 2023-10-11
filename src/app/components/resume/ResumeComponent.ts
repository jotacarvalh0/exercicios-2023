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

  verMais(): void {
    const pontos = document.getElementById("pontos");
    const maisTexto = document.getElementById("mais");
    const btnShowmore = document.getElementById("btn-show");
  
    if (pontos && maisTexto && btnShowmore) {
      if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnShowmore.innerHTML = "Ver mais";
      } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnShowmore.innerHTML = "Ver menos";
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
