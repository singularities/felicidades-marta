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
      'order': 1,
      'content': {
        type: 'empty'
      },
      'done': true
    },
    {
      "type": "gift",
      'done': true
    },
    {
      "type": "test",
      "title": "Plegar la bicicleta",
      'order': 2,
      'content': {
        type: 'empty'
      },
      'done': true
    },

    {
      "type": "test",
      "title": "Test bicicletero",
      'order': 4,
      'content': {
        type: 'empty'
      },
      'done': true
    },
    {
      "type": "gift",
      'done': true
    },
    /*

    {
      "type": "test",
      "title": "Subir la bici por las escaleras",
      'order': 3,
      'content': {
        type: 'empty'
      },
    },
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
