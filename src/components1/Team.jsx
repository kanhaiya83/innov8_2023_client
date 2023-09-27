import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Kanhaiya Dhaker",
      role: "Project Head",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Vraj Bhingradiya",
      role: "Project Manager",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Chavi Jain",
      role: "Frontend Developer",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Yash Sharma",
      role: "Frontend Developer",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Sakshi Maheshwari",
      role: "UI/UX Designer",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Vaibhav Maheshwari",
      role: "Frontend Developer",
      profileImage:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXMlMjBwcm9maWxlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className=" bg-lightPurple p-12 md:px-24 rounded-3xl">
        <div className="text-4xl p-2 pb-16 text-center font-bold text-white">
          Meet Our Team
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-24 gap-16">
          {teamMembers.map((element) => {
            return (
              <div
                key={element.name}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="rounded-full overflow-hidden object-contain w-[125px] h-[125px] border-2 border-white">
                  <img className="" src={element.profileImage} />
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="text-md font-bold">{element.name}</div>
                  <div className="text-xs font-medium text-purple-900 -mt-[0.225rem]">
                    {element.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
