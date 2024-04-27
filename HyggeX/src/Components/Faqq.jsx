// import React from 'react'
// import { useState } from 'react';

// export const Faqq = ( {title, content}) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleAccordion = () => {
//       setIsOpen(!isOpen);
//     };

//   return (
//     <>
//     <div className='border mt-20'>
//         <p className='font-bold text-[48px] text-[#06286E]'>FAQ</p>
//     </div>

//     <li className="bg-white my-2 shadow-lg">
//       <h2 onClick={toggleAccordion} className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
//         <span>{title}</span>
//         <svg
//           className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
//           viewBox="0 0 20 20"
//         >
//           <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//         </svg>
//       </h2>
//       <div className={`border-l-2 border-purple-600 overflow-hidden duration-500 transition-all ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
//         <p className="p-3 text-gray-900">{content}</p>
//       </div>
//     </li>
//     </>
//   )
// }

// function inputTaken() {
//     return (
//       <div className="h-screen">
//         <main className="p-5 bg-light-blue">
//           <div className="flex justify-center items-start my-2">
//             <div className="w-full sm:w-10/12 md:w-1/2 my-1">
//               <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ - Order, Shipping, Etc.</h2>
//               <ul className="flex flex-col">
//                 <Faqq title="When will my order arrive?" content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation" />
//                 <Faqq title="How do I track my order?" content="Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order." />
//                 <Faqq title="What’s your return policy?" content="We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label." />
//               </ul>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   export default inputTaken;

import { useState } from "react"; // Assuming you're using React

export function Faqq({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className="bg-white my-4 shadow-lg border rounded-md w-[848px]">
        <h2
          onClick={toggleAccordion}
          className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        >
          <span className="text-[16px]">{title}</span>
          <svg
            className={`fill-current h-6 w-6 transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
          </svg>
        </h2>
        <div
          className={`border-l-2 overflow-hidden duration-500 transition-all ${
            isOpen ? "max-h-full" : "max-h-0"
          }`}
        >
          <p className="p-3 text-gray-900 text-[16px] font-medium">{content}</p>
        </div>
      </li>
    </>
  );
}

function InputTaken() {
  return (
    <>
      <div className="mt-16">
        <p className="font-bold text-[48px] text-[#06286E]">FAQ</p>
      </div>
      <div className=" h-[500px]">
        <main className="">
          <div className="flex  items-start my-2">
            <div className="w-full sm:w-10/12 md:w-1/2 my-1">
              <ul className="flex flex-col">
                <Faqq
                  title="Can education flashcards be used for all age groups?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation. Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order."
                />
                <Faqq
                  title="How do education flashcards work?"
                  content="Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order. Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Faqq
                  title="Can education flashcards be used for test preparation?"
                  content="We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label. Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default InputTaken;
