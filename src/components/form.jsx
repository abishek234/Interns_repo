import Navbar from "./Navbar";
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    file: null,
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log("Uploaded file type:", file.type);
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation checks
    if (!validateInput()) return;

    // Prepare form data for submission
    const formDataForSubmission = new FormData();
    formDataForSubmission.append('name', formData.name);
    formDataForSubmission.append('email', formData.email);
    formDataForSubmission.append('phone', formData.phone);
    formDataForSubmission.append('domain', formData.domain);
    formDataForSubmission.append('file', formData.file);
  // Send form data to email
  try {
    const response = await axios.post('http://localhost:3000/users/send-email', formDataForSubmission, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const result = response.data; 
    console.log(result)// Directly access response.data
    if (result.success) {
      console.log('Email sent successfully');
      toast.success("Message Sent Successfully");
    } else {
      console.error('Failed to send email');
      toast.error("There is error in Message sending");
    }
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error("There is error in Message sending");
  }
  
  


    // // Send form data to email
    // sendToEmail(formData);

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      domain: '',
      file: null,
    });
    setUploadedFiles([]);
  };

  const validateInput = () => {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.domain) {
      toast.error("Please fill all fields.");
      return false;
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format.");
      return false;
    }

    // Simple phone number validation
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(formData.phone)) {
      toast.error("Invalid phone number format.");
      return false;
    }

    if(!formData.file){
      toast.error("Please select a file.");
      return false;
    }

    if (formData.file) {
      const maxSize = 1024 * 1024 * 2; // Maximum file size in bytes (1MB)
      const allowedTypes = ['application/pdf']; // Allowed MIME types
  
      if (formData.file.size > maxSize) {
        toast.error("File size exceeds the maximum limit.");
        return false;
      }
  
      if (!allowedTypes.includes(formData.file.type)) {
        toast.error("Unsupported file type.");
        return false;
      }
    }

    return true;
  };

// const sendToEmail = async (data) => {
//   let fileDataUri = '';
//   if (data.file) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       fileDataUri = reader.result.replace(/^data:.+;base64,/, '');
//       sendEmailWithAttachment(fileDataUri);
//     };
//     reader.readAsDataURL(data.file);
//   } 
// };

// const sendEmailWithAttachment = (fileDataUri) => {
//   const templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     domain: formData.domain,
//     file: fileDataUri, // Pass the Data URI as the file
//   };

//   emailjs
//     .send('service_7hs4l9q', 'template_4nswyzg', templateParams, 'YM-p4arYtqlDD7HFz')
//     .then(
//       (response) => {
//         console.log('Email sent successfully!', response.status, response.text);
//         toast.success("Message Sent Successfully");
//       },
//       (error) => {
//         console.error('Failed to send email:', error);
//         toast.error("There is error in Message sending  ");
//       }
//     );
// };
  

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form className="py-6 px-9" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone-No
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+91-000-000-0000"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Domain
              </label>
              <input
                type="text"
                name="domain"
                id="domain"
                placeholder="Full Stack"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.domain}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File
              </label>

              <div className="mb-8">
                <input
                 encType="multipart/form-data" 
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                        {file.name}
                      </span>
                      <a
                        href={URL.createObjectURL(file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#07074D]"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
