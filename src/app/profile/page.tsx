'use client';
// Vendor
import { FC, useEffect, useState } from 'react';
// Components
import UserProfile from '../components/UserProfile';
// Api
import { getUserData } from './api/userData';

type UserType = {
  name: string;
  email: string;
  profilePicture: string;
};

const ProfilePage: FC = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      {user ? (
        <UserProfile
          name={user.name}
          email={user.email}
          profilePicture={user.profilePicture}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProfilePage;
