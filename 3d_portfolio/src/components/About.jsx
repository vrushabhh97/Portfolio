import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import myPhoto from "../assets/vrushabh_image.jpg";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Container for image and text */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
        {/* Your photo */}
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-[300px] h-auto object-contain" // Adjust size and styling as needed
        />

        {/* Text content */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          I'm a versatile software developer with a strong foundation in both
          backend and frontend technologies, including Java, Python, C++,
          JavaScript, and frameworks like React, Node.js, and Flutter. My
          experience spans developing scalable AI-driven applications, immersive
          VR games, and high-performance deep learning models. I've contributed
          to innovative projects, such as creating a TikTok-like app for
          research purposes, designing a robust distributed message broker, and
          engineering a CNN-based traffic sign recognition system with high
          accuracy. With a passion for learning and a knack for problem-solving,
          I'm excited to build cutting-edge solutions that drive meaningful
          impact. Let's turn your vision into reality!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

//using tilt animation for tilting the card. added introduction and overview part.
// web developer,react native developer, backend developer all these titles are coming from index.js file from constants.
