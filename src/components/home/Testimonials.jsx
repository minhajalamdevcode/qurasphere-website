import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';

function Testimonials() {
  const swiperRef = useRef(null);
  const testimonials = [{}, {}, {}];

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Testiomals
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div
        id="testimonials"
        className="min-w-[359px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
              <div
                key={index}
                className="text-center rounded-lg py-12 lg:py-6 flex flex-col gap-8 px-2 lg:px-4"
              >
                {/* Client logo */}
                <div className="flex items-center justify-center">
                  <img src="sampleLogo.png" alt="" className="w-10" />
                  <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                    Company Name
                  </div>
                </div>
                {/* Client comment */}
                <p className="text-lg leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia consequuntur repellat, odio rem obcaecati omnis fugit
                  tempore ut, aliquid similique placeat modi quibusdam beatae
                  nisi sed impedit alias itaque? Magnam.
                </p>
                {/* Client details */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="sampleUser.png"
                    alt=""
                    className="w-12 mb-4"
                  />
                  <p className="text-lg font-semibold">Client Name</p>
                  <p className="text-zinc-500">Position at Company</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Testimonials;
