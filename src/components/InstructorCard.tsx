interface InstructorCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  description: string;
}

export default function InstructorCard({
  name,
  role,
  image,
  rating,
  description,
}: InstructorCardProps) {
  return (
    <div className="instructors-card flex flex-col rounded-[20px] border border-obito-grey p-4 md:p-5 gap-3 md:gap-4 bg-white">
      <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`${name} photo`}
            />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">{name}</p>
            <p className="text-xs md:text-sm text-obito-text-secondary">
              {role}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(rating)].map((_, index) => (
            <img
              key={index}
              src="/src/assets/images/icons/Star 1.svg"
              className="w-5 flex shrink-0"
              alt="star icon"
            />
          ))}
        </div>
      </div>
      <hr className="border-obito-grey" />
      <p className="leading-7 text-sm md:text-base">{description}</p>
    </div>
  );
}
