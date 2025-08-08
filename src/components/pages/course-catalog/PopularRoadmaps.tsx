import { roadmapData } from "../../../data/roadmap";
import CardRoadmap from "../../CardRoadmap";

function PopularRoadmaps() {
  return (
    <section className="container-max-w-1280 container-padding-x flex flex-col w-full gap-3 lg:gap-4">
      <h1 className="title-22">Popular Roadmap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-5">
        {roadmapData.map((roadmap) => (
          <CardRoadmap key={roadmap.title} {...roadmap} />
        ))}
      </div>
    </section>
  );
}

export default PopularRoadmaps;
