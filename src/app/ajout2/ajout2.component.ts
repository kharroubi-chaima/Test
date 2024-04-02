import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importation de FormBuilder et FormGroup depuis @angular/forms
import { Router } from '@angular/router'; // Importez Router depuis @angular/router

@Component({
  selector: 'app-ajout2',
  templateUrl: './ajout2.component.html',
  styleUrls: ['./ajout2.component.css']
})
export class Ajout2Component {
  formulaire: FormGroup; // Formulaire réactif
  conducteurVisible: boolean = true; // Initialiser à true pour afficher les champs de conducteur par défaut
  erreurSoumission: boolean = false; // Déclaration de la propriété erreurSoumission

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulaire = this.formBuilder.group({
      nomConducteur: ['', Validators.required],
      prenomConducteur: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+216\d{8}$/)]],
      email: ['', Validators.required]
    });
  }

  toggleFields(event: Event): void {
    this.conducteurVisible = !(event.target as HTMLInputElement).checked; // Masquer les champs de conducteur si l'assuré est le conducteur
  }

  soumettreFormulaire(): void {
    console.log(this.formulaire.valid)
    if (this.formulaire.valid) {
      // Le formulaire est valide, rediriger vers Ajout3Component
      this.router.navigate(['/ajout3']); // Redirection vers le chemin '/ajout3'
    } else {
      // Afficher un message d'erreur ou effectuer d'autres actions pour gérer l'erreur de soumission
      this.erreurSoumission = true; // Activer l'affichage de l'erreur
    }
  }
}
