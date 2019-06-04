import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputForm;
  x:number;
  y:number;
  solution:number;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.inputForm = this.formBuilder.group({
      num1:[null, Validators.required],
      num2:[null, Validators.required],
    });
  }
  add(x, y) {
    console.log(x+y);
    let solution=x+y;
    console.log(this.solution);
  }

  subtract(x, y) {
    return x-y;
  }

  multiply(x, y) {
    return x*y;
  }

  isZero(num) {
    if(num==0){
      return true;
    }
    else {
      return false;
    }
  }
  divide (x, y) {
    if (y === 0) {
      console.warn('Cannot divide by 0!');
    }
    else {
      return x/y;
    }
  }

  reset() {
    this.inputForm.reset(); // resets form / input values
    this.solution=null; // resets solution value
  }
}