import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  primeCheckResult: boolean = false;
  capitalCountResult: number = 0;

  constructor(
    private numberService: NumberService,
    private stringService: StringService
  ) {
    this.checkPrime();
    this.countCapitals();
  }

  checkPrime() {
    var testNumber = 11; 
    this.primeCheckResult = this.numberService.ChkPrime(testNumber);
  }

  countCapitals() {
    var testString = 'Hello World'; 
    this.capitalCountResult = this.stringService.CountCapital(testString);
  }

}
