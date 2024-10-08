


import React, { useState } from 'react';
import backgroundImage from "../assets/hero9.jpeg"; // Path to your background image
import member1 from '../assets/member.png';
import member2 from '../assets/member5.png';
import member3 from '../assets/member6.png';
import member4 from '../assets/member7.png'; 

const members = [
  {
    id: 1,
    name: 'शिवम भूषण',
    position: 'प्रमुख',
    image: member4,
    message: 'आइए बनाएं चिंतन धारा को ऊर्ध्वगामी! मानवीय चिंतन का सहज स्वभाव गुरुत्वाकर्षण के नियम के अनुसार ही अधोगामी होता है। प्रायः बाहरी आकर्षण ही मानव मन को भाते हैं। इस चिंतन धारा को ऊर्ध्वगामी बनाने के लिए जिन तत्वों की आवश्यकता होती है, उनमें धर्म उद्धारक और संस्कृति रक्षक सर्वोपरि महत्व के हैं। मानवीय मूल्यों से पूर्ण व्यक्तित्व के निर्माण में सच्चे धर्म उपदेशकों की भूमिका अत्यंत महत्वपूर्ण होती है। हमने पाया है कि हमारे समाज में ऐसे लोक सेवकों की कमी होती चली जा रही है। इसकी न्यूनता के दुष्परिणाम भारतवर्ष के कोने-कोने में प्रायः देखने को मिल रहे हैं। अतः हम सभी का साझा कर्तव्य है कि सच्चे अर्थों में धर्माचार्य, महापुरुषों एवं लोक सेवकों का निर्माण करें। इसी भागीरथ लक्ष्य की पूर्ति के लिए साधनश्री कुटुंब कटिबद्ध है |',
  },
  {
    id: 2,
    name: 'अरविंद कुमार पांडेय',
    position: 'संयोजक',
    image: member3,
    message: 'आइये! शंखनाद करें, भारत के अभ्युदय का, आश्वस्त करें मानवता को ! उद्घोष करें धर्म विजय का, सत्य करें युवा संन्यासी स्वामी विवेकानंद की वाणी को, जागृत करें शिवाजी के पुरुषार्थ को, प्रसारित करें बुद्ध के प्रेम और शंकर के ज्ञान को.. संकल्प लें समुद्र मंथन का जिससे उपजेगा अमृत रूपी नया विचार, जो केवल रूप में ही नहीं बल्कि अपनी पूरी संरचना और दिशा में भी नया होगा.. यही विचार आंदोलित कर देगा हमारे मन को, मस्तिष्क में कौन्धेगी एक बिजली और हो जाएगा आरंभ पुनर्जागरण का.. इसे ही आने वाली पीढ़ी वैचारिक क्रांति के नाम से जानेगी और हम अपने वर्तमान को प्रलय की संज्ञा से पुकारेंगे क्योंकि सब कुछ तो बदल जाएगा... सृजन के बीज से फूटेगा नवअंकुर जीवन संबंध और अस्तित्व के नए मॉडल का.. परंपरागत विचारों व क्षेत्र के पार एक नया जीवन अंगड़ाई लेगा. इसका सूत्रधार बनेगा भारत का यौवन, जो नेतृत्व करेगा विश्व के नए सांस्कृतिक जागरण का और भारत के इन युवा नायकों का पथ प्रदर्शक बनकर मूर्त रूप लेगी भारतीय ऋषियों की शाश्वत वाणी.. यह वाणी करने योग्य तो प्रमाणित हो चुकी है जिसे हमें मर्यादा पुरुषोत्तम राम के आदर्शों पर चलते हुए कृतित्व में बदलना है.. जिससे फिर कोई तुलसी दोहरा सके कि "माथे पर श्रम बिंदु सोहाये" इसके लिए स्वयं को पहचानते हुए यह व्रत लें और स्वीकार करें कि हम ही है मानवता के समक्ष खड़ी सभी समस्याओं का समाधान और हम समर्थ हैं उन सभी सवालों का जवाब देने में जो हमसे पूछे जाएंगे भले ही प्रश्न कर्ता स्वयं समय ही क्यों ना हो...',
  },
  {
    id: 3,
    name: 'आचार्य रामबाबू पांडेय',
    position: 'प्रमुख मार्गदर्शक',
    image: member2,
    message: 'मनुष्य जीवन का एकमात्र लक्ष्य भगवत प्राप्ति है। यह भगवत प्राप्ति, सनातन वैदिक आर्य हिंदू धर्म के मूल्यों पर चलकर ही हो सकती है। अतः अपने जीवन को सफलता से सार्थकता की ओर ले जाने के लिए आवश्यक है वेदप्रदत्त सन्मार्ग और यह सन्मार्ग वैदिक आचार संपन्न महापुरुषों के द्वारा ही संभव है | अतः वैदिक जीवन संपन्न आचार्य एवं महात्माओं के निर्माण के लिए आवश्यक है परंपरागत वैदिक शिक्षा और तअनुरूप आचरण। समाज और राष्ट्र की दिशा और दशा को सन्मार्ग की ओर ले जाने वाले सदाचार संपन्न जनों के निर्माण का पावन विद्या का मंदिर "वैदिक गुरुकुलों" के पुनः स्थापना एवं धर्म एवं ब्रह्म की प्रत्यक्ष विग्रह गौ माता की रक्षा एवं संवर्धनार्थ गौशालाओं का संचालन हमारा पवित्र उद्देश्य है। परात्पर ब्रह्म वेदांतवेद्य श्री कृष्ण हम सभी को अपनी भक्ति युक्त, धर्म बल संपन्न शक्ति दें जिससे हम अपने लक्ष्य को साकार कर विश्व बंद्या भारत जननी को पुनः उसका गौरव दिला सकें।',
  },
  {
    id: 4,
    name: 'पूज्यश्री प्रेमभूषण जी महाराज',
    position: 'प्रमुख संरक्षक',
    image: member1,
    message: 'भाव-धरा भारत के तीर्थराज प्रयाग में महर्षि भरद्वाज की कर्मभूमि पर, दिनांक, 21 जनवरी 1969, दिन मंगलवार को महाराज श्री का जन्म माता दुर्गावती और पिता श्री वशिष्ठ नारायण जी  के आंगन में हुआ। पिता श्री के संतत्व और माता जी की भक्ति का गहरा प्रभाव महाराज जी के  जीवन पर हुआ। अपने ननिहाल से इंटर तक की पढ़ाई पूरी करने के बाद पूज्य श्री ने स्नातक  की शिक्षा कानपुर से पूरी की तत्पश्चात् वर्ष 1991 में महाराज जी अध्यापन कार्य के लिए अवध  पधारे | परंतु नियति ने अपना निराला खेल दिखाते हुए पूज्य श्री का चुनाव भारत में प्रेम सरिता  को पुनर्जीवित करने के लिए पहले ही कर लिया था। पिछले चार दशकों से अनवरत महाराज  श्री संवेदना, साधना और सेवा की त्रिवेणी को आवेगमय बनाने का भागीरथ संकल्प पूरा कर  रहे हैं। भारत सहित दुनिया के अनेक देशों के करोड़ों लोगों के जीवन में पूज्य श्री की राम कथा,  मर्यादा पुरुषोत्तम भगवान राम के चरित्र को प्रतिष्ठित करने में सफल हो रही है। महाराज श्री  भारत की वर्तमान पीढ़ी के लिए आधुनिक चैतन्य महाप्रभु की गुरुत्तर भूमिका का कुशल  निर्वहन कर रहे हैं. महाराज श्री की व्यास पीठ से बहती रामकथा सरिता के कुछ महत्वपूर्ण  समाजोपयोगी अंशों को संकलित कर ग्रंथ रूप में प्रकाशित किया गया है। इनमें से कुछ प्रमुख  ग्रंथ हैं, प्रेमामृत, राम काज लगी तव अवतारा, कैसे जियें हम यह जीवन आदि। ये ग्रंथ लाखों  भगवत भाव संपन्न परिवारों का मार्गदर्शन कर रहे है।',
  },
  
  
  
];

