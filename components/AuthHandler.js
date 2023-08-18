"use client";
import React, { useNavigate } from "react";
import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";

const ProfileButton = ({ label, handler }) => {
  return (
    <div
      className="cursor-pointer w-[200px] h-[50px] bg-[#b40404] rounded-xl flex items-center justify-center text-white text-lg font-bold"
      onClick={handler}
    >
      {label}
    </div>
  );
};

const AuthHandler = () => {
  //   const navigate = useNavigate();
  const { googleSignIn, currentUser, logOut } = useAuth();
  const handleGoogleSignin = async () => {
    await googleSignIn();
  };
  const handleLogout = async () => {
    await logOut();
    window.location.reload();
  };
  console.log(currentUser);
  return currentUser ? (
    <div className="flex gap-6 items-center">
      <Image
        src={currentUser.photoURL}
        alt="profile-pic"
        width={60}
        height={50}
        className="rounded-full"
      />
      <ProfileButton label="Signout" handler={handleLogout} />
    </div>
  ) : (
    <ProfileButton label="Signin" handler={handleGoogleSignin} />
  );
};

export default AuthHandler;
