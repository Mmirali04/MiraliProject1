import soat from "../../assets/soat.svg"
import sumka from "../../assets/sumka.svg"
import money from "../../assets/money.svg"


import "./Career.css"
import Card from "../../components/Cards/Card"

const Career = () => {
  return (
    <div className="dark:bg-gray-800 ">
      <div className="pt-[100px] lg:flex justify-center gap-[20px] flex-wrap md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">

        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Senior architect" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Head of constructions" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Drafter" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="UI/UX Designer" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Driver" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Designer" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Web developer" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Interior designer" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>
        <Card img1 = {soat} img2 = {sumka} img3 = {money} title="Interior designer" text1="5+ years experience" text2="Full-time" text3="$9000/month"/>

      </div>
    </div>
  )
}

export default Career