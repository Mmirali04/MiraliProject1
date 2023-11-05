import newsFoto from "../../assets/newsFoto.svg"
import newsCard1 from "../../assets/newsCard.svg"
import newsCard2 from "../../assets/newsCard2.svg"
import newsCard3 from "../../assets/newsCard3.svg"

import "./News.css"
const News = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="flex justify-center   pt-[50px] lg:mb-[-200px] sm:mb-[-100px]">
        <img src={newsFoto} className="sm:w-[95%]" alt="" />
      </div>

      <div className="newshero w-[100%] h-[580px] m-auto">
      </div>
      
      <div className="lg:flex sm:grid justify-center gap-[20px]">
          <div className="lg:w-[30%]  sm:w-[80%] sm:m-auto  lg:h-[544px] border-solid border-2 lg:mt-[-150px] sm:mt-[-150px]  lg:m-[0] bg-[white] dark:text-black">
            <img src={newsCard1} className="w-[100%]" alt="" />
            <div className="ml-[30px] mt-[30px]">
              <p className="text-[24px] text-[#056088] font-bold">Tips of the week</p>
              <p className="w-[80%] mt-[20px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
              <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[30px] text-white sm:mb-[20px]">Read more</button>
            </div>
          </div>

          <div className="lg:w-[30%] sm:w-[80%] sm:m-auto  lg:h-[544px] border-solid border-2 lg:mt-[-150px] lg:m-[0] bg-[white] dark:text-black">
            <img src={newsCard2} className="w-[100%]" alt="" />
            <div className="ml-[30px] mt-[30px]">
              <p className="text-[24px] text-[#056088] font-bold">Tips of the week</p>
              <p className="w-[80%] mt-[20px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
              <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[30px] text-white sm:mb-[20px]">Read more</button>
            </div>
          </div>

          <div className="lg:w-[30%] sm:w-[80%] sm:m-auto  lg:h-[544px] border-solid border-2 lg:mt-[-150px] lg:m-[0] bg-[white] dark:text-black">
            <img src={newsCard3} className="w-[100%]" alt="" />
            <div className="ml-[30px] mt-[30px]">
              <p className="text-[24px] text-[#056088] font-bold">Tips of the week</p>
              <p className="w-[80%] mt-[20px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
              <button className="bg-[#09A7CA] w-[158px] h-[60px] mt-[30px] text-white sm:mb-[20px]">Read more</button>
            </div>
          </div>
      </div>

      <div className="text-center pt-[40px]">
        <p className="text-[30px] text-[#056088] font-bold">See More</p>
      </div>
    </div>
  )
}

export default News