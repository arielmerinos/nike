import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"
import { useState } from "react"

const Hero = () => {

  const[bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    > 
      <div className="relative xl:w-2/5 flex sm:flex-col flex-col p-4 justify-center items-start w-full xl:padding-x mt-8 pt-28 sm:w-full sm:flex-wrap"> 
        <p className="text-lg font-montserrat text-coral-red">Our summer collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The new arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray py-8 text-lg leading-8 sm:max-w-sm">Dicover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label="Shop now!" iconURL={arrowRight}/>

        <div className="flex sm:justify-between justify-center items-start flex-wrap w-full  mt-20 gap-8 ">
          {statistics.map(({ value, label }) => (
            <div key={`${value}${label}`} className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold font-palanquin">{value}</p>
              <p className="text-xl">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center">
        <img
        src={bigShoeImage}
        alt="big shoe"
        className="relative object-contain z-10"
        height={610}
        width={500}
         />
         <div className="flex sm:gap-6 gap-4 absolute sm:-bottom-[5%] -bottom-[20%] mt-2 sm:left-[10%] max-sm:px-6" id="shoes">
          {
            shoes.map((shoe) =>{ 
            return(
              <div key={shoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe)=>{ setBigShoeImage(shoe)}}
                  bigShoeImg={bigShoeImage}
                />
              </div>
            )}
            )
          }
         </div>
      </div>
    </section>
  )
}

export default Hero