function Blog() {
  const blogs = [{}, {}, {}];
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Blog
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="blogs flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] w-full rounded-lg pb-4 lg:pb-0 lg:flex lg:flex-row-reverse"
          >
            <img
              src="sampleBlog.jpg"
              alt=""
              className="rounded-t-lg lg:w-72 lg:rounded-tr-[0.5rem] lg:rounded-br-[0.5rem] lg:rounded-tl-[0rem] lg:rounded-bl-[0rem]"
            />
            <div className="p-4">
              {/* Tag */}
              <div className="italic mb-8 text-zinc-600 mt-4">
                Artificial Intellisense
              </div>
              {/* Heading */}
              <h3 className="font-semibold text-2xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              {/* Content */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                tenetur magni placeat dolor. Quam nihil amet eligendi laborum.
                Inventore, error!
              </p>
              {/* Uploader */}
              <div className="mt-16 flex gap-4 items-center">
                <img src="sampleUser.png" alt="" className="w-12" />
                <div className="flex flex-col justify-center leading-none gap-1">
                  <div className="font-semibold uppercase">Uploader Name</div>
                  <div className="italic text-zinc-600">1 January 2027</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;
