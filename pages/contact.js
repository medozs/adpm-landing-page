import React, { useState } from "react";
import { Container } from "../components/container";
import Button from "../components/button";

const Contact = () => {
  const [isActive, setActive] = useState({ type: "", active: false });
  return (
    <Container>
      <div className="flex justify-between py-52">
        <div className="w-[50%] space-y-8">
          <h2 className="text-5xl font-bold">Contact Us</h2>
          <p>
            Questions about our product or services? <br />
            We have answers. Get in touch!
          </p>
        </div>
        <div className="w-[50%] space-y-3">
          <div className="flex flex-col">
            <label
              className={`transition-all duration-500 ${isActive.type === "name" && isActive.active === true ? "text-primary" : ""}`}
            >
              Name
            </label>
            <input
              onFocus={() => setActive({ type: "name", active: true })}
              onBlur={() => setActive({ type: "name", active: false })}
              type="text"
              className={`transition-all duration-500 border-b-2 ${isActive.type === "name" && isActive.active === true ? "border-primary" : "border-secondary"} outline-none px-2 py-1`}
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`transition-all duration-500 ${isActive.type === "email" && isActive.active === true ? "text-primary" : ""}`}
            >
              E-Mail
            </label>
            <input
              onFocus={() => setActive({ type: "email", active: true })}
              onBlur={() => setActive({ type: "email", active: false })}
              type="text"
              className={`transition-all duration-500 border-b-2 ${isActive.type === "email" && isActive.active === true ? "border-primary" : "border-secondary"} outline-none px-2 py-1`}
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`transition-all duration-500 ${isActive.type === "subject" && isActive.active === true ? "text-primary" : ""}`}
            >
              Subject
            </label>
            <input
              onFocus={() => setActive({ type: "subject", active: true })}
              onBlur={() => setActive({ type: "subject", active: false })}
              type="text"
              className={`transition-all duration-500 border-b-2 ${isActive.type === "subject" && isActive.active === true ? "border-primary" : "border-secondary"} outline-none px-2 py-1`}
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`transition-all duration-500 ${isActive.type === "message" && isActive.active === true ? "text-primary" : ""}`}
            >
              Message
            </label>
            <textarea
              rows={5}
              onFocus={() => setActive({ type: "message", active: true })}
              onBlur={() => setActive({ type: "message", active: false })}
              type="text"
              className={`transition-all duration-500 border-b-2 ${isActive.type === "message" && isActive.active === true ? "border-primary" : "border-secondary"} outline-none px-2 py-1`}
            />
          </div>
          <div className="flex">
            <Button title="SEND MESSAGE" contained />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
