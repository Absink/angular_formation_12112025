import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple',
  imports: [],
  standalone: true,
  templateUrl: './exemple.html',
  styleUrl: './exemple.scss',
})
export class Exemple implements OnInit {

  protected contenuTexte: string = "Composant d'exemple !";
  // private readonly contenuTexte2: string = "Composant d'exemple !";


  constructor() {
    console.log("Call constructeur !");
  }


  ngOnInit(): void {
    console.log("Call ngOnInit !");
    this.contenuTexte = "Ceci est mon composant d'exemple !";
  }

  click_btn(numero: number): void {
    console.log("CLICK numero", numero);
  }



}
