import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col items-center">
    <h3 className="font-palaquin text-center text-4xl font-bold "> What our <span className="text-coral-red">Customers</span> say? </h3>
    <p className="info-text margin-auto mt-5 max-w-lg text-center">Hear genuine stories from our statisfied customers about their exceptional experiencies with us</p>
    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map(({ customerName, feedback, imgURL, rating }) => (
        <div key={`${customerName}${feedback}`} className="flex flex-col justify-center items-center max-w-sm">
          <img
          src={imgURL}
          alt={customerName}
          className="rounded-full shadow-lg"
          width={100}
          height={100}

          />
          <p className="text-center text-xl font-bold font-palanquin mt-5">{customerName} <span className="text-coral-red">{rating} </span></p>
          <p className="text-center text-lg font-palanquin mt-5">{feedback}</p>
        </div>
      ))}
    </div>
    </section>
  )
}

export default CustomerReviews