

const Footer = () => {
  return (
    <div className='flex items-center flex-col gap-3 sm:flex-row max-w-[1300px] mx-auto md:justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Fabian At</h3>
      </div>

      <div className="text-white">
        Ver portafolio anterior <a href="https://tlapanco.github.io/portfolio/v0" rel="noreferrer" className="hover:text-main-blue" target="_blank"> aquí</a>
      </div>

      <p className='text-gray-400'>2024</p>

    </div>
  )
}

export default Footer