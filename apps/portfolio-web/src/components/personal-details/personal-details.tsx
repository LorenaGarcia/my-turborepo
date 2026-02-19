"use client";
import React from "react";
import image from "../../images/photo.jpg";

import * as motion from "motion/react-client";
import * as Styled from "./personal-details.styles";

const PersonalDetails = () => {
  return (
    <Styled.Container>
      <Styled.DivContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <Styled.Image src={(image as any).src || image} />
        </motion.div>
      </Styled.DivContainer>
      <Styled.DivContainer>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Styled.Name>Lorena Garcia Reyes</Styled.Name>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Styled.Profession>Front-end developer</Styled.Profession>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Styled.Contact href="mailto:lorenagarciar34@gmail.com">
            <span className="material-icons">email</span>
            lorenagarciar34@gmail.com
          </Styled.Contact>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Styled.Contact
            href="https://www.linkedin.com/in/lorena-garcia-reyes-ab2b43b9/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            linkedin.com/in/lorenagarcia
          </Styled.Contact>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Styled.Contact
            href="https://github.com/LorenaGarcia"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-icons">language</span>
            github.com/LorenaGarcia
          </Styled.Contact>
        </motion.div>
      </Styled.DivContainer>
    </Styled.Container>
  );
};

export default PersonalDetails;
