import NavbarDashboard from "../components/NavbarDashboard";

export default function CourseCatalog() {
  return (
    <div>
      <NavbarDashboard />
      <div className="pt-[10rem] lg:pt-[12rem]">
      <section
        id="catalog"
        className="container-max-w-1280 container-padding-x flex flex-col w-full gap-4"
      >
        <h1 className="font-bold leading-normal text-lg md:text-xl lg:text-[22px]">
          Course Catalog
        </h1>
      </section>
      </div>
    </div>
  );
}
