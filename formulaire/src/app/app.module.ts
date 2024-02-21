import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { EmployeComponent } from './employe/employe.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    EmployeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
