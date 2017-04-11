//Import Component form the angular core package
import { Component } from '@angular/core';

import template from './quizzes.html';

//Compoent Decorator
@Component({
  selector: 'quizzes',
  template,
})

export class Quizzes {
  answers = [];
  correct;

	public quizzes = [
    {
      question: '¿Cuál es mejor candado?',
      options: [
        'Una U',
        'Una cadena de eslabones',
        'Una cadena de moto',
        'Un cable tipo espiral'
      ],
      answer: 0
    },
    {
      question: '¿Por dónde debe ir un ciclista en ciudad?',
      options: [
        'Pegado a la derecha',
        'Por el centro del carril',
        'Pegado a la izquierda'
      ],
      answer: 1
    },
    {
      question: '¿Debe ir un ciclista por la acera',
      options: [
        'Sí',
        'No'
      ],
      answer: 1
    },
    {
      question: '¿Qué distancia debe respetar un coche al adelantar a una bici?',
      options: [
        'Medio metro',
        'Un metro',
        'Un metro y medio',
        '3 metros'
      ],
      answer: 2
    },
  ];

  validateAnswers () {
    this.correct = this.answers.map((value, index) => {
      return this.quizzes[index].answer === value;
    }).reduce((acc, valid) => {
      if (valid) {
        acc++;
      }

      return acc;
    }, 0);
  }
}
