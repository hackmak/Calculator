import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputForm;
  solution;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.inputForm = this.formBuilder.group({
      num1:[null, Validators.required],
      num2:[null, Validators.required],
    });
  }
  
  /* debug function
  print(){
    console.log(this.inputForm);
    console.log(this.inputForm.controls.num1.value);
    console.log(this.inputForm.controls.num2.value);
  }
  */

  add(x, y) {
    this.solution = this.inputForm.controls.num1.value+this.inputForm.controls.num2.value;
    return this.solution;
  }

  subtract(x, y) {
    this.solution = this.inputForm.controls.num1.value-this.inputForm.controls.num2.value;
    return this.solution;
  }

  multiply(x, y) {
    this.solution = this.inputForm.controls.num1.value*this.inputForm.controls.num2.value;
    return this.solution;
  }


  divide (x, y) {
    // divide by 0 error handled in html - won't allow division when num2 == 0
    this.solution = this.inputForm.controls.num1.value/this.inputForm.controls.num2.value;
    return this.solution;
  }

  reset() {
    this.inputForm.reset(); // resets form / input values
    this.solution=null; // resets solution value
  }
}