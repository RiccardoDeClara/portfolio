'use client';

import { useState } from "react";

import { sendContactEmail } from "@/app/actions";

interface GetInTouchProps {
  dict: {
    section_title: string;
    title: string;
    text: string;
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

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus(dict.sending);

  //   const form = e.currentTarget;
  //   const formData = new FormData(form);

  //   try {
  //     const result = await sendContactEmail(formData);

  //     if (result.success) {
  //       setStatus("Sent");
  //       alert("Message Sent");
  //       form.reset();
  //     } else {
  //       setStatus(dict.submit);
  //       alert(result.message || "Failed to send message");
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     setStatus("Error");
  //     alert("Failed to send message");
  //   } finally {
  //     // Reset status after a delay if needed, or keep it as "Sent"
  //     if (status !== "Sent") {
  //       setStatus(dict.submit);
  //     }
  //   }
  // };

  return (
    <section className={'contact'}>
      <div className="section-header">
        <span>{dict.section_title}</span>
      </div>


      <div className={'formContainer'}>
        <h2 className={'title p-4'}>{dict.title} <span>Together</span></h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className={'formGroup'}>
          <p>{dict.text}</p>
        </div>
        {/* <div className={'formGroup'}>
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
        </div> */}


        <button type="button" className={`submitButton glass-button text-center w-75`} disabled={status === dict.sending || status === "Sent"}>
          <a href={`mailto:${process.env.GMAIL_USER}?subject=Riccardo%20De%20Clara%20-%20Portfolio`} target="_blank">{status === dict.submit ? dict.send_button : status}</a>
        </button>
        {/* </form> */}
      </div>
    </section>
  );
}
