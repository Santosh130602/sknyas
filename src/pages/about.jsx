import React from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image
import deisti from "../assets/dristi.png";
import FooterBackground from "../assets/bg10.png"; // Import your footer background image

const About = () => {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay for darkening effect */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl font-thin relative z-10" style={{ fontFamily: 'Gowun Batang, serif' }}>
          About
        </h1>
      </div>

      {/* Main Content Section with Background */}
      <div className="relative text-yellow-200 py-10" style={{
            backgroundImage: `url(${FooterBackground})`, // Set the image as the background
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}>
        
        {/* Overlay div to apply background color on top of the bg image */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

        {/* Content container */}
        <div className="relative z-10 shadow-lg bg-neutral-900 rounded-xl p-8 max-w-4xl mx-auto text-center" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="text-gray-200 space-y-6 text-lg" style={{ fontFamily: 'Kalam, cursive' }}>
            <h1 className='text-5xl text-yellow-300 font-thin'> परिचय </h1>
            <p className='text-xl text-orange-50'>
              साधनाश्री कुटुम्ब की स्थापना भगवद्पाद शिव अवतार आदिशंकराचार्य भगवान के पावन प्राकट्य दिवस वैशाख शुक्ल पंचमी, विक्रम संवत 2077 (28 अप्रैल 2020) के पावन पर्व पर एक पवित्र संकल्प के साथ हुआ। साधनाश्री कुटुम्ब का उद्देश्य सत्य सनातन धर्म, संस्कृति, राष्ट्र को उसका मूल सौष्ठव प्रदान करना है, जिससे कि स्वच्छ, सुंदर, स्वस्थ, समृद्ध, संस्कारी, ज्ञानशील युक्त मार्गदर्शक समाज का निर्माण हो सके। भारत और भारतीयता के पुनर्जागरण के लिए साधनाश्री कुटुम्ब संकल्पबद्ध है। साधनाश्री कुटुम्ब अपने संकल्प पूर्ति के लिए तीन प्रमुख आयाम निर्धारित किये हैं।
            </p>
            <ul className="space-y-2 text-2xl">
              <li>• गुरुकुल अभियान Gurukul Abhiyan</li>
              <li>• गोकुल अभियान Gokul Abhiyan</li>
              <li>• देवकुल अभियान Devkul Abhiyan</li>
            </ul>
          </div>

          {/* Footer Banner */}
          <div className="bg-gray-800 text-yellow-300 py-4 mt-8 rounded-md">
            <p className="italic text-lg">
              कालॆ खलु समारम्भाः फलं बध्नन्ति नितरां:
            </p>
          </div>
        </div>
      </div>

      {/* New Section for Vision */}
      <div className="relative text-center mt-8">
        <h1 className="text-6xl mt-28 mb-6 font-semibold">साधनाश्री कुटुम्ब की दृष्टि</h1>

        <div
          className="relative flex flex-col md:flex-row items-center justify-between p-10"
          style={{
            backgroundImage: `url(${deisti})`,  // Set the image as the background
            backgroundPosition: 'center',
            backgroundSize: '50%', // Default size for larger screens
            backgroundRepeat: 'no-repeat',
            opacity: 0.4,
          }}
        >
          <div className="w-full md:w-1/2 mx-auto text-black-800 z-10 bg-opacity-80 p-8 rounded-md space-y-6"
            style={{ fontFamily: 'Kalam, cursive' }}>
            <p className="text-xl text-black">
            अखंड मंडलाकार ब्रह्मांड की अवधारणा से परिपूर्ण भारत की रक्षा ही ब्रह्मांड की रक्षा है और भारत की रक्षा का अर्थ है उसकी रक्षा जो मृत्यु से अमरता की ओर प्रयाण करता है। जिसकी आराधना में है कि सब 'सुखी' हों और जिसका संकल्प है कि सभी को 'श्रेष्ठ' बनाना है। जो विश्वास करता है, यदि हम आवश्यक उत्साह के साथ कुशल संयोजन का काम पूरा कर सके तो चराचर जगत की प्रत्येक निर्मिती हमारी सहयोगी बन सकती है। 
            </p>
            <p className="text-xl">
            हमारा भारत विराट है जिसमें प्राचीन जीवन मूल्यों को युगानुकूल रूपायित करने का दैवीय सद्गुण विद्यमान है। इसी समझ के साथ 'भारत रक्षा' के लिए ध्येय निष्ठ हो, अहर्निश कर्तव्य पथ पर साधनारत संगठन का नाम है "साधनाश्री कुटुम्ब " । यह भारत का सौभाग्य है कि भारत के पास समृद्ध प्राचीन है और आशापूर्णा भविष्य भी, बस आवश्यकता है तो पुरुषार्थी वर्तमान की गति -मति को उत्कृष्ट बनाने की। आधुनिकता का प्राचीनता के साथ संबंध निरंतरता में है। 
            </p>
            <p className="text-xl">
            आधुनिक होने का अर्थ प्राचीनता का विरोधी होना अथवा प्राचीनता का उतरवर्ती होना नहीं है। यह तो प्राचीनता के श्रेष्ठ मूल्य का उत्तराधिकारी होना है और काल बाह्य मूल्यों को परिवर्तित करना अथवा सुधार करना है। साधनाश्री कुटुम्ब की दृष्टि जो गहन शोध के उपरांत विकसित हुई है उसके अनुसार, भारत के लिए जिसे हम प्रकारांतर में संपूर्ण विश्व के लिए कह सकते हैं, गुरुकुल, गोकुल और देवकुल के कुशल संरक्षण और प्रभावी संचालन से ही वैश्विक कल्याण की सार्थक परियोजना का शुभारंभ किया जा सकता है।
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 760px) { 
            .relative.flex { 
              background-size: 80% !important; 
            }
          }
          @media (max-width: 480px) { 
            .relative.flex { 
              background-size: 90% !important; 
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;













