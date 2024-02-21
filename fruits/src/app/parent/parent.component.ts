import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  currentItem = "Pomme";

  items = ['Poire', 'Banane', 'Ananas', 'Fraise'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
