import { Navigation_bar } from "@/components/header";
import { Hero } from "@/components/hero";
import { Aboutme } from "@/components/aboutme";
import { Skills } from "@/components/skills";
import { Card } from "@/components/card";
import { Experience } from "@/components/experience";
import { list } from "postcss";
import Works from "@/components/workCard";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const experiences = [
  {
    title: "Sr. Frontend Developer",
    listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",],
    startDate: "Nov 2021",
    endDate: "Present",
  },
  {
    title: "Team Lead",
    listItems: ["Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",],
    startDate: "Jul 2017",
    endDate: "Oct 2021",
  },
  {
    title: "Full Stack Developer",
    listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",],
    startDate: "Dec 2015",
    endDate: "May 2017",
  },
];

export default function Home() {
  return (
    <main className="dark">
      <div>
        <Navigation_bar />

      </div>
      <div>
        <Hero />
      </div>
      <div className="bg-slate-50">
        <Aboutme />
      </div>
      <div>
        <Skills />
      </div>
      <div className="bg-slate-50 pt-12 pb-8 px-5">
        <Experience />
        {experiences.map((experience) => (
          <Card experience={experience} />
        ))}
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}






