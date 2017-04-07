//Import Component form the angular core package
import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() onFinished = new EventEmitter();

  currentSlide = 0;

	public slides = [
    {
      "text": "Este año que estoy más ocioso te he preparado un regalo muy especial...",
      "image": "regalo.png"
    },
    {
      "text": "Un app solo para tí, para que vayas descubriendo lo que te tengo preparado y te inicies con ello",
      "image": "app-para-ti.png"
    },
    {
      "text": "Te quiero chuchi",
      "image": "te-quiero.jpg"
    },
    {
      "text": "¿Qué será...? ¡Vamos a empezar a jugar!",
      "image": "interrogante.png"
    },
    {
      "text": "¡Completa las pruebas para descubrir los regalos!",
      "image": "go.jpg"
    }
  ];

  finish () {
    this.onFinished.emit();
  }
}
