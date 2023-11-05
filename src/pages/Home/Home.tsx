import chortaga from "../../assets/chortaga.svg"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"
import galochka from "../../assets/galochka.svg"
import rel from "../../assets/rel.svg"
import men from  "../../assets/men.svg"
import part1 from "../../assets/part1.svg"
import part2 from "../../assets/part2.svg"
import part3 from "../../assets/part3.svg"
import part4 from "../../assets/part4.svg"
import video from "../../assets/video.svg"
import foto from "../../assets/foto.jpg"

import "./Home.css"
import {useEffect} from "react"

import 'aos/dist/aos.css';
import AOS from 'aos';

import { useTranslation } from "react-i18next"


const Home = () => {


  useEffect(() => {
    AOS.init();
  }, [])

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (

  <div className="dark:bg-gray-800 dark:text-white">  
    <div data-aos="fade-up" data-aos-duration="2000"  className='pt-[100px]'>
      <div className="lg:flex ">
        <div className='lg:w-[50%]'>
          <img src={chortaga} className='sm:m-auto sm:w-[90%] lg:w-[100%] lg:relative lg:left-[70px]' alt="" />
        </div>

        <div className='sm:text-center sm:ml-[5%] lg:text-left lg:w-[50%] lg:ml-[150px]'>
          <p className='text-[24px] text-[#056088] font-bold mb-[20px]'>{t("section1.company")}</p>
          <p className='lg:w-[60%] mb-[10px] text-[18px]'>{t("section1.team")}</p>
          <p>We already handled</p>

          <div className='mt-[20px] flex sm:justify-center lg:justify-start gap-[50px] text-[20px] font-bold text-[#056088]'>
            <p>50+ Clients</p>
            <p>50+ Clients</p>
            <p>20+ Building</p>
          </div>

          <button className='w-[160px] h-[60px] bg-[#28606c] text-white  mt-[30px]'> See more</button>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="2000" className='mt-[100px]'>
        <div className='text-center'>
          <p className='text-[#056088] font-bold text-[24px] mb-[10px]'>{t("section1.servise")}</p>
          <p className='lg:w-[25%] m-auto'>{t("section1.our")}</p>
        </div>

        <div className='md:grid md:grid-cols-2   lg:flex justify-center items-center gap-[20px] mt-[50px] mb-[100px]'>
          <div className='cartochka  sm:w-[60%] sm:m-auto md:w-[70%] lg:w-[22%] md:m-auto lg:m-[0] h-[240px]  '>
              <img src={icon1} className="mt-[27px] ml-[47px]" alt="" />
              <div className="">
                  <p className="ml-[47px] mt-[20px] text-[20px] mb-[10px] font-bold text-white">{t("section1.card1")}</p>
                  <p className="ml-[47px] w-[60%] text-white">{t("section1.text1")}</p>
              </div>
          </div>
           
           <div className='lg:w-[22%] sm:w-[60%] md:w-[70%] sm:m-auto md:m-auto lg:m-[0] h-[240px] '>
            <img src={icon2} className="mt-[27px] ml-[47px]" alt="" />
                <div className="">
                    <p className="ml-[47px] mt-[20px] text-[20px] mb-[10px] font-bold ">{t("section1.card2")}</p>
                    <p className="ml-[47px] w-[70%]">{t("section1.text2")}</p>
                </div>
          </div>

           <div className='lg:w-[22%] sm:w-[60%] md:w-[70%] sm:m-auto md:m-auto lg:m-[0] h-[240px] '>
           <img src={icon3} className="mt-[27px] ml-[47px]" alt="" />
                <div className="">
                    <p className="ml-[47px] mt-[20px] text-[20px] mb-[10px] font-bold ">{t("section1.card3")}</p>
                    <p className="ml-[47px] w-[70%]">{t("section1.text3")}</p>
                </div>
          </div>

           <div className='lg:w-[22%] sm:w-[60%] md:w-[70%] sm:m-auto md:m-auto lg:m-[0] h-[240px]  '>
           <img src={icon4} className="mt-[27px] ml-[47px]" alt="" />
                <div className="">
                    <p className="ml-[47px] mt-[20px] text-[20px] mb-[10px] font-bold ">{t("section1.card4")}</p>
                    <p className="ml-[47px] w-[70%]">{t("section1.text4")}</p>
                </div>

          </div>
        </div>
    </div>


    <div data-aos="fade-up" data-aos-duration="2000" className="mt-[100px]">
      <div className="text-center">
        <p className="text-[20px] text-[#28606c] font-bold mb-[15px]">{t("section1.benif")}</p>
        <p className="lg:w-[20%] m-auto">{t("section1.benif2")}</p>
      </div>

    <div className="lg:flex items-center justify-center gap-[20px] mt-[40px]">
      <div className="bg1 md:w-[60%] sm:w-[60%] sm:m-auto   lg:w-[30%] md:m-auto h-[330px]  lg:m-[0]">
        <img src={galochka} className="m-auto lg:mt-[50px] sm:pt-[20px] md:pt-[20px]" alt="" />
        <div className="text-center text-white">
          <p className="mt-[30px] mb-[16px] text-[20px] font-bold">{t("section1.flex")}</p>
          <p className="w-[50%] m-auto ">{t("section1.flex2")}</p>
        </div>
      </div>
     
      <div className="bg2 lg:w-[30%] sm:w-[60%] sm:m-auto   md:w-[60%] md:m-auto h-[330px]  lg:m-[0]">
        <img src={galochka} className="m-auto mt-[50px]  sm:pt-[20px]  md:pt-[20px]" alt="" />
        <div className="text-center text-white">
          <p className="mt-[30px] mb-[16px] text-[20px] font-bold">{t("section1.contm")}</p>
          <p className="lg:w-[50%] m-auto  ">{t("section1.contm2")}</p>
        </div>

      </div>

      <div className="bg3 lg:w-[30%]  sm:w-[60%] sm:m-auto  md:w-[60%]  md:m-auto h-[330px] lg:m-[0] sm:mb-[100px] ">
        <img src={galochka} className="m-auto mt-[50px]   sm:pt-[20px] md:pt-[20px]" alt="" />
        <div className="text-center text-white">
          <p className="mt-[30px] mb-[16px] text-[20px] font-bold">{t("section1.price")}</p>
          <p className="lg:w-[50%] m-auto  ">{t("section1.price2")}</p>
        </div>

      </div>
    </div>

    </div>
    
    <div data-aos="fade-up" data-aos-duration="2000" className="hero2">
        <div className="pt-[200px] text-center text-white">
          <p>Our works</p>
          <p className="lg:w-[20%] m-auto">Here our some of the best the result when we build some buildings, houses, and also interior designs</p>
        </div>

        <div className="pt-[40px]">
            <div className="md:grid grid-cols-6 grid-rows-3 pb-[5%] gap-5 mt-[5%] pl-[3%] pr-[3%]">
                <div className='md:h-[20vh] sm:h-[50vh] md:w-[100%] sm:w-[50%] m-auto g1'></div>
                <div className='g2 md:w-[100%] sm:h-[50vh] md:row-start-2 md:row-end-4 sm:w-[50%] sm:m-auto md:m-0 sm:mt-[5%] md:mt-0'></div>
                <div className='md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%] g3 row-start-1 row-end-4 '></div>
                <div className='md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%] g4 col-start-3 col-end-5 row-start-1 row-end-3'></div>
                <div className='md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%] g5 row-start-1 row-end-3'></div>
                <div className='g6 md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%]'></div>
                <div className='g7 md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%]'></div>
                <div className='g9 col-start-3 col-end-5 md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%]'></div>
                <div className='g10 col-start-5 col-end-7 md:h-[100%] sm:h-[50vh] sm:w-[50%] md:w-[100%] sm:m-auto md:m-0 sm:mt-[5%]'></div>
            </div>
        </div>

        <div className="lg:flex justify-center ">
          <div className="dark:text-black lg:w-[30%] md:w-[92%] sm:w-[90%] sm:m-auto lg:m-[0] md:m-auto sm:text-center lg:text-left sm:pt-[20px] h-[320px] bg-[white] ">
              <p className="ml-[50px] text-[30px] mt-[50px]">{t("section1.what")}</p>
              <p className="ml-[50px] lg:w-[40%]">{t("section1.see")}</p>
              <button className="bg-[#09A7CA] w-[160px] h-[60px] ml-[50px] mt-[30px] text-white">See more</button>
          </div>

          <div>
            <img src={rel} className="lg:w-[100%] md:w-[92%] sm:w-[90%] sm:m-auto md:m-auto" alt="" />
          </div>
        </div>

      

    </div>

    <div className="lg:w-[20%] md:w-[50%] sm:w-[50%] sm:mr-[35px] md:mr-[35px] lg:h-[266px] bg-[#056088] text-white float-right relative lg:top-[-180px] md:top-[-100px] sm:top-[-100px] lg:mr-[20px]">
      <img src={men} className="relative top-[-60px] right-[30px]" alt="" />
          <p className="w-[80%] m-auto  mt-[-30px]">{t("section1.roberto")}</p>
          <p className="ml-[40px]">- Mr. Roberto</p>
      </div>


    <div data-aos="fade-up" data-aos-duration="2000" className="mt-[200px] hidden">
        <div className="lg:flex gap-[144px] sm:hidden">
          <p className="ml-[70px] text-[#056088] text-[24px] font-bold w-[300px]">Our Partners</p>
         <img src={part1} alt="" />
         <img src={part2} alt="" />
         <img src={part3} alt="" />
         <img src={part4} alt="" />
        </div>
    </div>


    <div className="mt-[100px] ">
      <img src={video} className="m-auto lg:w-[80%] md:w-[90%] sm:w-[90%] sm:m-auto" alt="" />
    </div>



    
    <div data-aos="fade-up" data-aos-duration="2000" className="heroOxir mt-[100px] m-auto lg:ml-[50px] md:w-[90%] sm:w-[90%]">
      <div className="text-center pt-[40px] text-white">
        <p className="lg:w-[40%] text-[50px] m-auto">{t("section1.want")}</p>
        <p className="lg:w-[40%] m-auto">{t("section1.submit")}</p>
      </div>
      <div className="text-center pb-[70px]">
        <input type="text" className="lg:w-[30%] h-[52px] mt-[20px]" />
        <button className="bg-[#09A7CA] w-[120px]  h-[52px]">Submit</button>
      </div>
    </div>

  </div>
  )
}

export default Home