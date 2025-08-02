import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { LuPhoneCall,LuTrendingUp,LuBrainCircuit  } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';
import Banner from '../components/global/Banner';
import ContactForm from '../components/ContactForm';
import WorkingShowcase from '../components/home/WorkingShowcase'
import { BsBarChart } from "react-icons/bs";
import { MdDeveloperBoard } from "react-icons/md";

function AboutUs() {

  const missionData = [
    {
      icon: <LuBrainCircuit className="w-8 h-8 text-blue-600" />,
      title: 'Bold Strategy',
      desc: 'We think ahead and plan with purpose, ensuring every decision drives long-term value.',
    },
    {
      icon: <MdDeveloperBoard  className="w-8 h-8 text-pink-600" />,
      title: 'Creative Execution',
      desc: 'Ideas come to life through innovative design and imaginative delivery.',
    },
    {
      icon: <LuTrendingUp className="w-8 h-8 text-green-600" />,
      title: 'Scalable Growth',
      desc: 'We build solutions that grow with your vision — fast, stable, and future-proof.',
    },
    {
      icon: <BsBarChart className="w-8 h-8 text-purple-600" />,
      title: 'Measurable Success',
      desc: 'We track results that matter — so progress is always visible, and impact is always known.',
    },
  ];
  const members = [
    {
      name: 'Tauhid Raza',
      position: 'Frontend Developer',
      image: 'tauhid.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/mdtauhidraza/',
        gmail: 'mailto:tauhidr507@gmail.com',
        twitter: 'https://x.com/md_raza71452',
      },
    },
    {
      name: 'Syed Saqlain Ahmad',
      position: 'Full Stack Developer',
      image: 'saqlain.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/syed-saqlain-ahmad-a87b691b2',
        gmail: 'syedsaqlainahmad07@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Shadab Majid',
      position: 'Full Stack Drupal Developer',
      image: 'shadab.jpg',
      social: {
        linkedin: 'http://www.linkedin.com/in/shadab-majid-7b068b244',
        gmail: 'mailto:shadabmajid13@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Minhaj Alam',
      position: 'Web Developer',
      image: 'minhaj.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/minhaj-alam875/',
        gmail: 'mailto:myminhajalam392@gmail.com',
        twitter: 'minhaj.jpg',
      },
    },
    {
      name: 'Tajdar',
      position: 'Frontend Developer',
      image: 'tajdar.jpg',
      social: {
        linkedin: '',
        gmail: 'mailto:mdtajdaradil001@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Sharif Iqbal Jamil',
      position: 'Frontend Developer',
      image: 'sarif.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/grimwebdeveloper/',
        gmail: 'mailto:grimwebdeveloper@gmail.com',
        twitter: 'https://x.com/grimdeveloper',
      },
    },
  ];
  return (
    <>
      <Banner bannerText={'About Us'} />
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-16 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Our Mission</h2>
        {/* <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Your goals drive us. Results prove it.
        </div> */}
        <p className="text-lg lg:text-xl text-zinc-600 max-w-4xl mx-auto">
          We empower ambitious brands through bold strategy and breakthrough creativity. More than
          services, we ignite growth, spark engagement, and turn vision into measurable success.
          {/* Your goals drive us. Results prove it. */}
          {/* To empower ambitious brands with bold strategies and breakthrough creativity. We don’t just 
         deliver services—we spark growth, ignite engagement, and turn your vision into measurable success. 
         Your goals become our mission, and results are the proof. */}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto pt-16">
          {missionData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        
        </div>
        {/* <div className=' flex justify-center py-10'>
          <div className='rounded-full  border-blue-600 border-2  w-60 h-60'></div>
          <div className='rounded-full bg-blue-300 border-blue-600 border-2  w-60 h-60'></div>
          <div className='rounded-full bg-blue-300 border-blue-600 border-2  w-60 h-60'></div>
          <div className='rounded-full bg-blue-500 border-blue-600 border-2  w-60 h-60'></div>
        </div> */}
      </div>
      <div className="px-8 mx-auto py-16 text-center bg-zinc-200">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Our Journey</h2>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-4xl mx-auto">
          What began as a vision to challenge the ordinary has grown into a mission to elevate brands with meaning and momentum.
          Along the way, we've partnered with bold thinkers, built lasting relationships, and turned big ideas into measurable success.
          Every step forward shapes who we are—and where we’re headed next.
        </p>
        <div>
          <div className="max-w-screen-xl mx-auto px-8 py-16 flex flex-wrap justify-center sm:justify-around gap-8 text-center ">
            <div className="w-[150px]">
              <div className="font-semibold text-6xl">10+</div>
              <div className="text-blue-600 text-xl mt-2">Satisfied Client</div>
            </div>
            <div className="w-[150px]">
              <div className="font-semibold text-6xl">120+</div>
              <div className="text-blue-600 text-xl mt-2">Issue Solved</div>
            </div>
            <div className="w-[168px]">
              <div className="font-semibold text-6xl">7+</div>
              <div className="text-blue-600 text-xl mt-2">Years in Experience</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-24 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Our Team</h2>
        <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Meet the minds behind the magic
        </div>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-4xl mx-auto">
          We're dedicated to delivering innovative web solutions with a modern
          approach. Our expert team is committed to achieving successful results
          for our clients.
        </p>
      </div>

      <section className="max-w-screen-xl px-8 mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[313px] lg:w-[275px] xl:w-80 flex-grow"
            >
              <div className="w-full min-h-[300px] overflow-hidden relative rounded-t-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 duration-1000"
                />
                {/* <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-full h-full -z-10 scale-110 translate-x-5 translate-y-20"
                >
                  <path
                    fill="#0F62FE"
                    d="M55.8,-34C68.1,-11,70.9,15.8,60,32C49.1,48.3,24.5,54,-1.5,54.9C-27.5,55.8,-55,51.7,-66.2,35.3C-77.4,18.9,-72.2,-9.9,-58.5,-33.9C-44.7,-57.8,-22.4,-76.9,-0.3,-76.7C21.8,-76.5,43.5,-57.1,55.8,-34Z"
                    transform="translate(100 100)"
                  />
                </svg> */}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{member.name}</h3>
              <p className="mt-1 not-italic font-semibold text-zinc-600">
                {member.position}
              </p>
              <div
                id="member-social-links"
                className="flex justify-center gap-6 items-center my-8"
              >
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={member.social.gmail}
                    title="Gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
export default AboutUs;
