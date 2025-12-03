import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Personnage {
  nom: string;
  indice: string;
}

@Component({
  selector: 'app-guess-character',
  imports: [FormsModule,NgClass],
  standalone: true,
  templateUrl: './guess-character.html',
  styleUrls: ['./guess-character.css'],
})
export class GuessCharacterComponent {

  personnages: Personnage[] = [
    { nom: 'Frodon', indice: 'Petit hobbit courageux de la Comté' },
    { nom: 'Sam', indice: 'Loyal hobbit, compagnon de Frodon' },
    { nom: 'Gandalf', indice: 'Magicien gris et puissant' },
    { nom: 'Saruman', indice: 'Magicien corrompu de la tour d’Isengard' },
    { nom: 'Legolas', indice: 'Elfe archer légendaire des bois' },
    { nom: 'Aragorn', indice: 'Roi du Gondor, aventurier et justicier' },
    { nom: 'Gimli', indice: 'Nain robuste et fidèle compagnon' },
    { nom: 'Boromir', indice: 'Guerrier du Gondor tenté par l’Anneau' },
    { nom: 'Sauron', indice: 'Seigneur des ténèbres, œil menaçant' },
    { nom: 'Gollum', indice: 'Créature obsédée par l’Anneau' },
    { nom: 'Éowyn', indice: 'Dame de Rohan courageuse et habile' },
    { nom: 'Faramir', indice: 'Frère de Boromir, défenseur du Gondor' },
    { nom: 'Bilbon', indice: 'Hobbit aventurier de la Comté' },
    { nom: 'Galadriel', indice: 'Elfe puissante et sage de Lothlorien' },
    { nom: 'Elrond', indice: 'Seigneur d’Imladris, elfe sage' },
    { nom: 'Théoden', indice: 'Roi de Rohan, courageux et noble' },
    { nom: 'Denethor', indice: 'Intendant du Gondor, parfois cruel' },
    { nom: 'Treebeard', indice: 'Ancien Ent, protecteur des arbres' },
    { nom: 'Orc', indice: 'Créature maléfique du Mordor' },
    { nom: 'Nazgûl', indice: 'Spectres de l’Anneau au service de Sauron' },
    { nom: 'Shelob', indice: 'Araignée géante dans les Monts Brumeux' },
    { nom: 'Tom Bombadil', indice: 'Être mystérieux vivant dans la Vieille Forêt' },
    { nom: 'Radagast', indice: 'Magicien ami des animaux et de la nature' },
    { nom: 'Balrog', indice: 'Démon de feu dans les profondeurs de Moria' },
    { nom: 'Arwen', indice: 'Elfe noble et amour d’Aragorn' },
    { nom: 'Gothmog', indice: 'Chef orc de Minas Morgul' },
    { nom: 'Witch-king', indice: 'Chef des Nazgûl, terrifiant' },
    { nom: 'Smaug', indice: 'Dragon vorace et avide de trésor' },
  ];

  personnageATrouver!: Personnage;
  guess: string = '';
  message: string = '';
  partiesJouees: number = 0;
  correct: boolean = false; // pour animation
  wrong: boolean = false; // pour animation

  constructor() {
    this.nouvellePartie();
  }

  nouvellePartie() {
    this.personnageATrouver = this.personnages[Math.floor(Math.random() * this.personnages.length)];
    this.guess = '';
    this.message = '';
    this.correct = false;
    this.wrong = false;
    this.partiesJouees++;
  }

  verifier() {
    if (!this.guess.trim()) return;
    if (this.guess.toLowerCase() === this.personnageATrouver.nom.toLowerCase()) {
      this.message = `✅ Bravo ! C'était bien ${this.personnageATrouver.nom} ! ✨`;
      this.correct = true;
      this.wrong = false;
    } else {
      this.message = `❌ Faux. Indice : ${this.personnageATrouver.indice} 💨`;
      this.correct = false;
      this.wrong = true;
      // reset effet faux après 1s
      setTimeout(() => this.wrong = false, 1000);
    }
  }
}
