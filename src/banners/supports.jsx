
import React from 'react';
import { Link } from 'react-router-dom'; 
import bgimg from "../assets/hero1.png"; 
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/upcomming-event'); 
  };

  return (
    <div
      className="support relative bg-cover bg-center h-[50rem]"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: 'fixed', 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container mx-auto text-center text-white p-6 mt-64 mb-64">
          <h2 className="text-4xl font-bold mb-16" style={{ fontFamily: 'Gowun Batang, serif' }}>
            <span className="text-yellow-500">SUPPORT</span> SADHANASHRI KUTUMB
          </h2>
          <p className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            We are a family named Sadhanashri Kutumb working for the betterment of our socity and the nation as well. We are striving for the participation of youth from all corner of country to make India a super power in terms of spiritulality and generosity.
            </p>

            <p className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
             We are fortunate enough that we have largest population of youths in our country who are driven by our cultural and intellectual proseperty for ancient period of Vedas and Upnishdas. 
          </p>

          <p className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Sadhanashri Kutumb feels proud and setisfied that it has been providing the platform to the youths for age old tradition of discussion and constrictive exchange of thoughts in order to serve the socity at large and enlightenment of youths in perticular.
          </p>
          <p className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            We cordially invite you to participate and contribute to our efforts in the process of restructring the thought process of our beloved countrymen so that we could insure that Bharat was Bharat is and Bharat will be the leader of all human beangs. 
          </p>
          <button onClick={handleClick} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded transition hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;

