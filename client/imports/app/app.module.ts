import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FelicidadesMarta } from './app.component';
import { Intro } from '../intro/intro.component';
import { Steps } from '../steps/steps.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FelicidadesMarta,
    Intro,
    Steps
  ],
  entryComponents: [
    FelicidadesMarta
  ],
  bootstrap: [ FelicidadesMarta ]
})
export class AppModule {}
