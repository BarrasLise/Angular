import { Component } from '@angular/core';
import { Employe } from '../employe/employe';
import { EmployeService } from '../service/employe.service'; // Assurez-vous d'importer EmployeService


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  nouvelEmploye: Employe = new Employe('', '', new Date()); 

  constructor(private employeService: EmployeService) {}

  ajouterEmploye() {
    this.employeService.ajouterEmploye(this.nouvelEmploye);
    this.nouvelEmploye = new Employe('', '', new Date());
  }

}
