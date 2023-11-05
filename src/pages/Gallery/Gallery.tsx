import gallery1 from "../../assets/gallery.svg"
import gallery2 from "../../assets/gallery2.svg"
import gallery3 from "../../assets/gallery3.svg"
import gallery4 from "../../assets/gallery4.svg"
import gallery5 from "../../assets/gallery5.svg"
import gallery6 from "../../assets/gallery6.svg"


const Gallery = () => {
  return (
  <div className="dark:bg-gray-800 dark:text-white">
    <div className='lg:flex flex-wrap justify-center gap-[20px] md:grid md:grid-cols-2 sm:grid-cols-1 pt-[50px]'>
        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery1} className="w-[100%]" alt="" />
          </div>
          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>


        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery2} className="w-[100%]" alt="" />
          </div>

          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>


        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery3} className="w-[100%]" alt="" />
          </div>

          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>

        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery4} className="w-[100%]" alt="" />
          </div>

          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>

        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery5} className="w-[100%]" alt="" />
          </div>

          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>

        <div className='sm:w-[70%] sm:m-auto sm:mb-[20px] md:w-[90%] md:m-auto lg:w-[30%] h-[490px] border-solid border-2 lg:m-[0] bg-[white] dark:text-black'>
          <div>
            <img src={gallery6} className="w-[100%]" alt="" />
          </div>

          <div className="ml-[40px]">
            <p className="mt-[30px] font-bold text-[#056088]">Interior design</p>
            <p className="mt-[20px]">3 Months work time</p>
            <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[20px]">See process</button>
          </div>
        </div>
    </div>

    <div className="text-center pt-[40px]">
      <p className="text-[30px] font-bold text-[#056088]">See More</p>
    </div>
  </div>
  )
}

export default Gallery