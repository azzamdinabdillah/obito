interface TestimonialCardProps {
  rating: number;
  testimonial: string;
  userPhoto: string;
  userName: string;
  userJob: string;
}

export default function TestimonialCard({
  rating,
  testimonial,
  userPhoto,
  userName,
  userJob,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-4 md:p-5 gap-3 md:gap-4 bg-white">
      <div className="flex items-center">
        {Array.from({ length: rating }, (_, index) => (
          <img
            key={index}
            src="/assets/images/icons/Star 1.svg"
            className="w-5 flex shrink-0"
            alt="star icon"
          />
        ))}
      </div>
      <p className="leading-7 text-sm md:text-base">{testimonial}</p>
      <div className="flex items-center gap-3">
        <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
          <img
            src={userPhoto}
            className="w-full h-full object-cover"
            alt={`${userName} photo`}
          />
        </div>
        <div>
          <p className="font-semibold">{userName}</p>
          <p className="text-sm text-obito-text-secondary">{userJob}</p>
        </div>
      </div>
    </div>
  );
}
