import React from "react";

const AgreementText = ({ isArabic }) => {
  if (isArabic) {
    return (
      <span>
        بالاشتراك، أوافق على تلقي رسائل البريد الإلكتروني التسويقية من إكسبلورتك
        وأقبل <span className="underline">سياسة الخصوصية</span>
      </span>
    );
  }

  return (
    <span>
      By subscribing, I agree to receive marketing emails from ExploreTECH and
      accept the{" "}
      <span className="font-normal text-white underline decoration-white decoration-1 underline-offset-2">
        Privacy Policy
      </span>
    </span>
  );
};

export default AgreementText;
