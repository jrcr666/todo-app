'use client';
// Vendor
import { FC } from 'react';
import Image from 'next/image';

type UserProfileProps = {
  name: string;
  email: string;
  profilePicture: string;
};

const UserProfile: FC<UserProfileProps> = ({ name, email, profilePicture }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <Image
        src={profilePicture}
        alt="Profile Picture"
        width={100}
        height={100}
        quality={75}
      />
    </div>
  );
};

export default UserProfile;
