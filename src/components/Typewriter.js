import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#f15bb5',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#f15bb5"
        multiText={[
          'Full Stack Developer',
          'Front-End Developer',
          'Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />

export default TypeWriterEffect;