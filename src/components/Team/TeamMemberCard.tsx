import React from 'react';

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, bio, image }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      {/* Profile Image */}
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-green-500 shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Title */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 text-sm">{title}</p>
      </div>

      {/* Bio */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {bio}
      </p>
    </div>
  );
};

export default TeamMemberCard;
