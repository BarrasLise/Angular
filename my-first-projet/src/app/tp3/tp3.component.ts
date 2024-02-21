import { Component } from '@angular/core';

@Component({
  selector: 'app-tp3',
  templateUrl: './tp3.component.html',
  styleUrl: './tp3.component.css'
})
export class Tp3Component {
  username = "Lise";
  date = new Date();
  isDisabled = false;
  salutation = "";

  deleteUsername(){
    this.username="";

    this.isDisabled = true;
  }

  onSeSalut(event: any){
    this.salutation = event.target.value;
  }

  

}
