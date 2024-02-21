import { Employe } from "../employe/employe";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EmployeService{

    employes: Employe[] = [
        new Employe("Atary", "Adam", new Date(2020, 1, 2)), // 02-02-2020
        new Employe("Dupont", "Pascal", new Date(1999, 8, 13)) // 13-09-1999
    ];

    getEmployes(){
        // console.log(this.employes);
        return this.employes;
    }

    ajouterEmploye(employe: Employe) {
        this.employes.push(employe);
    }

}