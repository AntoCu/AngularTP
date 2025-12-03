import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carte } from '../models/carte';
import { CommonModule } from '@angular/common';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule, NgClass, NgStyle, CommonModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css',
})
export class HelloWorld {
  cartes: Carte[] = [];
  cartesSelectionnees: Carte[] = [];

  ngOnInit() {
    this.init()
  }

  init() {
const valeurs = [
  '💍',   // L’Anneau
  '🧙‍♂️', // Gandalf
  '🧝‍♂️', // Legolas
  '🧔',   // Gimli / Nain
  '⚔️',   // Épée (Andúril)
  '🛡️',   // Bouclier Gondor
  '🌋',   // Mont Doom / Mordor
  '🧟',   // Orc / ennemis
];
    this.cartes = [];

    for (let i = 0; i < valeurs.length; i++) {
      const carte: Carte = {
        id: i,
        valeur: valeurs[i],
        revelee: false,
        trouve: false
      };
      const carte2: Carte = {
        id: i,
        valeur: valeurs[i],
        revelee: false,
        trouve: false
      };
      this.cartes.push(carte, carte2);
    }
    for (let i = this.cartes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
    }
    this.cartesSelectionnees = [];
  }

  choisirCarte(carte: Carte) {
    if (carte.revelee || carte.trouve || this.cartesSelectionnees.length === 2) {
      alert("Tu peux pas faire ça chef");
      return;
    }
    carte.revelee = true;
    this.cartesSelectionnees.push(carte);
    if (this.cartesSelectionnees.length === 2) {
      this.verifierPaire();
    }
  }

  verifierPaire() {
    const [c1, c2] = this.cartesSelectionnees;

    if (c1.valeur === c2.valeur) {
      c1.trouve = true;
      c2.trouve = true;
    } else {
      c1.revelee = false;
      c2.revelee = false;
    }

    this.cartesSelectionnees = [];
  }

}
