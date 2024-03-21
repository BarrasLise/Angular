import { Injectable } from "@angular/core";
import { Testimonial } from "../list-testimonials/testimonial/testimonial";

@Injectable({
    providedIn: 'root'
})
export class TestimonialsService{

    testimonial : Testimonial[]=[
        new Testimonial("I would like to personally thank you for your outstanding product. You guys rock! It's all good. I can't say enough about Roar Cycles", "- Tammara I."),
        new Testimonial("Roar Cycles is the most valuable business resource we have EVER purchased. I will let my mum know about this, she could really make use of Roar Cycles! Roar Cycles has completely surpassed our expectations.", "- Floris V."),
        new Testimonial("I'm good to go. Roar Cycles is both attractive and highly adaptable. I will refer everyone I know.", "- Carlin B."),
        new Testimonial("Roar Cycles impressed me on multiple levels. I would gladly pay over 600 dollars for Roar Cycles. We can't understand how we've been living without Roar Cycles.", "- Eve V.")
    ]

    getTestimonial(){
        return this.testimonial;
    }

}