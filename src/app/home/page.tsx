import AchievementsSection from '@/components/achievents';
import Contact from '@/components/contact';
import EducationTimeline from '@/components/education';
import Herosection from '@/components/herosection';
import { MacbookScroll } from '@/components/mac';
import Navbar from '@/components/navbar';
import Responsibilities from '@/components/por';
import ProjectList from '@/components/projects';
import Techstacks from '@/components/techstacks';
import React from 'react';

const page = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/thick-twirling-smoke-pattern-corner-black-background_23-2148092641.jpg?size=626&ext=jpg&ga=GA1.1.1635994716.1728833539&semt=ais_hybrid)',
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        width: '100%',
        height: '100%',
      }}
      className="relative"
    >
      <Navbar />
      {/* MacbookScroll Section */}
      <div style={{ position: 'relative' }}>
        <MacbookScroll />
        {/* Timeline placed over MacbookScroll on the left side */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
          <EducationTimeline />
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '75%', transform: 'translateY(-50%)' }}>
          <Responsibilities />
        </div>
      </div>
      <Techstacks />
      <ProjectList />
      <AchievementsSection />
      <Contact />
    </div>
  );
};

export default page;
