import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {

  @Input() item = "fruit enfant vers parent";

  @Output() newItemEvent = new EventEmitter<string>();

  // inputValue: string = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    // this.inputValue = '';
  }

}
