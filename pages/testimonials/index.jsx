import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
      <div className="sm:h-full sm:bg-primary/30 sm:py-32 text-center ">
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
