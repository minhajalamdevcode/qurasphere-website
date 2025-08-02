

function TechnologiesSlider() {
  const technologies = [
    { title: "HTML", url: "html.png" },
    { title: "CSS", url: "css.png" },
    { title: "Bootstrap", url: "bootstrap.png" },
    { title: "SCSS", url: "scass.png" },
    { title: "PostgreSQL", url: "postgresql.png" },
    { title: "MySQL", url: "mysql.png" },
    { title: "MongoDB", url: "mongodb.png" },
    { title: "Drupal", url: "drupal.png" },
    { title: "WordPress", url: "wordpress.png" },
    { title: "Figma", url: "figma.png" },
    { title: "Adobe Illustrator", url: "adobe-illustrator.png" },
    { title: "React", url: "react.png" },
    { title: "HTML", url: "html.png" },
  ];

  const technologiesSecondRow = [
    { title: "Redux", url: "redux.png" },
    { title: "Node.js", url: "nodejs.png" },
    { title: "SQLite3", url: "sqlite3.png" },
    { title: "Ionic", url: "ionic.png" },
    { title: "TanQuery", url: "tanquery.png" },
    { title: "JavaScript", url: "javascript.png" },
    { title: "Express", url: "expressjs.webp" },
    { title: "REST API", url: "restapi.png" },
    { title: "PHP", url: "php.png" },
    { title: "Redux", url: "redux.png" },
    { title: "Node.js", url: "nodejs.png" },
    { title: "SQLite3", url: "sqlite3.png" },
  ]

  return (
    <div className="mx-auto bg-zinc-200 py-16 text-center flex justify-center flex-col items-center ">
      <div className=' grid text-2xl md:4xl font-medium mx-auto text-center px-8'>
        <h1 className='font-semibold text-4xl pb-6'>Technologies We Work With</h1>
        <h3 className='text-zinc-600 text-xl max-w-5xl text-center mx-auto'>Our services are crafted to deliver real results, Whether you're launching a new project or expanding an existing one, our dedicated team is committed to delivering your vision with expertise, reliability, and innovation.</h3>
      </div>
      {/* <div className="relative overflow-hidden bg-gray-900 py-4"> */}
      {/* <div className="whitespace-nowrap inlineblock group-hover:[animation-play-state:paused] py-4">
        <div className="flex gap-20">
          <div className=" flex flex-col items-center w-[calc(6%-16px)] md:w-[calc(12.5%-55px)] flex-shrink-0">
            <div className="w-24 h-24 bg-white techItem rounded-lg flex flex-col items-center justify-center shadow-sm cursor-default">
              <img alt="CSS3" loading="lazy" width="52" height="52" decoding="async" data-nimg="1"  src="html.png" className="tranparent" /><span className="text-xs mt-2">CSS3</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative overflow-hidden w-full pt-16 max-w-screen-xl">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-zinc-200 to-transparent pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r to-zinc-200 from-transparent pointer-events-none"></div>
        <div className="flex w-[200%] animate-[infinite-scroll-left_20s_linear_infinite] group-hover:[animation-play-state:paused] py-8 ">
          <div className="inline-flex gap-4 md:gap-16 text-white font-medium text-lg whitespace-nowrap">
            {technologies.map((technology, idx) => (
              <div key={idx} className=" flex flex-col items-center w-36  flex-shrink-0">
                <div className="w-32 h-32 bg-white techItem rounded-lg flex flex-col items-center justify-center shadow-sm cursor-default text-black">
                  <img alt={"tech"} loading="lazy" width="52" height="52" decoding="async" data-nimg="1" src={technology.url} className="tranparent" /><span className="text-xs mt-2">{technology.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="flex w-[200%] animate-[infinite-scroll-right_20s_linear_infinite] group-hover:[animation-play-state:paused] py-8 ">
          <div class="inline-flex gap-4 md:gap-16 text-white font-medium text-lg whitespace-nowrap">
            {technologiesSecondRow.map((technology, idx) => (
              <div key={idx} className=" flex flex-col items-center w-36  flex-shrink-0">
                <div className="w-32 h-32 bg-white techItem rounded-lg flex flex-col items-center justify-center shadow-sm cursor-default text-black">
                  <img alt={"tech"} loading="lazy" width="52" height="52" decoding="async" data-nimg="1" src={technology.url} className="tranparent" /><span className="text-xs mt-2">{technology.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
    // </div>
  );
}
export default TechnologiesSlider;
