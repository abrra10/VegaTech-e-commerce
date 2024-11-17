import React from "react";
import { HiCheckCircle } from "react-icons/hi2";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Verification Icon */}
      <HiCheckCircle className="text-green-500 text-6xl mb-4" />

      {/* Thank You Message */}
      <h1 className="text-3xl font-bold font-Secondary text-center text-gray-800 mb-2">
        Merci pour votre confiance ! شكرا على ثقتكم
      </h1>
      <p className="text-center text-gray-600 font-Secondary text-lg max-w-lg">
        Un de nos employés examinera votre commande et vous contactera bientôt.
        سيتم مراجعة الطلب من قبل موظفينا والاتصال بكم قريبًا.
      </p>
    </div>
  );
};

export default ThankYouPage;
