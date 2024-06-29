// src/components/Sign-Up/profile.tsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  aoi: string[];
}

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = router.query.userId as string;
      try {
        const response = await axios.get<User>(`https://prepify-server-side.onrender.com/api/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (router.isReady && router.query.userId) {
      fetchUserData();
    }
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userData._id}</p>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Areas of Interest: {userData.aoi.join(', ')}</p>
    </div>
  );
};

export default ProfilePage;
