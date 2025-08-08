import NavbarDashboard from "../../components/NavbarDashboard";
import CourseCatalogSection from "../../components/pages/course-catalog/CourseCatalogSection";
import PopularRoadmaps from "../../components/pages/course-catalog/PopularRoadmaps";

export default function CourseCatalog() {
  return (
    <div>
      <NavbarDashboard />
      <div className="pt-[10rem] lg:pt-[12rem] pb-6 md:pb-10 bg-[#F8FAF9]">
        <PopularRoadmaps />
        <CourseCatalogSection />
      </div>
    </div>
  );
}
