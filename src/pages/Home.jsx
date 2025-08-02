import Hero from "../components/home/Hero"
import ChooseUs from "../components/home/ChooseUs"
import OurWork from '../components/home/OurWork'
import Services from '../components/home/Services'
import ContactForm from '../components/ContactForm';
import WorkingShowcase from "../components/home/WorkingShowcase"

function Home() {
  return (
    <>
      <Hero /> 
      <ChooseUs />
      <WorkingShowcase/>
      <Services />
      <OurWork />
      <ContactForm/>
    </>
  )  
}
export default Home;
