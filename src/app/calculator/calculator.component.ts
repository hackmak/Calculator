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
  print(){
    console.log(this.inputForm);
    console.log(this.inputForm.controls.num1.value);
    console.log(this.inputForm.controls.num2.value);
  }

  add(x, y) {
    this.solution = this.inputForm.controls.num1.value+this.inputForm.controls.num2.value;
    return this.solution;
   /* console.log(this.x+this.y);
    let solution=this.x+this.y;
    this.solution=this.x+this.y;
    console.log(this.solution.value);
    return this.solution;
    */
  }

  subtract(x, y):number {
    this.solution = this.inputForm.controls.num1.value-this.inputForm.controls.num2.value;
    return this.solution;
  }

  multiply(x, y) {
    this.solution = this.inputForm.controls.num1.value*this.inputForm.controls.num2.value;
    return this.solution;
  }


  divide (x, y) {
    if (y === 0) {
      alert('Cannot divide by 0!');
    }
    else {
      this.solution = this.inputForm.controls.num1.value/this.inputForm.controls.num2.value;
    return this.solution;
    }
  }

  reset() {
    this.inputForm.reset(); // resets form / input values
    this.solution=null; // resets solution value
  }
}