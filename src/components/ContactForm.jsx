import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Form from './home/Form';


function ContactForm() {
  return (
    <>
      <section className="p-8 flex flex-col gap-16 lg:flex-row max-w-screen-xl mx-auto">
        <div className="lg:w-1/2">
          <h2 className="font-semibold text-4xl max-w-[608px] lg:w-auto">
            Let's Collaborate To Make Something Exceptional
          </h2>
          <ul className="mt-4">
            <li className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-lg text-blue-600" />
              <a
                href="tel:+916204663143"
                className="hover:text-blue-600 transition-colors"
              >
                +91 6204663143
              </a>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoMdMail className="text-lg text-blue-600" />
              <a
                href="mailto:qurasphere@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                qurasphere@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg text-blue-600" />
              <span className="hover:text-blue-600 transition-colors">
                Bariatu, Ranchi
              </span>
            </li>
          </ul>
        </div>
        <div className="pb-16 lg:w-1/2">
          <Form />
        </div>
      </section>
    </>
  );
}

export default ContactForm;
