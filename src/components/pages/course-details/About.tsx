import InstructorCard from "../../InstructorCard";

export default function About() {
  return (
    <div className="flex flex-col gap-5 md:gap-[30px]">
      <div
        id="description"
        className="flex flex-col gap-4 leading-7 w-full max-w-[844px] text-sm md:text-base"
      >
        <p>
          Laravel 11 adalah framework PHP yang menjadi favorit para developer
          karena kemudahan penggunaannya, fitur lengkap, dan performa tinggi.
          Ebook ini dirancang khusus untuk pemula yang ingin mempelajari Laravel
          dari dasar hingga membangun aplikasi web pertama mereka.
        </p>
        <p>
          Anda akan diajak memahami langkah-langkah penting dalam pengembangan
          web menggunakan Laravel, mulai dari instalasi hingga implementasi
          fitur lanjutan. Dalam ebook ini, Anda akan mempelajari dasar-dasar
          Laravel, seperti cara kerja routing, controller, dan Blade template
          engine untuk membuat tampilan yang dinamis dan profesional.
        </p>
      </div>
      <div id="what-you-learn" className="flex flex-col gap-4">
        <h3 className="font-semibold text-base md:text-lg">
          What Will You Learn
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-[30px] w-full max-w-[700px]">
          <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <img
              src="/obito/assets/images/icons/tick-circle-green-fill.svg"
              className="w-6 flex shrink-0"
              alt="icon"
            />
            <p>
              Laravel 11 adalah framework PHP yang menjadi favorit para
              developer
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <img
              src="/obito/assets/images/icons/tick-circle-green-fill.svg"
              className="w-6 flex shrink-0"
              alt="icon"
            />
            <p>
              Laravel 11 adalah framework PHP yang menjadi favorit para
              developer
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <img
              src="/obito/assets/images/icons/tick-circle-green-fill.svg"
              className="w-6 flex shrink-0"
              alt="icon"
            />
            <p>
              Laravel 11 adalah framework PHP yang menjadi favorit para
              developer
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <img
              src="/obito/assets/images/icons/tick-circle-green-fill.svg"
              className="w-6 flex shrink-0"
              alt="icon"
            />
            <p>
              Laravel 11 adalah framework PHP yang menjadi favorit para
              developer
            </p>
          </div>
        </div>
      </div>
      <div
        id="instructors"
        className="flex flex-col w-full max-w-[900px] rounded-[20px] border border-obito-grey p-4 md:p-5 gap-4 md:gap-5 bg-white"
      >
        <h3 className="font-semibold text-base md:text-lg">
          Course Instructors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {[
            {
              name: "Angga Risky",
              role: "Full Stack Developer",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              rating: 5,
              description:
                "Angga Risky Setiawan adalah seorang desainer UI berpengalaman dengan lebih dari 7 tahun pengalaman di industri ini. Ia memiliki keahlian mendalam dalam menciptakan.",
            },
            {
              name: "Budi Santoso",
              role: "Backend Engineer",
              image: "https://randomuser.me/api/portraits/men/45.jpg",
              rating: 4,
              description:
                "Budi Santoso adalah backend engineer yang telah bekerja di berbagai startup teknologi dan memiliki pengalaman luas dalam pengembangan API.",
            },
            {
              name: "Citra Dewi",
              role: "Frontend Developer",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
              rating: 5,
              description:
                "Citra Dewi adalah frontend developer yang ahli dalam React dan telah membangun banyak aplikasi web interaktif untuk klien internasional.",
            },
          ].map((instructor, idx) => (
            <InstructorCard
              key={idx}
              name={instructor.name}
              role={instructor.role}
              image={instructor.image}
              rating={instructor.rating}
              description={instructor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
