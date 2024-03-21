import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionComponent } from './list-missions/mission/mission.component';
import { TestimonialComponent } from './list-testimonials/testimonial/testimonial.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { ListMissionsComponent } from './list-missions/list-missions.component';
import { ListTestimonialsComponent } from './list-testimonials/list-testimonials.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    TestimonialComponent,
    HeaderComponent,
    FormComponent,
    MainComponent,
    ListMissionsComponent,
    ListTestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
