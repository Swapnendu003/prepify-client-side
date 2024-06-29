"use client";

import React, { useEffect, useState } from 'react';
import Card from '@/components/Services/MeteorsDemo';
import { fetchUserData } from '@/utils/fetchUserData';

const ModulesPage: React.FC = () => {
  const [headings, setHeadings] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          const data = await fetchUserData(token);
          setHeadings(data.aoi || []);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
      {headings.map((heading, index) => (
        <Card key={index} heading={heading} />
      ))}
    </div>
  );
};

export default ModulesPage;
