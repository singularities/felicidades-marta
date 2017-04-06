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
    { "text": "Este año que estoy más ocioso te he preparado un regalo muy especial..." },
    { "text": "Un app solo para tí, para que vayas descubriendo lo que te tengo preparado y te inicies con ello"},
    { "text": "Te quiero chuchi"},
    { "text": "Qué será... ¡Vamos a empezar a jugar!"},
    { "text": "¡Completa las pruebas para descubrir los regalos!"}
  ];
}
