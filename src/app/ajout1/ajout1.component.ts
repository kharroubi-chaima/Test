import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout1',
  templateUrl: './ajout1.component.html',
  styleUrls: ['./ajout1.component.css']
})
export class Ajout1Component {
  formulaire: FormGroup;
  typeVehicule: string = '';
  erreurSoumission: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulaire = this.formBuilder.group({
      assurance: ['', Validators.required],
      codeImmatriculation: ['', Validators.required],
      numeroContrat: ['', Validators.required],
      nomAssure: ['', Validators.required],
      prenomAssure: ['', Validators.required],
      codePostalAssure: ['', Validators.required]
    });
  }

  soumettreFormulaire(): void {
    if (this.formulaire.invalid) {
      this.erreurSoumission = true; // Affiche le message d'erreur si le formulaire est invalide
      return; // Arrête l'exécution de la fonction
    }

    // Ajoutez votre logique de navigation ici
    this.router.navigate(['/ajout2']);
  }
}
