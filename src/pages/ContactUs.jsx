import Banner from "../components/global/Banner"
import ContactForm from "../components/ContactForm"
function ContactUs() {
  return (
    <>
    <Banner bannerText={'Contact Us'} />
    <div className="py-16 text-center max-w-screen-xl mx-auto px-8">
      <h2 className="text-4xl lg:text-5xl font-semibold mb-6">We’d love to hear from you</h2>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-4xl mx-auto">
          Whether you have a question, a bold idea, or you're ready to start your next project—we’re here for it. Reach out and let’s make something incredible together. Your next move starts with a simple hello.
        </p>
        <div className="flex justify-center mx-auto max-w-screen-xl py-16">
          <img src="contactbg2.png" className="image-part w-full md:w-1/2  md:h-full mt-6 md:mt-0 md:opacity-100 md:block" alt="" />
        </div>
    </div>
    <ContactForm />
    </>
  )
}

export default ContactUs;
