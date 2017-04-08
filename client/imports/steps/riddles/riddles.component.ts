//Import Component form the angular core package
import { Component, ViewChild } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import template from './riddles.html';

//Compoent Decorator
@Component({
  selector: 'riddles',
  template,
})

export class Riddles {
  @ViewChild('answerInput') answerInput;

  constructor(public snackBar: MdSnackBar) {}

  riddles = [
    {
      'question': `
Redondo, redondo,
fila por fila;
quien sepa leer
mi nombre escriba`,
      'answer': 'criba'
    },
    {
      'question': 'hola',
      'answer': 'bla'
    }
  ]

  current = 0;

  answer;

  errorMessage;


  currentRiddle () {
    return this.riddles[this.current];
  }

  onKeydown () {
    if (this.errorMessage) {
      this.errorMessage = undefined;
    }
  }

  validateAnswer () {
    if (this.answer === undefined ||
        this.answer === '') {

      return;
    }

    if (this.answer.trim().split(' ').pop().toLowerCase() ===
        this.currentRiddle().answer) {

      // show dialog
      this.snackBar.open('¡Correcto!', null, { duration: 2000 });

      this.answer = '';
      this.current += 1;
    } else {
      this.errorMessage = 'No, eso no es';

      this.answerInput.nativeElement.focus();
    }


  }
};
