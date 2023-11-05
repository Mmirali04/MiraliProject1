import dutaga from  "../../assets/dutaga.svg"
import chertezh from "../../assets/chertezh.svg"

import "./About.css"
const About = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
       <div className='lg:flex pt-[100px] justify-center pb-[100px]'>
          <div className="lg:w-[50%] lg:ml-[70px]">
            <img src={dutaga} className="sm:m-auto lg:m-[0] sm:w-[95%]" alt="" />
          </div>

          <div className="lg:w-[50%] mt-[30px] sm:text-center sm:ml-[5%] sm:pr-[5%] lg:text-left lg:ml-[0] lg:pr-[0] ">
            <p className="text-[#056088] text-[30px] font-bold mb-[15px]">Here were the story begins</p>
            <p className="lg:w-[70%] mb-[30px]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="lg:w-[70%]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
       </div>


       <div className="abouthero w-[100%] ">
          <div className="lg:flex pt-[55px] text-white pb-[55px]">
              <div className="lg:w-[50%] lg:ml-[90px] sm:text-center lg:text-left sm:mb-[30px] sm:ml-[5%] sm:pr-[5%] lg:pr-[0] ">
                <p className="text-[34px] mb-[20px] mt-[40px]">We love to make perfect   home</p>
                <p className="lg:w-[70%]">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>

              <div>
                  <img src={chertezh} className="sm:m-auto sm:w-[95%] lg:w-[100%] lg:relative lg:right-[90px]" alt="" />
              </div>
          </div>
       </div>
    </div>
  )
}

export default About