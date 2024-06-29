import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@/components/Common/Modal'; 

interface CardProps {
  heading: string;
}

const Card: React.FC<CardProps> = ({ heading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const handleClick = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No JWT found');
      return;
    }

    try {
      const response = await axios.post(
        'https://prepify-server-side.onrender.com/api/generate/generateContent',
        { interest: heading },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API Response:', response.data.content.kwargs.content); // Debugging line
      setModalContent(response.data.content.kwargs.content || 'Success!');
      setModalOpen(true);
    } catch (error) {
      console.error('Failed to send interest', error);
      setModalContent('Failed to send interest');
      setModalOpen(true);
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="card bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-black opacity-25 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white text-center mb-6">{heading}</h1>
        </div>
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={handleClick}
            className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {modalOpen && <Modal content={modalContent} onClose={closeModal} />}
    </>
  );
};

export default Card;
