import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    fname: "",
    email: "",
    subject:"",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly destructure name and value from e.target
    setForm((prevForm) => ({
     ...prevForm,
      [name]: value, // Use the name attribute to dynamically update the state
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_7hs4l9q',
      'template_l6ys94p',
      {
        from_name: form.fname,
        last_name :form.lname,
        to_name: "Abishek",
        from_email: form.email,
        to_email: "abishek.cs21@bitsathy.ac.in",
        message: form.message,
      },
      'YM-p4arYtqlDD7HFz'
    )
   .then(
      () => {
        setLoading(false);
        alert("Thank you. We will get back to you as soon as possible.");

        setForm({
          fname: "",
          email: "",
          subject:"",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="max-w-screen-md mx-auto p-5">
      <div className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
          Contact
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Get In <span className="text-indigo-600">Touch</span>
        </h3>
      </div>
      <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input  name='fname'
              value={form.fname}
              onChange={handleChange} className="appearance-none block w-full bg-white-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="please enter your name" />
      
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Email Address
        </label>
        <input 
                name='email'
                value={form.email}
                onChange={handleChange} className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="please enter a valid email address" />
       
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Subject
        </label>
        <input  name='subject'
                value={form.subject}
                onChange={handleChange} className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="subject" />
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Your Message
      </label>
      <textarea rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?' className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
       
      </div>
      <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit" >
      {loading ? "Sending..." : "Send Message"}
      </button>
    </div>
      
  </div>
    
      </form>
    </div>
  );
}
