

import React, { useEffect, useState } from 'react';
import HeroBanner from '../banners/herobanner';
import EventsBanner from '../banners/eventsBanner';
import SupportBanner from '../banners/supports';
import Modal from '../banners/model'; 
import MemberComponent from '../components/membercomponent';
import bg from "../assets/bg6.jpeg"; 

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Automatically open the modal when the component mounts
    setIsModalOpen(true);
  }, []);

  return (
    // <div className='mt-[-110px]'>
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <HeroBanner />
      <EventsBanner  />
      <SupportBanner />
      <MemberComponent/>
    </div>
  );
}

export default Home;
