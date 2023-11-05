import contactFoto from "../../assets/contactFoto.svg"

const Contact = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <div className='pt-[100px]'>
        <div className='lg:flex'>
          <div className='lg:w-[40%] lg:ml-[70px]'>
            <img src={contactFoto} className="sm:w-[90%] sm:m-auto lg:w-[100%]" alt="" />
          </div>

          <div className="lg:w-[60%] bg-[#F5F5F5] lg:relative right-[100px] sm:pb-[20px] lg:pb-[0]  ">
            <p className="pt-[44px] ml-[40px] text-[#056088] text-[24px]">Let’s talk about anything you need</p>
            <input type="text" className="w-[40%] h-[50px] mt-[30px] ml-[40px] p-[10px]" placeholder="Your name/company name" />
            <input type="text" className="w-[40%] h-[50px] ml-[20px] p-[10px]" placeholder="Phone/E-mail"  />
            <input type="text" className="mt-[24px] w-[83%] ml-[40px] h-[180px] p-[10px]" placeholder="Message" /><br />
            <button className="bg-[#09A7CA] ml-[40px] w-[168px] h-[62px] mt-[30px] text-white "> Submit</button>
          </div>
        
        </div>


        <div className="pt-[100px] text-center">
          <p className="text-[24px] text-[#056088] font-bold">Or contact us via e-mails or even mobile call or Whatsapp messages</p>
         <div className="sm:grid md:flex gap-[30px] text-white items-center justify-center pt-[30px]">
          <button className="w-[158px] h-[68px] bg-[#09A7CA]">E-mails</button>
          <button className="w-[158px] h-[68px] bg-[#09A7CA]">Whatsapp</button>
          <button className="w-[158px] h-[68px] bg-[#09A7CA]">Message</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact