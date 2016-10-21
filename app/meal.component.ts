import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  template: `
    <!--<div class="component">
      <input *ngIf="meal.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
      <input *ngIf="meal.done === false" type="checkbox" (click)="toggleDone(true)"/>
      <label>{{ meal.description }}</label>
      <h4>Priority: {{ meal.priority }}</h4>
      <h4>Category: {{ meal.category }}</h4>
      <button (click)="editButtonHasBeenClicked()">Edit</button>
    </div>-->
  `
})
export class MealComponent {
  // @Input() meal: Meal;
  // @Output() editClickSender = new EventEmitter();
  // toggleDone(setCompleteness: boolean) {
  //   this.meal.done = setCompleteness;
  // }
  // editButtonHasBeenClicked() {
  //   console.log(this.meal);
  //   this.editClickSender.emit(this.meal);
  // }
}
