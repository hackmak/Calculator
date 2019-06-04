import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputForm;
  x;
  y;
  solution;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.inputForm = this.formBuilder.group({
      num1:[null, Validators.required],
      num2:[null, Validators.required],
    });
  }
  add(x, y):number {
    console.log(this.x+this.y);
    let solution=this.x+this.y;
    this.solution=this.x+this.y;
    console.log(this.solution.value);
    return this.solution;
  }

  subtract(x, y) {
    return x-y;
  }

  multiply(x, y) {
    return x*y;
  }


  divide (x, y) {
    if (y === 0) {
      alert('Cannot divide by 0!');
    }
    else {
      console.log(x/y);
    }
  }

  reset() {
    this.inputForm.reset(); // resets form / input values
    this.solution=null; // resets solution value
  }
}