const Member = () => {
  const [expandedMessages, setExpandedMessages] = useState({});

  const toggleMessage = (id) => {
    setExpandedMessages((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getFirst20Words = (message) => {
    const words = message.split(' ');
    return words.length > 20
      ? words.slice(0, 20).join(' ') + '...'
      : message;
  };

  return (
    <div className="relative">
      <div
        className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h1 className="text-yellow-300 text-6xl font-thin relative" style={{ fontFamily: 'Gowun Batang, serif' }}>Organization</h1>
      </div>

      <div className="bg-yellow-100 p-8 mx-auto py-10">
        {/* Inner container for card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"> */}
          {members.map((member) => {
            const isExpanded = expandedMessages[member.id];
            const messageToDisplay = isExpanded
              ? member.message
              : getFirst20Words(member.message);

            return (
              <div
                key={member.id}
                className={`bg-neutral-900 shadow-lg rounded-lg p-4 text-center transition-all duration-300 ${
                  isExpanded ? 'h-auto' : 'h-80'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl text-yellow-400 font-semibold">{member.name}</h3>
                <p className="text-white text-orange-50">{member.position}</p>
                <p className="mt-2 text-orange-50 transition-all duration-300">
                  {messageToDisplay}
                </p>
                <button
                  onClick={() => toggleMessage(member.id)}
                  className="mt-2 text-orange-500 hover:underline"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Member;
