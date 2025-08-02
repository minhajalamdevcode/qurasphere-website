function Heading({title, tagline}) {
  return (
    <div className="text-center mb-6">
    <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">{title}</h2>
    <p className="text-lg mt-2 italic text-zinc-600">{tagline}</p>
    </div>
  )
}
export default Heading