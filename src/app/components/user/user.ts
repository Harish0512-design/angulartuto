import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    console.log('User component initialized');
    // property initialization or other setup can go here
  }

  ngOnInit() {
    console.log('User component loaded');
    // api call
    // subscription
  }

  ngAfterViewInit() {
    console.log('User component view initialized');
    // DOM manipulations
    // executes after all the component views are initialized
  }

  ngOnDestroy(): void {
    console.log('User component destroyed');
    // cleanup tasks
    // unsubscribe from observables
    // detach event handlers to avoid memory leaks
    // leaving / navigating away from the component
  }

}
