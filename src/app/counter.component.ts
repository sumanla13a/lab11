import { Component, OnInit, EventEmitter, Input } from '@angular/core';

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
  _counter:number;

  constructor() { 
  	this.counterValue = this.counter;
  	this.onCounterChange = new EventEmitter();
  }

  set counter(counter:number) {
  	this._counter = counter;
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
