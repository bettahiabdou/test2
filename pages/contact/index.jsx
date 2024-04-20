import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("https://eojpzhjrckb5k9l.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
        .then(() => alert("Thank you. I will get back to you ASAP."))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
  };

  return (
      <div className="overflow-y-scroll sm:h-full sm:bg-primary/30" style={{maxHeight: "100vh"}}>
        <div className="container mx-auto sm:py-32 text-center xl:text-left flex items-center justify-center">
          {/* Form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* Let's Connect Header */}
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center mb-12"
            >
              Connectons<span style={{color: "#51ADE5"}}>-nous</span>
            </motion.h2>

            {/* Form */}
            <motion.form
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex-1 flex flex-col gap-6 w-full mx-auto"
                onSubmit={handleSubmit}
                autoComplete="off"
                autoCapitalize="off"
                // only needed for production (in netlify) to accept form input
                data-netlify="true"
            >
              {/* Input fields */}
              <div className="flex gap-x-6 w-full">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                    disabled={isLoading}
                    aria-disabled={isLoading}
                    required
                    aria-required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="input"
                    disabled={isLoading}
                    aria-disabled={isLoading}
                    required
                    aria-required
                />
              </div>
              <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
              />
              <textarea
                  name="message"
                  placeholder="Message..."
                  className="textarea"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
              />
              {/* Submit button */}
              <button
                  type="submit"
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  disabled={isLoading}
                  aria-disabled={isLoading}
              >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Let's talk
          </span>
                <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                    aria-hidden
                />
              </button>
            </motion.form>
            <p>&nbsp;</p>
            <p>&nbsp;</p>


          </div>
          <p>&nbsp;</p>
        </div>
        <div className="container mx-auto  text-center xl:text-left sm:flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center mb-12"
            >
              Notre<span style={{color: "#51ADE5"}}> Contact</span>
            </motion.h2>

            {/* Your contact form code goes here */}

            {/* Address */}
            <p>N 78 LOTISSEMENT ZITOUNA KM 6 VN,Meknes</p>

            {/* Phone number */}
            <p>+212 6 60 45 45 57</p>

            {/* Email */}
            <p>contact@itecweb.net</p>
            <p>      &nbsp;              </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
        {/* Google Maps Location */}

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
  );
};

export default Contact;
