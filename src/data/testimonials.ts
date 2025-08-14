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
    userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Angga Risky",
    userJob: "Full Stack Developer",
  },
  {
    id: 2,
    rating: 5,
    testimonial:
      "Materi yang disajikan sangat relevan dengan industri saat ini. Mentor sangat membantu dan responsive dalam menjawab pertanyaan.",
    userPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
    userName: "Sarah Amanda",
    userJob: "Frontend Developer",
  },
  {
    id: 3,
    rating: 5,
    testimonial:
      "Belajar di sini sangat efektif, dari basic sampai advanced. Project-based learning membuat skill langsung terasah.",
    userPhoto: "https://randomuser.me/api/portraits/men/65.jpg",
    userName: "Budi Santoso",
    userJob: "Backend Developer",
  },
  {
    id: 4,
    rating: 5,
    testimonial:
      "Platform yang sangat user-friendly dan materi yang up-to-date. Sangat recommended untuk yang ingin switch career ke tech.",
    userPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
    userName: "Diana Putri",
    userJob: "UI/UX Designer",
  },
  {
    id: 5,
    rating: 5,
    testimonial:
      "Komunitas yang sangat supportive dan mentor yang berpengalaman. Belajar jadi lebih menyenangkan dan tidak membosankan.",
    userPhoto: "https://randomuser.me/api/portraits/men/77.jpg",
    userName: "Rizki Pratama",
    userJob: "Mobile Developer",
  },
  {
    id: 6,
    rating: 5,
    testimonial:
      "Investasi terbaik untuk karir saya. Setelah ikut course ini, skill meningkat drastis dan mudah dapat job baru.",
    userPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    userName: "Maya Sari",
    userJob: "DevOps Engineer",
  },
  {
    id: 7,
    rating: 5,
    testimonial:
      "Sistem pembelajaran yang terstruktur dan fleksibel. Bisa belajar sesuai pace sendiri tanpa tekanan.",
    userPhoto: "https://randomuser.me/api/portraits/men/23.jpg",
    userName: "Ahmad Fauzi",
    userJob: "Data Scientist",
  },
];
