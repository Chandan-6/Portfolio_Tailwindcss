import Navbar from "../components/navbar/Navbar.jsx";
import Welcome from "../components/welcome/Welcome.jsx";
import Line from "../components/line/Line.jsx";
import qualityInfo from "../../utils/qualityInfo.js";
import Quality from "../components/cards/quality/Quality.jsx";
import Work from "../components/cards/work/Work.jsx";
import workInfo from "../../utils/workInfo.js";
import Skill from "../components/cards/skill/Skill.jsx";
import skillInfo from "../../utils/skillInfo.js";
import HireMe from "../components/sections/hireMe/HireMe.jsx";
import GetInTouch from "../components/sections/getInTouch/GetInTouch.jsx";
import Footer from "../components/footer/Footer.jsx";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader.jsx";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />

      <Welcome />

      <Line />

      {/* Quality Section */}
      <div className="quality mb-16 mt-16" id="Quality">
        <p  data-aos="zoom-in-up" data-aos-delay="200" className="font-semibold text-center text-white text-6xl tracking-wide mb-16 tablet:text-5xl mobile-1:text-3xl drop-shadow-lg mobile-2:mx-2">
          <span className="qualityText_span animate___animated animate-bounce animate-infinite">
            Quality{" "}
          </span>{" "}
          apps are essential for success.
        </p>

        <div className="quality_boxes flex justify-center items-center flex-wrap gap-14">
          {qualityInfo.map((item, index) => (
            <Quality
              key={index}
              imgLink={item.imgLink}
              title={item.title}
              txt={item.txt}
            />
          ))}
        </div>
      </div>
      {/* End of Quality section  */}

      <Line />

      {/* Work Section */}

      <div className="work_main_container mx-16 my-16" id="Works">
        <p  data-aos="zoom-in-up" data-aos-delay="200" className="font-semibold text-center text-white text-6xl tracking-wide my-16 tablet:text-5xl mobile-1:text-3xl drop-shadow-lg">
          My Creative Work Section
        </p>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          {workInfo.map((item, index) => (
            <Work
              key={index}
              imgLink={item.imgLink}
              projectName={item.projectName}
              description={item.description}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
      {/* End of Work section  */}

      <Line />

      {/* Skill Section */}

      <div className="skill_main_container mx-16 my-16" id="Skills">
        <p  data-aos="zoom-in-up" data-aos-delay="200" className="font-semibold text-center text-white text-6xl tracking-wide my-14 tablet:text-5xl mobile-1:text-3xl drop-shadow-lg">
          Skills
        </p>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          {skillInfo.map((item) => (
          <Skill
              key={item.id}
              imgLink={item.imgLink}
              name={item.name}
              skill={item.skill}
            />
          ))}
        </div>
      </div>

      {/* End of Skill section  */}

      <HireMe />

      <Line />

      <GetInTouch />

      <Footer />

      {
        loading && <Loader/>
      }
      
    </div>
  );
}
