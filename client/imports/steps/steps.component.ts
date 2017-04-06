//Import Component form the angular core package
import { Component } from '@angular/core';

import template from './steps.html';

//Compoent Decorator
@Component({
  selector: 'steps',
  template,
})

export class Steps {
	public steps = [
    {
      "type": "test",
      "title": "Juego de acertijos",
      'order': 1
    },
    {
      "type": "gift"
    },
    /*
    {
      'type': 'test',
      'title': 'Plegar la bicicleta',
      'order': 2
    }
    */
  ];

  iconType (step) {
    if (step.type === 'gift') {
      return 'card_giftcard';
    } else if (step.done) {
      return 'check';
    }
  }

  title (step) {
    if (step.type === 'gift') {
      return '¡Regalo!';
    } else {
      return step.title;
    }
  }

}
