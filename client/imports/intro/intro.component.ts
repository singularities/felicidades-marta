//Import Component form the angular core package
import { Component } from '@angular/core';

import template from './intro.html';

//Compoent Decorator
@Component({
  //Name of our tag
  selector: 'intro',
  //Template for the tag
  template,
})
//Carousel Component itself
export class Intro {
    //images data to be bound to the template
	public slides = [
    { "text": "Una slide" },
    { "text": "Dos slides"}
  ];
}
