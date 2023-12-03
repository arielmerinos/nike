
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 flex-wrap flex-col" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md text-center">
      Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3> 
      <div className="w-full lg:max-w-[80%] flex items-center flex-col gap-5 p-2.5 border-slate-gray rounded-full">
        <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter your email address"
        className="input required:border-red-500 w-full"
        />
        <div className="flex justify-center items-center max-sm:w-full">
        <button className="bg-coral-red text-white px-10 py-3 mt-5 focus:outline-none rounded-full py-5">Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe