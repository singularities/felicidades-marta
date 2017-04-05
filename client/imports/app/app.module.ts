import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FelicidadesMarta } from './app.component';
import { Intro } from '../intro/intro.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FelicidadesMarta,
    Intro
  ],
  entryComponents: [
    FelicidadesMarta
  ],
  bootstrap: [ FelicidadesMarta ]
})
export class AppModule {}
