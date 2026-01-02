'use client';

import { useState } from "react";


interface GetInTouchProps {
  dict: {
    section_title: string;
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    send_button: string;
    sending: string;
    submit: string;
  };
}

export default function GetInTouch({ dict }: GetInTouchProps) {
  const [status, setStatus] = useState(dict.submit);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(dict.sending);

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

      setStatus(dict.submit);
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
        <span>{dict.section_title}</span>
      </div>

      <h2 className={'title'}>{dict.title} <span>Together</span></h2>

      <div className={'formContainer'}>
        <form onSubmit={handleSubmit}>
          <div className={'formGroup'}>
            <input type="text" id="firstName" name="firstName" placeholder=" " required />
            <label htmlFor="firstName">{dict.first_name}<sup>*</sup></label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="lastName" name="lastName" placeholder=" " />
            <label htmlFor="surname">{dict.last_name}</label>
          </div>

          <div className={'formGroup'}>
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">{dict.email}<sup>*</sup></label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="phone" name="phone" placeholder=" " />
            <label htmlFor="phone">{dict.phone}</label>
          </div>

          <div className={'formGroup'}>
            <input type="text" id="company" name="company" placeholder=" " />
            <label htmlFor="company">{dict.company}</label>
          </div>

          <div className={'formGroup'}>
            <textarea id="message" name="message" placeholder=" "></textarea>
            <label htmlFor="message">{dict.message}</label>
          </div>

          <button type="submit" className={`submitButton glass-button`} disabled={status === dict.sending || status === "Sent"}>
            {status === dict.submit ? dict.send_button : status}
          </button>
        </form>
      </div>
    </section>
  );
}
