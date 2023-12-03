import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="logo" width={150} height={46}/>
        </a>
          <p className="text-white mt-6 text-base leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div key={icon} className="flex bg-white rounded-full h-12 w-12 justify-center items-center cursor-pointer">
                <img
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                />
              </div>
            ))}
           </div>
      </div>
      <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className="text-white font-montserrat text-2xl font-semibold ">{section.title} </h4>
            <ul>
              {section.links.map((link) => (
                <li key={link} className="text-white text-sm leading-7 font-montserrat mt-4"><a href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          ))}
      </div>
      </div>
    </footer>
  )
}

export default Footer;