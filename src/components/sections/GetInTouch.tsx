'use client';

import { useState } from "react";


export default function GetInTouch() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const firstNameInput = form.elements.namedItem('firstName') as HTMLInputElement;
    const lastNameInput = form.elements.namedItem('lastName') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;
    const companyInput = form.elements.namedItem('company') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    const details = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      message: messageInput.value,
    };

    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      setStatus("Submit");
      const result = await response.json();
      alert(result.status);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error");
      alert("Failed to send message");
    }
  };

  return (
    <section className={'contact'}>
      <div className="section-header">
        <span>GET IN TOUCH</span>
      </div>

      <h2 className={'title'}>Let&apos;s Work <span>Together</span></h2>

      <div className={'formContainer'}>
        <form onSubmit={handleSubmit}>
          <div className={'formGroup'}>
            <input type="text" id="firstName" name="firstName" placeholder=" " required />
            <label htmlFor="firstName">First name<sup>*</sup></label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="lastName" name="lastName" placeholder=" " />
            <label htmlFor="surname">Last name</label>
          </div>

          <div className={'formGroup'}>
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">Email<sup>*</sup></label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="phone" name="phone" placeholder=" " />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="company" name="company" placeholder=" " />
            <label htmlFor="company">Company</label>
          </div>

          <div className={'formGroup'}>
            <textarea id="message" name="message" placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className={`submitButton glass-button`} disabled={status === "Sending..." || status === "Sent"}>
            {status === "Submit" ? "Send Message" : status}
          </button>
        </form>
      </div>
    </section>
  );
}
