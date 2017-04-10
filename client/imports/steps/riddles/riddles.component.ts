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
      'question': '¿Cuál es el único animal que muere entre aplausos?',
      'answer': 'mosquito'
    },
    {
      'question': `Tiene escamas y no es pez,
 Tiene corona y no es rey
 ¿Qué es?`,
      'answer': 'piña'
    },
    {
      'question': `Redondo, redondo,
 fila por fila;
 quien sepa leer
 mi nombre escriba`,
      'answer': 'criba'
    },
    {
      'question': `Tiene cabeza, pero no tiene pies,
 Tiene dientes, pero boca no es
 ¿Qué es?`,
      'answer': 'ajo'
    },
    {
      'question': '¿Qué tienen las mujeres en medio de las piernas?',
      'answer': 'rodillas'
    },
    {
      'question': '¿Cuáles son las vacas más divertidas?',
      'answer': 'vacaciones'
    },
    {
      'question': '¿Qué puede ser sordo y agudo a la vez?',
      'answer': 'dolor'
    },
    {
      'question': `A veces soy del haba,
 otras de bote,
 pero suelo ser del culo,
 y me pillo un rebote.
 ¿Qué soy?`,
      'answer': 'tonto'
    },
    {
      'question': `Te la digo,
 te la digo,
 te la vuelvo a decir,
 te la digo,
 te la digo,
 y no la sabes decir`,
      'answer': 'tela'
    },
    {
      'question': `¿Qué animal tiene 4 patas por el día,
 2 por la tarde
 y 3 por la noche`,
      'answer': 'humano'
    },
    {
      'question': `Redondo soy
 y de una sola cara
 a la derecha algo valgo
 a la izquierda nada`,
      'answer': 'cero'
    },
    {
      'question': `Blanca soy de nacimiento,
 rodeada de verdes lazos,
 llorando está por mi quien
 me está haciendo pedazos`,
      'answer': 'cebolla'
    },
    {
      'question': '¿Quienes son los máximos sospechosos cuando se quema el zoo?',
      'answer': 'llamas'
    },
    {
      'question': 'Una señora muy enseñoreda, pasa por el agua y no se moja nada',
      'answer': 'sombra'
    }

  ]

  current = 6;

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
