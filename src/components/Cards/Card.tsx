
type CardProps = {

    img1: string,
    img2: string,
    img3: string,
    title : string,
    text1 : string,
    text2:string,
    text3:string
}


const Card = ({img1, img2,img3,text1,text2,text3 ,title}: CardProps) => {
  return (
        <div className= " sm:w-[80%] sm:m-auto lg:m-[0]  md:m-auto md:w-[90%]  lg:w-[30%] h-[300px] cardd bg-[white]">
            <p className="text-[#056088] ml-[30px] mt-[30px] mb-[20px] text-[20px] font-bold">{title}</p>
            <div className="flex mb-[10px]">
              <img className="ml-[30px]" src={img1} alt="" />
              <p className="ml-[30px]">{text1}</p>
            </div>

            <div className="flex mb-[10px]">
              <img className="ml-[30px]" src={img2} alt="" />
              <p className="ml-[30px]">{text2}</p>
            </div>

            <div className="flex">
              <img className="ml-[30px]" src={img3} alt="" />
              <p className="ml-[30px]">{text3}</p>
            </div>

            <button className="w-[158px] h-[62px] bg-[#09A7CA] ml-[30px] mt-[20px] text-white">Details</button>
        </div>
  )
}

export default Card