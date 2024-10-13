"use client";
import React from 'react';

type Achievement = {
  title: string;
  description: string;
};

const achievements: Achievement[] = [
  {
    title: "IITI SOC GOLD MEDALIST",
    description: "Awarded for outstanding performance in the Web Development domain at IIT Indore."
  },
  {
    title: "JEE ADVANCED RANK 1886",
    description: "Secured an impressive rank in one of the toughest engineering entrance exams."
  },
  {
    title: "JEE MAINS RANK 1005",
    description: "Secured 99.92 and 99.91 percentile score among 10 lakh students."
  },
  {
    title: "NATIONAL TOP 1% IN CHEMISTRY OLYMPIAD",
    description: "Achieved top 1% rank in the National Standard Examination in Chemistry."
  },
];

const AchievementCard: React.FC<Achievement> = ({ title, description }) => {
  return (
    <div className="bg-white bg-opacity-50 shadow-lg rounded-lg p-6 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl text-red-900 font-semibold mb-2">{title}</h2>
      <p className="text-red-950">{description}</p>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-red-400 bg-opacity-20 rounded-lg p-4 shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-center">My Achievements</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
