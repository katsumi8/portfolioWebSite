import React from "react";
import ProjectItem from "./ProjectItem";
import kanpaiListImg from "../../public/assets/projects/kanpaiList.png";
import cafeReservationAdminImg from "../../public/assets/projects/cafeReservationAdmin.png";
import cafeReservationImg from "../../public/assets/projects/cafeReservation.png";
import comingSoonImg from "../../public/assets/projects/comingSoon.jpg";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
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
          <ProjectItem
            title="Inventory Management - Admin"
            backgroundImg={comingSoonImg}
            projectUrl="/inventory-management"
            mainTech={"Next JS"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
