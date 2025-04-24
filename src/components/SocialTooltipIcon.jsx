// components/SocialTooltipIcon.jsx
import React from "react";

const SocialTooltipIcon = ({
  platform = "Facebook",
  name = "User",
  username = "@username",
  about = "500+ Friends",
  url = "#",
  icon: IconSVG,
  gradientClass = "",
  color = "#1877f2",
}) => {
  return (
    <div className="tooltip-container group relative cursor-pointer transition-all text-[17px] rounded-[10px]">
      {/* Tooltip */}
      <div className="tooltip absolute top-0 left-1/2 -translate-x-1/2 p-2 opacity-0 pointer-events-none transition-all duration-300 rounded-[15px] shadow-[inset_5px_5px_5px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)] group-hover:top-[-150px] group-hover:opacity-100 group-hover:pointer-events-auto z-10">
        <div className="profile bg-[#3b5998] border-[1px] border-[#29487d] rounded-[10px_15px] p-2 text-white">
          <div className="user flex gap-2">
            <div className="img w-[50px] h-[50px] text-[25px] font-bold border border-[#1877f2] rounded-[10px] flex items-center justify-center bg-white text-[#1877f2]">
              {platform.slice(0, 2)}
            </div>
            <div className="details flex flex-col text-white">
              <div className="name font-bold text-[#1877f2]">{name}</div>
              <div className="username">{username}</div>
            </div>
          </div>
          <div className="about text-[#ccc] pt-1">{about}</div>
        </div>
      </div>

      {/* Icon */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="icon block relative text-white"
      >
        <div
          className="layer w-[55px] h-[55px] border-[3px] rounded-full relative transition-all duration-300"
          style={{
            borderColor: color,
            boxShadow: `0 0 15px ${color}b3, 0 0 20px ${color}80`,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="absolute top-0 left-0 h-full w-full border border-white rounded-full transition-all duration-300"
              style={{ opacity: (i + 1) * 0.2 }}
            />
          ))}
          <span
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{ background: gradientClass }}
          >
            {IconSVG}
          </span>
        </div>
        <div
          className="text absolute left-1/2 bottom-[-5px] opacity-0 font-medium transform -translate-x-1/2 transition-all duration-300 group-hover:bottom-[-35px] group-hover:opacity-100"
          style={{ color }}
        >
          {platform}
        </div>
      </a>
    </div>
  );
};

export default SocialTooltipIcon;
