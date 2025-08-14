export interface Testimonial {
  id: number;
  rating: number;
  testimonial: string;
  userPhoto: string;
  userName: string;
  userJob: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    testimonial:
      "Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan perusahaan saat ini proses adaptasi jadi lebih cepat dan produktif.",
    userPhoto: "/src/assets/images/photos/sami.png",
    userName: "Angga Risky",
    userJob: "Full Stack Developer",
  },
  {
    id: 2,
    rating: 5,
    testimonial:
      "Materi yang disajikan sangat relevan dengan industri saat ini. Mentor sangat membantu dan responsive dalam menjawab pertanyaan.",
    userPhoto: "/src/assets/images/photos/4thPerson.png",
    userName: "Sarah Amanda",
    userJob: "Frontend Developer",
  },
  {
    id: 3,
    rating: 5,
    testimonial:
      "Belajar di sini sangat efektif, dari basic sampai advanced. Project-based learning membuat skill langsung terasah.",
    userPhoto: "/src/assets/images/photos/anggaphoto.png",
    userName: "Budi Santoso",
    userJob: "Backend Developer",
  },
  {
    id: 4,
    rating: 5,
    testimonial:
      "Platform yang sangat user-friendly dan materi yang up-to-date. Sangat recommended untuk yang ingin switch career ke tech.",
    userPhoto: "/src/assets/images/photos/sami.png",
    userName: "Diana Putri",
    userJob: "UI/UX Designer",
  },
  {
    id: 5,
    rating: 5,
    testimonial:
      "Komunitas yang sangat supportive dan mentor yang berpengalaman. Belajar jadi lebih menyenangkan dan tidak membosankan.",
    userPhoto: "/src/assets/images/photos/5thPerson.png",
    userName: "Rizki Pratama",
    userJob: "Mobile Developer",
  },
  {
    id: 6,
    rating: 5,
    testimonial:
      "Investasi terbaik untuk karir saya. Setelah ikut course ini, skill meningkat drastis dan mudah dapat job baru.",
    userPhoto: "/src/assets/images/photos/anggaphoto.png",
    userName: "Maya Sari",
    userJob: "DevOps Engineer",
  },
  {
    id: 7,
    rating: 5,
    testimonial:
      "Sistem pembelajaran yang terstruktur dan fleksibel. Bisa belajar sesuai pace sendiri tanpa tekanan.",
    userPhoto: "/src/assets/images/photos/3rdPerson.png",
    userName: "Ahmad Fauzi",
    userJob: "Data Scientist",
  },
];
