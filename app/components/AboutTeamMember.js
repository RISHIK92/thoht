// components/TeamMemberCard.js
import React from "react";

const TeamMemberCard = ({ teamMembers }) => {
  return (
    <div className="w-full bg-white y-32 my-16 relative">
      <img
        src="https://res.cloudinary.com/df622sxkk/image/upload/v1747686479/image_7_k4lygz.png"
        alt="Decorative T shape"
        className="absolute -top-16 left-12 w-[34rem] h-[34rem]"
      />

      <img
        src="https://res.cloudinary.com/df622sxkk/image/upload/v1747686472/image_13_1_qdqsrf.png"
        alt="Decorative T shape"
        className="absolute -bottom-48 right-14 w-[34rem] h-96 z-10"
      />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image - updated with more refined styling */}
              <div className="w-92 h-92 mb-8 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-300"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold tracking-wide mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {member.credentials}
                </p>
              </div>

              {/* Quote - improved styling */}
              <div className="text-center max-w-md px-4">
                <blockquote className="italic text-gray-800 text-lg leading-relaxed">
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
