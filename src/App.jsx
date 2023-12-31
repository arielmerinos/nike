import { 
  CustomerReviews, 
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality
  } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="realtive">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section id="products" className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>    
    <section className="padding-x py-10">
      <Services/>
    </section>
     <section className="padding">  
      <SpecialOffers/>
    </section>
     <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
     <section className="padding-x sm:py-32 py-16 w-full flex ">
      <Subscribe/>
    </section>
     <section id="contact-us" className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;