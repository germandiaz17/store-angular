import { Component, Input, SimpleChange, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0
  @Input({required: true}) message: string = ''
  counter = signal(0)
  counterRef: number | undefined

  constructor() {
  //No Async
  //before render
  //una vez
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChange) {
    //before and during render
    console.log('ngOnChanges')
    console.log('-'.repeat(10))
    console.log(changes)
  }

  ngOnInit() {
    //after render
    //una vez
    //async, then, subs
    console.log('ngOnInit')
    console.log('-'.repeat(10))
    console.log('duration: ' + this.duration)
    console.log('message: ' + this.message)
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1 )
    }, 1000)
  }

  ngOnDestroy() {
    window.clearInterval(this.counterRef)
  }
}
