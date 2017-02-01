import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decreaseCounter()">-</button>
    <!-- <input type="number" [(ngModel)]="counterValue" value="{{counterValue}}"/> -->
    {{counterValue}}
    <button (click)="increaseCounter()">+</button>
  `,
  styles: [],
  inputs: ['counter'],
  outputs: ['onCounterChange']
})
export class CounterComponent implements OnInit {
  onCounterChange: EventEmitter<number>
  counterValue:number;
  constructor() { 
  	this.counterValue = 0;
  	this.onCounterChange = new EventEmitter();
  }
  set counter(counter:number) {
  	this.counterValue = counter;
  }
  increaseCounter() {
  	this.counterValue++;
  	this.onCounterChange.emit(this.counterValue);
  }
  decreaseCounter() {
    this.counterValue--;
  	this.onCounterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
