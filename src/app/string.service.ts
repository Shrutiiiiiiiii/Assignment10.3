import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }


  CountCapital(str: string): number {
    return str.split('').filter((char) => char >= 'A' && char <= 'Z').length;
  }
}
