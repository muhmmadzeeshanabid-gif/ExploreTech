import { useState } from "react";

const useNewsletterForm = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("newsletter_subscriber");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          firstName: parsed.firstName || "",
          lastName: parsed.lastName || "",
          email: parsed.email || "",
          agreed: true, // If they already subscribed, we can assume agreement for pre-fill
        };
      } catch (e) {
        console.error("Error parsing saved newsletter data", e);
      }
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
      agreed: false,
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event, isFormValid) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting || isSuccess) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Save data to localStorage
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subscribedAt: new Date().toISOString()
      };
      localStorage.setItem("newsletter_subscriber", JSON.stringify(userData));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          agreed: false,
        });
      }, 10000);
    }, 1500);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormFilled =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "";
  const isFormValid = isFormFilled && formData.agreed;

  return {
    formData,
    isSubmitting,
    isSuccess,
    isFormValid,
    handleSubmit,
    handleChange,
  };
};

export default useNewsletterForm;
