import type React from "react";
import SyntaxHighlighter from "../components/SyntaxHighlighter";

export type CourseLesson = {
  id: string;
  title: string;
  content: React.ReactNode; // one-line paragraph content for example purposes
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
          content: (
            <article>
              <div className="content-ebook flex flex-col gap-3 md:gap-4 lg:gap-5">
                <h1 className="">
                  Membangun Website Cepat dan Mudah dengan Laravel
                </h1>
                <p>
                  Performance atau kecepatan website adalah salah satu elemen
                  penting dalam website development. Website yang lambat dapat
                  membuat pengunjung frustrasi, bahkan bisa saja meninggalkan
                  halaman sebelum mereka benar-benar menjelajahinya..
                </p>

                <SyntaxHighlighter
                  code={` public function searchCourses(string $keyword)
    {
        return $this->courseRepository->searchByKeyword($keyword);
    }

    public function getCoursesGroupedByCategory()
    {
        $courses = $this->courseRepository->getAllWithCategory();

        return $courses->groupBy(function ($course) {
            return $course->category->name ?? 'Uncategorized';
        });
    }`}
                  language="php"
                  // showLineNumbers={true}
                />

                <p>Penjelasan:</p>
                <ul>
                  <li>
                    Dengan membuat service provider custom, Anda bisa
                    menambahkan layanan spesifik untuk aplikasi Anda.
                  </li>
                  <li>
                    Lifecycle memastikan service ini hanya di-load saat
                    dibutuhkan.
                  </li>
                </ul>
                <h4>Memahami Cara Response Dibentuk</h4>
                <ol>
                  <li>
                    Penggunaan Bebas untuk Proyek Komersial&nbsp;Laravel dapat
                    digunakan untuk membangun proyek berbayar, termasuk yang
                    Anda kerjakan sebagai freelancer.
                  </li>
                  <li>
                    Hak Modifikasi&nbsp;Anda diperbolehkan memodifikasi
                    framework Laravel sesuai kebutuhan proyek Anda. Ini sangat
                    berguna jika Anda ingin menyesuaikan
                  </li>
                </ol>
                <p>
                  Performance atau kecepatan website adalah salah satu elemen
                  penting dalam web development. Website yang lambat dapat
                  membuat pengunjung frustrasi, bahkan meninggalkan halaman
                  sebelum mereka benar-benar menjelajahinya. Sebaliknya, website
                  dengan loading cepat menciptakan pengalaman pengguna yang
                  positif.
                </p>
                <img
                  src="/src/assets/images/thumbnails/course-learning-2.png"
                  alt="image"
                />
                <p>
                  Kecepatan website memengaruhi user experience secara langsung.
                  Ketika pengunjung dapat dengan cepat mengakses informasi yang
                  mereka butuhkan, mereka lebih cenderung untuk tetap berada di
                  website Anda lebih lama. Hal ini tidak hanya meningkatkan
                  tingkat kepuasan, tetapi juga dapat berkontribusi pada
                  meningkatnya conversion rate
                </p>
              </div>
            </article>
          ),
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
