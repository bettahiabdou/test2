import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
      <div className="overflow-y-scroll sm:h-full sm:bg-primary/30" style={{maxHeight: "100vh"}}>
          <div className="container mx-auto h-full flex flex-col justify-center text-center  ">


              {/* slider */}
              <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
              >
                  <TestimonialSlider/>
              </motion.div>
              <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0 xl:w-[30vw] xl:hidden"
                   style={{visibility: "hidden"}}>
                  <motion.h2
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="h2 xl:mt-8"
                  >
                      Nos services<span style={{color: "#51ADE5"}}>.</span>
                  </motion.h2>
                  <motion.p
                      variants={fadeIn("up", 0.4)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                  >
                      Découvrez comment nos services de branding, design, développement, rédaction et SEO peuvent
                      transformer votre présence en ligne et propulser votre entreprise vers de nouveaux sommets
                  </motion.p>
              </div>

          </div>
          <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0 xl:w-[30vw] xl:hidden"
               style={{visibility: "hidden"}}>
              <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-8"
              >
                  Nos services<span style={{color: "#51ADE5"}}>.</span>
              </motion.h2>
              <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                  Découvrez comment nos services de branding, design, développement, rédaction et SEO peuvent
                  transformer votre présence en ligne et propulser votre entreprise vers de nouveaux sommets
              </motion.p>
          </div>
          <style jsx>{`
              /* Adjust font size for smaller screens */
              @media screen and (max-width: 767px) {
                  .container {
                      padding: 0 1px; /* Adjust padding as needed */
                  }

                  .py-8 {
                      padding-top: 0px; /* Adjust padding as needed */
                      padding-bottom: 0px;
                  }

              }

          `}</style>

      </div>
  );
};

export default Testimonials;
