import TestimonialCard from "../../TestimonialCard";
import { testimonials } from "../../../data/testimonials";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[860px] gap-4 md:gap-5">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          rating={testimonial.rating}
          testimonial={testimonial.testimonial}
          userPhoto={testimonial.userPhoto}
          userName={testimonial.userName}
          userJob={testimonial.userJob}
        />
      ))}
    </div>
  );
}
