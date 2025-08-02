import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="relative max-w-[1280px] mx-auto min-h-[65vh] md:min-h-[90vh] px-4">
      {/* Background image for mobile */}
      <div className="absolute inset-0  opacity-0 z-0">
        <img
          src="dimension.png"
          alt="Background"
          className="hidden opacity-0 z-0"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center min-h-[65vh] md:min-h-[90vh]">
        <div className="text-part w-full md:w-1/2">
          <h1 className="leading-[50px] md:leading-[75px] md:pl-11 md:pt-5 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text tracking-wide text-left md:text-left sm:text-left">
            We Build,
            <br />
            Web Solution
          </h1>

          <h2 className="text-black text-3xl md:text-5xl font-semibold md:pl-11 py-4 text-left md:text-left">
            On&nbsp;
            <ReactTyped
              strings={["Time", "Budget", "Point"]}
              typeSpeed={200}
              backSpeed={100}
              loop={true}
              showCursor={false}
            />
          </h2>

          <p className="md:pl-11 py-2 font-normal text-lg md:text-2xl text-gray-600 text-left md:text-left">
            Unlocking new dimension to empower{" "}
            <span className="font-semibold italic text-blue-600 capitalize block">
              your business
            </span>
          </p>

          <div className="flex justify-start md:justify-start">
            <button
              type="button"
              className="md:ml-10 md:mt-2 ml-1 mt-3 outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect "
            >
            View Our Work
            </button>
          </div>
        </div>

        {/* Image on right for desktop */}
        <div className="image-part w-full md:w-1/2 h-[300px] md:h-[600px] mt-6 hidden md:mt-0 md:opacity-100 md:block">
          <img
            src="dimension.png"
            alt="web solution"
            className="w-full h-full object-contain hidden md:opacity-100 md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
