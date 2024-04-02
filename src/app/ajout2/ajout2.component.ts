import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout2',
  templateUrl: './ajout2.component.html',
  styleUrls: ['./ajout2.component.css']
})
export class Ajout2Component {
  formulaire: FormGroup;
  conducteurVisible: boolean = true;
  erreurSoumission: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulaire = this.formBuilder.group({
      nomConducteur: ['', Validators.required],
      prenomConducteur: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+216\d{8}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]]
    });
  }

  toggleFields(event: Event): void {
    this.conducteurVisible = !(event.target as HTMLInputElement).checked;
  }

  soumettreFormulaire(): void {

    if (this.formulaire) {
      if (!this.conducteurVisible) {
        if (this.formulaire.get('telephone')?.value && this.formulaire.get('email')?.value) {
          this.router.navigate(['/ajout3']);
        } else {
          this.erreurSoumission = true;
        }
      } else {
        if (this.formulaire.get('nomConducteur')?.value &&
            this.formulaire.get('prenomConducteur')?.value &&
            this.formulaire.get('telephone')?.value &&
            this.formulaire.get('email')?.value) {
          this.router.navigate(['/ajout3']);
        } else {
          this.erreurSoumission = true;
        }
      }
    }
  }
}