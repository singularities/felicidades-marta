import 'hammerjs';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FelicidadesMarta } from './app.component';
import { Intro } from '../intro/intro.component';
import { Steps } from '../steps/steps.component';
import { Riddles } from '../steps/riddles/riddles.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FelicidadesMarta,
    Intro,
    Steps,
    Riddles
  ],
  entryComponents: [
    FelicidadesMarta
  ],
  bootstrap: [ FelicidadesMarta ]
})
export class AppModule {}
