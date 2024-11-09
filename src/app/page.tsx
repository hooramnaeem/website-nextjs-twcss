import Image from "next/image";
import bgcar from "../../image/bgcar.jpg"
import pay from "../../image/pay.png"
import fastdelivery from "../../image/fastdelivery.png"
import costomer from "../../image/costomer.jpg"
import Link from 'next/link';
import collection1 from '../../image/collection1.jpg'
import collection01 from "../../image/collection01.jpg"
import collection02 from "../../image/collection02.jpg"
import collection06 from "../../image/collection06.jpg"
import collection08 from "../../image/collection08.jpg"
import collection10 from "../../image/collection10.jpg"
export default function Home() {
  return (
    <>
      
      <main>
      <section className="h-screen bg-black bg-cover bg-center flex flex-col md:flex-row items-center text-white p-6">
  <div className="text-center md:text-left md:w-1/2 mx-auto">
    <h1 className="text-5xl  bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent font-bold">Where Deals and Dreams Drive Together</h1>
    <h3 className="mt-4 max-w-md mx-auto  font-bold md:mx-0">Choose from <span className="  hover:text-white transition bg-gradient-to-l from-red-700  to-red-400 bg-clip-text text-transparent font-extrabold text-xl" >1,000+ </span>New Cars Ready for You</h3>
    <p className="mt-4 max-w-md mx-auto md:mx-0">
      Find the car that fits your dreams and budget—quality and value, ready to drive with confidence.
    </p>
    
    <Link href="/carcollection">
  <button className="mt-8 px-2 py-2 rounded-sm bg-red-800 transition-all duration-300 ease-in-out transform hover:bg-red-400 hover:text-black hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-red-400 focus:outline-none">
    Explore Our Collection
  </button><br/>
</Link>
    <Link href="/contact">
  <button className="mt-8 px-2 py-2 rounded-sm bg-red-800 transition-all duration-300 ease-in-out transform hover:bg-red-400 hover:text-black hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-red-400 focus:outline-none">
    Find Us
  </button>
</Link>
    
  </div>
     <Image src={bgcar} height={150} width={200} alt="car image" className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2" /> 
  
</section>


<section className="h-auto bg-white flex flex-col text-black px-4 md:px-8 lg:px-16">
  <div  className=" bg-gradient-to-b from-black to-red-500 bg-clip-text text-transparent font-bold flex justify-center mt-10 mb-5  text-4xl md:text-5xl text-center">
    Discover Our Cars
  </div>

  <div className="flex justify-center mb-5 px-4">
    <p className="text-center font-semibold max-w-md mx-auto">
      Whether you're starting your search or ready to choose, we’re here to help. Explore our cars and see why so many trust us with their automotive needs.
    </p>
  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mx-4">
  <Image src={collection1} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110" /> 
  <Image src={collection01} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110 "/> 
  <Image src={collection02} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110" /> 
  <Image src={collection06} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110" /> 
  <Image src={collection08} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110" /> 
  <Image src={collection10} height={150} width={200} alt="car image" className="rounded-lg w-full transition-transform duration-300 transform hover:scale-110" /> 
</div>

</section>


<section className="h-auto bg-white flex flex-col text-black py-10 px-4 md:px-8 lg:px-16 mb-40">
  <div className=" bg-gradient-to-b from-black to-red-500 bg-clip-text text-transparent font-bold flex justify-center mt-10 mb-5  text-4xl md:text-5xl text-center">
    Why Choose FleetForge<span className="font-extrabold text-4xl">?</span>
  </div>
  <div className="flex justify-center text-xl font-semibold mb-8 mt-2 text-center">
    With a focus on quality, transparency, and customer satisfaction, we strive to make car buying a joyful, hassle-free experience.
  </div>

   <div className="flex flex-col md:flex-row justify-between gap-8">
    
      <div className="flex flex-col items-center md:flex-row gap-4 mb-5 mx-4 w-full md:w-1/3 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
    <Image src={pay} height={100} width={200} alt="car image" className="rounded-lg shadow-lg w-full md:w-1/2" />
    <p className="text-center md:text-left text-base font-thin">
      Our flexible, buyer-friendly payment options make it easy to drive your ideal car with confidence and convenience.
    </p>
  </div>

    <div className="flex flex-col items-center md:flex-row gap-4 mb-5 mx-4 w-full md:w-1/3 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
      <Image src={fastdelivery} height={100} width={200} alt="car image" className="rounded-lg shadow-lg w-full md:w-1/2" />
      <p className="text-center md:text-left text-base font-thin">
        We provide fast, secure vehicle delivery worldwide, ensuring your car arrives safely, wherever you are.
      </p>
    </div>

    <div className="flex flex-col items-center md:flex-row gap-4 mb-5 mx-4 w-full md:w-1/3 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
      <Image src={costomer} height={100} width={200} alt="car image" className="rounded-lg shadow-lg w-full md:w-1/2" />
      <p className="text-center md:text-left text-base font-thin">
        Customer satisfaction is our top priority, and we’re committed to delivering an exceptional experience with every purchase.
      </p>
    </div>
  </div>
</section>

      </main>
      
      
    </>
  );
}
