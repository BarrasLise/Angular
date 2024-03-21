import { Component, Input } from '@angular/core';
import { Testimonial } from "./testimonial";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input() myTestimonial:Testimonial;

}
