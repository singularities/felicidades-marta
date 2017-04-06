import { Component } from '@angular/core';

import { Intro } from '../intro/intro.component';

import template from "./app.html";

@Component({
  selector: 'felicidades-marta',
  template
})

export class FelicidadesMarta {
  public info = false;

  showInfo () {
    this.info = true;
  }
}
