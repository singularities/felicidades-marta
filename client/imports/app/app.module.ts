import 'hammerjs';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FelicidadesMarta } from './app.component';
import { Intro } from '../intro/intro.component';
import { Steps } from '../steps/steps.component';
import { Riddles } from '../steps/riddles/riddles.component';
import { Quizzes } from '../steps/quizzes/quizzes.component';
import { Beatbox } from '../steps/beatbox/beatbox.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FelicidadesMarta,
    Intro,
    Steps,
    Riddles,
    Quizzes,
    Beatbox
  ],
  entryComponents: [
    FelicidadesMarta
  ],
  bootstrap: [ FelicidadesMarta ]
})
export class AppModule {}
