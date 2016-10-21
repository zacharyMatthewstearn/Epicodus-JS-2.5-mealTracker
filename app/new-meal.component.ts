import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <!--<div class="component">
      <h2>New Meal:</h2>
      <div class="form-group">
        <label for="new-meal_input-description">Enter Meal Description:</label>
        <input id="new-meal_input-description" type="text" #newDescription>
      </div>
      <div class="form-group">
        <label for="new-meal_input-id">Enter Meal ID:</label>
        <input id="new-meal_input-id" type="text" #newId>
      </div>
      <div class="form-group">
        <label for="new-meal_select-priority">Priority:</label>
        <select id="new-meal_select-priority" #newPriority>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="form-group">
        <label for="new-meal_select-priority">Category:</label>
        <select id="new-meal_select-category" #newCategory>
          <option value="Work">Work</option>
          <option value="Hobby">Hobby</option>
          <option value="Home">Home</option>
        </select>
      </div>
      <div>
        <button (click)="
          addClicked(newDescription.value, newPriority.value, newId.value, newCategory.value);
          newPriority.value='';
          newCategory.value='';
          newDescription.value='';
          newId.value='';
        ">Add Meal to List</button>
      </div>
    </div>-->
  `
})

export class NewMealComponent {
  // @Output() newMealSender = new EventEmitter();
  // addClicked(description: string, priority: string, id: number, category: string) {
  //   var newMealToAdd: Meal = new Meal(description, priority, id, category);
  //   this.newMealSender.emit(newMealToAdd);
  // }
}
