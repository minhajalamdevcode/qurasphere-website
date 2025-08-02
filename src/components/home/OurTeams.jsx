import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';

function OurTeams() {
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
    <div className="px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Teams
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Meet the Minds Behind the Magic
        </p>
      </div>
      <div className="cards flex flex-wrap gap-8 justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="text-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[359px] lg:w-[275px] flex-grow"
          >
            <div className=" w-full min-h-[300px] overflow-hidden relative bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 transition-all duration-300 rounded-t-lg">
              <img
                src={member.image}
                alt=""
                className=" w-full h-full hover:scale-110 transition-all duration-1000 "
              />
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full -z-10 scale-110 translate-x-5 translate-y-20"
              >
                <path
                  fill="#0F62FE"
                  d="M55.8,-34C68.1,-11,70.9,15.8,60,32C49.1,48.3,24.5,54,-1.5,54.9C-27.5,55.8,-55,51.7,-66.2,35.3C-77.4,18.9,-72.2,-9.9,-58.5,-33.9C-44.7,-57.8,-22.4,-76.9,-0.3,-76.7C21.8,-76.5,43.5,-57.1,55.8,-34Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-semibold">{member.name}</h3>
            <p className="mt-1 not-italic font-semibold text-zinc-600">
              {member.position}
            </p>
            <div
              id="member-social-links"
              className="flex justify-center gap-6 items-center my-8"
            >
              <a
                href={member.social.linkedin}
                title="LinkedinIn"
                target="_blank"
              >
                <FaLinkedinIn className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
              </a>
              <a href={member.social.gmail} title="Gmail" target="_blank">
                <SiGmail className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
              </a>
              <a href={member.social.twitter} title="XTwitter" target="_blank">
                <FaXTwitter className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OurTeams;
