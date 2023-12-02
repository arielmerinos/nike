import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px]"
        />
        <div className="mt-4 flex flex-wrap justify-start gap-2.5 ">
            <div className="w-full flex gap-3">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className="text-xl font-montserrat  leading-normal font-bold text-slate-gray"> ({rating})</p>
            </div>
            <h3 className="leading-normal text-2xl font-semibold font-palanquin w-full">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-sxl">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard