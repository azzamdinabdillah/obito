export type CourseLesson = {
  id: string;
  title: string;
  content: string; // one-line paragraph content for example purposes
};

export type CourseSection = {
  id: string;
  title: string;
  lessons: CourseLesson[];
};

export type CourseDetailsData = {
  title: string;
  thumbnailSrc: string;
  sections: CourseSection[];
};

export const courseDetailsData: CourseDetailsData = {
  title: "Data Science Pipelines Marketing Decisions",
  thumbnailSrc: "/src/assets/images/thumbnails/thumbnail-5.png",
  sections: [
    {
      id: "warming-up",
      title: "Warming Up",
      lessons: [
        {
          id: "demo-project",
          title: "Demo Project",
          content:
            "Pengantar singkat tentang gambaran besar course dan cara menggunakannya.",
        },
        {
          id: "software-installation",
          title: "Software Installation",
          content:
            "Langkah cepat memasang tools yang dibutuhkan agar siap belajar.",
        },
        {
          id: "things-to-do-now",
          title: "Things to Do Now",
          content:
            "Checklist singkat hal yang perlu dilakukan sebelum mulai praktek.",
        },
        {
          id: "create-first-project",
          title: "Create First Project",
          content:
            "Contoh proyek awal sebagai latihan dasar untuk pemahaman materi.",
        },
      ],
    },
    {
      id: "deep-dive-work",
      title: "Deep Dive Work",
      lessons: [
        {
          id: "data-ingestion",
          title: "Data Ingestion",
          content: "Memahami pipeline pemasukan data dari berbagai sumber.",
        },
        {
          id: "data-cleaning",
          title: "Data Cleaning",
          content:
            "Teknik pembersihan data untuk meningkatkan kualitas analisis.",
        },
        {
          id: "feature-engineering",
          title: "Feature Engineering",
          content:
            "Membuat fitur yang relevan untuk meningkatkan performa model.",
        },
      ],
    },
    {
      id: "usability-testings",
      title: "Usability Testings",
      lessons: [
        {
          id: "planning",
          title: "Planning",
          content: "Menetapkan tujuan dan skenario pengujian yang terukur.",
        },
        {
          id: "run-session",
          title: "Run Session",
          content:
            "Menjalankan sesi uji dengan peserta dan instruksi yang jelas.",
        },
        {
          id: "analyze-feedback",
          title: "Analyze Feedback",
          content:
            "Mengolah umpan balik menjadi insight yang bisa ditindaklanjuti.",
        },
      ],
    },
    {
      id: "gathering-pipelines",
      title: "Gathering Pipelines",
      lessons: [
        {
          id: "design-pipeline",
          title: "Design Pipeline",
          content: "Merancang alur pengumpulan data yang efisien dan reliabel.",
        },
        {
          id: "implement-pipeline",
          title: "Implement Pipeline",
          content: "Menerapkan pipeline dengan praktik terbaik dan monitoring.",
        },
        {
          id: "optimize-pipeline",
          title: "Optimize Pipeline",
          content: "Mengoptimalkan kinerja pipeline untuk skalabilitas.",
        },
      ],
    },
    {
      id: "customization",
      title: "Customization",
      lessons: [
        {
          id: "themeing",
          title: "Themeing",
          content: "Menyesuaikan tampilan agar selaras dengan identitas brand.",
        },
        {
          id: "configurations",
          title: "Configurations",
          content: "Mengatur parameter sistem sesuai kebutuhan proses.",
        },
        {
          id: "extensions",
          title: "Extensions",
          content: "Menambah fungsi melalui modul ekstensi yang fleksibel.",
        },
      ],
    },
  ],
};
