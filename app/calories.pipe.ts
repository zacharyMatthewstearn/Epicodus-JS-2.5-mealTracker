import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredPriority) {
    // var output: Meal[] = [];
    // if(desiredPriority === "High" ||
    //    desiredPriority === "Medium" ||
    //    desiredPriority === "Low")
    // {
    //   for (var i = 0; i < input.length; i++) {
    //     if (input[i].priority === desiredPriority) {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output;
    // }
    // else {
      return input;
    // }
  }
}
