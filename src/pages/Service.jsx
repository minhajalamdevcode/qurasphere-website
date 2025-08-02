import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Card from '../components/global/Card';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from "../data/servicesData";
import Banner from '../components/global/Banner';
import TechnologiesSlider from '../components/home/TechnologiesSlider'

function Service() {
  return (
    <>
      <Banner bannerText={'Our Services'}/>
      <div className='w-full mb-16'>
        <div className='max-w-[1280px] mx-auto mt-4 md:mt-24 mb-24 flex justify-center gap-7 gap-y-9 flex-wrap'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service}/>
          ))}
        </div>
        <TechnologiesSlider />
      </div>
      <ContactForm />

    </>
  )
}
export default Service;
