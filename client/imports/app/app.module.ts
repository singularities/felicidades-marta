import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FelicidadesMarta } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    FelicidadesMarta
  ],
  entryComponents: [
    FelicidadesMarta
  ],
  bootstrap: [ FelicidadesMarta ]
})
export class AppModule {}
