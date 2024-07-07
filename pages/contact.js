import React, { useState } from "react";
import { Container } from "../components/container";
import Button from "../components/button";
import { useDispatch } from "../hooks/redux";
import { useCreateContact } from "../hooks/api/home";
import { onAlert } from "../redux/slices/utils";

const Contact = () => {
  const [isActive, setActive] = useState({ type: "", active: false });
  const dispatch = useDispatch()
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleReset = () => {
    window.location.reload()
  }

  const submitMessage = useCreateContact({
    onSuccess: () => {
      dispatch(
        onAlert({
          type: "success",
          title: "Berhasil",
          description: "Berhasil mengirim pesan.",
          onClose: () => handleReset()
        })
      )
    },
    onError: ({ response: { data } }) => {
      dispatch(
        onAlert({
          type: "error",
          title: "Terjadi Kesalahan",
          description: data.message,
        })
      )
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMessage.mutate({
      name,
      email,
      subject,
      message
    })
  }
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setSubject(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex">
            <Button title="SEND MESSAGE" contained onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
