import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { AuthContext } from '../contexts/AuthContext';
import { logoutCall } from '../pages/apiCalls';
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Swarnavo Pramanik </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> swarnavo.pramanik@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <a href={item.url}>
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex justify-center">
          <button
            type="button"
            className="text-2rem p-3 w-4rem text-xl text-white bg-cyan-400 rounded-lg  hover:drop-shadow-xl hover:bg-cyan-500 ring-offset-2 ring-2"
            onClick={() => {
              logoutCall(dispatch);
            }}
          >
            Logout
          </button>
        </div>

      </div>
    </div>

  );
};

export default UserProfile;
