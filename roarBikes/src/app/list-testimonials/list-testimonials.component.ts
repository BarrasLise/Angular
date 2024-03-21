import { Component } from '@angular/core';
import { Testimonial } from "./testimonial/testimonial";
import { TestimonialsService } from "../services/testimonial.service";

@Component({
  selector: 'app-list-testimonials',
  templateUrl: './list-testimonials.component.html',
  styleUrl: './list-testimonials.component.css'
})
export class ListTestimonialsComponent {

  testimonial:Testimonial[];
  constructor(private testimonialsService : TestimonialsService){

  }

  ngOnInit():void{
    this.testimonial= this.testimonialsService.getTestimonial();
  }

}
