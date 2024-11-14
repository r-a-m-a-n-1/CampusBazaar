import React from 'react';

const teamMembers = [
    { name: 'Ayush Kumar', role: 'Senior Developer and Quality Assurance', imgSrc: '/ayush1.jpg' },
    { name: 'Abhishek', role: 'Project Manager and Backend Developer', imgSrc: '/abhishek.jpg' },
    { name: 'Deepak Bhagat', role: 'UI/UX Designer and support Team Manager', imgSrc: '/deepak.jpg' },
    { name: 'Abhishek Kumar', role: 'Frontend Developer', imgSrc: '/Abhi.jpg' },
    { name: 'Piyush Chauhan', role: 'Security and Support Team Member', imgSrc: '/piyush.jpg' },
    { name: 'Raman Gautam', role: 'Backend Developer', imgSrc: '/raman.jpg' },
];

const TechTitaniumTeam = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
        TechTitanium Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 lg:px-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-700"
          >
            <div className="w-24 h-24 mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-md"
              />
            </div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-green-400 font-medium">{member.role}</p>
            <p className="text-center mt-2 text-sm">
              {member.role} at TechTitanium, passionate about delivering quality and excellence.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTitaniumTeam;
