import React from "react";
import weatherImg from "../public/assets/projects/weather.png";
import todoImg from "../public/assets/projects/todoapp.png";
import adviceImg from "../public/assets/projects/adviceapp.png";
import personalImg from "./../public/assets/projects/personalsite.png";
import ProjectsItems from "./ProjectsItems";
function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-[#5651e5] tracking-widest">Projects</p>
        <h2 className="py-4">What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            title="WeatherCaster"
            backgroundImg={weatherImg}
            projectUrl="/weathercaster"
            language="React JS"
          />

          <ProjectsItems
            title="Todo App"
            backgroundImg={todoImg}
            projectUrl="/todoapp"
            language="React JS" 
          />

          <ProjectsItems
            title="Advice App"
            backgroundImg={adviceImg}
            projectUrl="/adviceapp"
            language="React JS"
          />

          <ProjectsItems
            title="Personal Website"
            backgroundImg={personalImg}
            projectUrl="/personal"
            language="Next JS"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
