import { FaRegEye } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';

function ChooseUs() {
  return (
    <div className="px-8 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto pb-16">
      <div className="lg:text-left text-center mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Philosopy Behind Our Process
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {/* <div className="hidden h-full lg:flex justify-end items-center lg:mr-8">
            <LuBrainCircuit className="w-10 text-9xl scale-150 text-blue-600" />
          </div> */}
          <div>
            <h3 className="text-2xl flex items-center justify-start gap-4 font-semibold">
              🔭 Vision-Driven Collaboration
            </h3>
            <p className="text-lg mt-4 text-zinc-700">
              The best digital solutions begin with deep understanding. We
              prioritize open dialogue to ensure every line of code and feature
              aligns with your business vision and goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* <div className="hidden h-full lg:flex justify-end items-center lg:mr-8">
              <LuBrainCircuit className="w-10 text-9xl scale-150 text-blue-600" />
            </div> */}
            <div>
              <h3 className="text-2xl flex items-center justify-start gap-4 font-semibold">
                🧩 Strategy-Backed Development{' '}
              </h3>
              <p className="text-lg mt-4 text-zinc-700">
                Every functionality we build is guided by a strategic
                roadmap—ensuring your product not only performs flawlessly but
                also drives measurable results.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* <div className="hidden h-full lg:flex justify-end items-center lg:mr-8">
              <LuBrainCircuit className="w-10 text-9xl scale-150 text-blue-600" />
            </div> */}
            <div>
              <h3 className="text-2xl flex items-center justify-start gap-4 font-semibold">
                🔄 Seamless, Transparent Process{' '}
              </h3>
              <p className="text-lg mt-4 text-zinc-700">
                No guesswork, no hidden delays, from planning to deployment, we
                simplify the development journey. Clear milestones, honest
                feedback, consistent updates, and dependable communication keep
                your project on track—without surprises.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* <div className="hidden h-full lg:flex justify-end items-center lg:mr-8">
              <LuBrainCircuit className="w-10 text-9xl scale-150 text-blue-600" />
            </div> */}
            <div>
              <h3 className="text-2xl flex items-center justify-start gap-4 font-semibold">
                💡 Innovation with Intent
              </h3>
              <p className="text-lg mt-4 text-zinc-700">
                We code with purpose. Every design element and feature is
                crafted to solve real problems, create value, and resonate with
                your users in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;
