function CourseDetails() {
  return (
    <div className="flex h-screen">
      <aside className="flex flex-col border border-obito-grey bg-white">
        <div className="w-[260px] pb-[20px] h-[280px] px-5 pt-5 flex flex-col gap-5">
          <ul>
            <li>
              <a href="#">
                <div className="flex items-center gap-2 py-[10px] px-[14px] rounded-full border border-obito-grey bg-white hover:border-obito-green transition-all duration-300">
                  <img
                    src="/src/assets/images/icons/home-trend-up.svg"
                    alt="icon"
                    className="size-[20px] shrink-0"
                  />
                  <p>Back to Dashboard</p>
                </div>
              </a>
            </li>
          </ul>
          <header className="flex flex-col gap-[12px]">
            <div className="flex justify-center items-center overflow-hidden w-full h-[100px] rounded-[14px]">
              <img
                src="/src/assets/images/thumbnails/thumbnail-5.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-bold">
              Data Science Pipelines Marketing Decisions
            </h1>
          </header>
          <hr className="border-obito-grey" />
        </div>
        <div
          id="lessons-container"
          className="h-full overflow-y-auto [&::-webkit-scrollbar]:hidden w-[260px]"
        >
          <nav className="px-5 pb-[33px] flex flex-col gap-5">
            <div className="lesson accordion flex flex-col gap-4">
              <button
                type="button"
                data-expand="warming-up"
                className="flex items-center justify-between"
              >
                <h2 className="font-semibold">Warming Up</h2>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-all duration-300"
                />
              </button>
              <div id="warming-up" className="hidden">
                <ul className="flex flex-col gap-4">
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Demo Project
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group active">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Software Installation
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Things to Do Now
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Create First Project
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-obito-grey" />
            <div className="lesson accordion flex flex-col gap-4">
              <button
                type="button"
                data-expand="deep-dive-work"
                className="flex items-center justify-between"
              >
                <h2 className="font-semibold">Deep Dive Work</h2>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-all duration-300"
                />
              </button>
              <div id="deep-dive-work" className="hidden">
                <ul className="flex flex-col gap-4">
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Demo Project
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Software Installation
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Things to Do Now
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Create First Project
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-obito-grey" />
            <div className="lesson accordion flex flex-col gap-4">
              <button
                type="button"
                data-expand="usability-testings"
                className="flex items-center justify-between"
              >
                <h2 className="font-semibold">Usability Testings</h2>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-all duration-300"
                />
              </button>
              <div id="usability-testings" className="hidden">
                <ul className="flex flex-col gap-4">
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Demo Project
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Software Installation
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Things to Do Now
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Create First Project
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-obito-grey" />
            <div className="lesson accordion flex flex-col gap-4">
              <button
                type="button"
                data-expand="gathering-pipelines"
                className="flex items-center justify-between"
              >
                <h2 className="font-semibold">Gathering Pipelines</h2>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-all duration-300"
                />
              </button>
              <div id="gathering-pipelines" className="hidden">
                <ul className="flex flex-col gap-4">
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Demo Project
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Software Installation
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Things to Do Now
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Create First Project
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-obito-grey" />
            <div className="lesson accordion flex flex-col gap-4">
              <button
                type="button"
                data-expand="customization"
                className="flex items-center justify-between"
              >
                <h2 className="font-semibold">Customization</h2>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-all duration-300"
                />
              </button>
              <div id="customization" className="hidden">
                <ul className="flex flex-col gap-4">
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Demo Project
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Software Installation
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Things to Do Now
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="group">
                    <a href="">
                      <div className="px-4 group-[&.active]:bg-obito-black group-[&.active]:border-transparent group-[&.active]:text-white py-[10px] rounded-full border border-obito-grey group-hover:bg-obito-black transition-all duration-300">
                        <h3 className="font-semibold text-sm leading-[21px] group-hover:text-white transition-all duration-300">
                          Create First Project
                        </h3>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </aside>
      <div className="flex-grow overflow-y-auto">
        <main className="pt-[30px] pb-[118px] pl-[50px]">
          <article>
            <div className="content-ebook">
              <h1 className="mb-5">
                Membangun Website Cepat dan Mudah dengan Laravel
              </h1>
              <p>
                Performance atau kecepatan website adalah salah satu elemen
                penting dalam website development. Website yang lambat dapat
                membuat pengunjung frustrasi, bahkan bisa saja meninggalkan
                halaman sebelum mereka benar-benar menjelajahinya..
              </p>
              <pre>
                {"   "}
                {"\n"}
                {"                            "}public function
                searchCourses(string $keyword){"\n"}
                {"    "}
                {"{"}
                {"\n"}
                {"        "}return
                $this-&gt;courseRepository-&gt;searchByKeyword($keyword);{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"\n"}
                {"    "}public function getCoursesGroupedByCategory(){"\n"}
                {"    "}
                {"{"}
                {"\n"}
                {"        "}$courses =
                $this-&gt;courseRepository-&gt;getAllWithCategory();{"\n"}
                {"\n"}
                {"        "}return $courses-&gt;groupBy(function ($course) {"{"}
                {"\n"}
                {"            "}return $course-&gt;category-&gt;name ??
                'Uncategorized';{"\n"}
                {"        "}
                {"}"});{"\n"}
                {"    "}
                {"}"}
                {"\n"}
                {"                        "}
              </pre>
              <p>Penjelasan:</p>
              <ul>
                <li>
                  Dengan membuat service provider custom, Anda bisa menambahkan
                  layanan spesifik untuk aplikasi Anda.
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
                  digunakan untuk membangun proyek berbayar, termasuk yang Anda
                  kerjakan sebagai freelancer.
                </li>
                <li>
                  Hak Modifikasi&nbsp;Anda diperbolehkan memodifikasi framework
                  Laravel sesuai kebutuhan proyek Anda. Ini sangat berguna jika
                  Anda ingin menyesuaikan
                </li>
              </ol>
              <p>
                Performance atau kecepatan website adalah salah satu elemen
                penting dalam web development. Website yang lambat dapat membuat
                pengunjung frustrasi, bahkan meninggalkan halaman sebelum mereka
                benar-benar menjelajahinya. Sebaliknya, website dengan loading
                cepat menciptakan pengalaman pengguna yang positif.
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
        </main>
        <nav className="fixed bottom-0 left-auto right-0 z-30 mx-auto w-[calc(100%-260px)] pt-5 pb-[30px] bg-[#F8FAF9]">
          <div className="px-[30px]">
            <div className="content border border-obito-grey rounded-[20px] bg-white p-[12px] flex items-center justify-between">
              <p className="text-obito-text-secondary">
                Pelajari materi dengan baik, jika bingung maka tanya mentor
                kelas
              </p>
              <div className="buttons flex items-center gap-[12px]">
                <a
                  href="#"
                  className="rounded-full border border-obito-grey px-5 py-[10px] hover:border-obito-green transition-all duration-300"
                >
                  <span className="font-semibold">Ask Mentor</span>
                </a>
                <a
                  href="learning-finished.html"
                  className="rounded-full border bg-obito-green text-white px-5 py-[10px] hover:drop-shadow-effect transition-all duration-300"
                >
                  <span className="font-semibold">Next Lesson</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CourseDetails;
