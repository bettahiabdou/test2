import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
    return (
        <div className=" overflow-y-scroll sm:h-full bg-primary/60  sm:flex items-center" style={{maxHeight: "150vh"}}>
            <Circles/>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8 items-start">
                    {/* text */}
                    <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0 xl:w-[30vw]">
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

                    {/* slider */}
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%] sm:h-[340px]" // Adjusted height for small screens
                    >
                        <ServiceSlider/>
                    </motion.div>
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
            <p>&nbsp;</p>

            <Bulb/>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>

    );
};

export default Services;
