import { useState } from "react";

const useNewsletterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event, isFormValid) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting || isSuccess) return;

    setIsSubmitting(true);
    setTimeout(() => {
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
