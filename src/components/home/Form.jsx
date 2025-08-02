import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
  };

  return (
    <form
      className="flex flex-col justify-center gap-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <label className="pl-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
          required
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <label className="pl-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
          required
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <label className="pl-1" htmlFor="number">
          Mobile Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
          required
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <label className="pl-1" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you need"
          className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
          rows={1}
        />
      </div>
      <button
        type="submit"
        className="ml-1 mt-16 lg:mt-8 outline outline-1 outline-blue-600 px-6 py-3 max-w-36 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect md:ml-0"
      >
        Submit
      </button>
    </form>
  );
}
export default Form;
