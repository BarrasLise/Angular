import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  firstname : string;
  email : string;
  message : string;
  checkbox : boolean;
  contactPreference: string; 
  selectedCounty: string;

  submitForm(){
    console.log(this.firstname);
    console.log(this.email);
    console.log(this.message);
    console.log(this.checkbox);
    console.log(this.contactPreference); 
    console.log(this.selectedCounty);


    this.resertForm();
  }

  resertForm(){
    this.firstname = "";
    this.email = "";
    this.message = "";
    this.checkbox = false;
    this.contactPreference = ""; 
    this.selectedCounty = "Not-Chosen";
  }

}
