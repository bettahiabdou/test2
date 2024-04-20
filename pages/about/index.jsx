import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaWordpress],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
      <div className="overflow-y-scroll sm:h-full sm:bg-primary/30" style={{maxHeight: "100vh"}}>
        <Circles />

        {/* avatar img */}
        <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2"
            >
              Captivating <span style={{ color: "#51ADE5" }}>stories</span> birth magnificent designs.
            </motion.h2>
            <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              10 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
            </motion.p>

            {/* counters */}
            <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              {/* Counters content */}
            </motion.div>
          </div>

          {/* info */}
          <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%]"
          >
            {/* Info content */}
          </motion.div>
        </div>
      </div>
  );
};

export default About;
