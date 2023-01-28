import React from "react";
import ProjectItem from "./ProjectItem";
import kanpaiListImg from "../../public/assets/projects/kanpaiList.png";
import cafeReservationAdminImg from "../../public/assets/projects/cafeReservationAdmin.png";
import cafeReservationImg from "../../public/assets/projects/cafeReservation.png";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sold Out List"
            backgroundImg={kanpaiListImg}
            projectUrl="/kanpaiList"
            mainTech={"React JS"}
          />
          <ProjectItem
            title="Cafe Reservation"
            backgroundImg={cafeReservationImg}
            projectUrl="/cafeReservation"
            mainTech={"Next JS / GraphQL"}
          />
          <ProjectItem
            title="Cafe Reservation - Admin"
            backgroundImg={cafeReservationAdminImg}
            projectUrl="/cafeReservationAdmin"
            mainTech={"Next JS / GraphQL"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
