import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <!--<div *ngIf="childSelectedMeal"  class="component">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <select (change)="onChangePriority($event.target.value)">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select (change)="onChangeCategory($event.target.value)">
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
        <option value="home">Home</option>
      </select>
      <div>
        <label>Enter Meal ID:</label>
        <input [(ngModel)]="childSelectedMeal.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>-->
  `
})

export class EditMealComponent {
  // @Input() childSelectedMeal: Meal;
  // @Output() doneClickedSender = new EventEmitter();
  // doneClicked() {
  //   this.doneClickedSender.emit();
  // }
  // onChangePriority(optionFromMenu) {
  //   this.childSelectedMeal.priority = optionFromMenu;
  // }
  // onChangeCategory(optionFromMenu) {
  //   this.childSelectedMeal.category = optionFromMenu;
  // }
}
