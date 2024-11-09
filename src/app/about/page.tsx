
import Image from "next/image";
import mission1 from"../../../image/mission1.jpg"
import customercare1 from"../../../image/customercare1.png"
import service1 from"../../../image/service1.jpg"


export default function About() {
  return (
     <>
     <main className="mx-auto  p-4">
    <section
      className="flex  flex-col items-center justify-center  text-center  h-screen bg-gradient-to-t from-gray-200 to-gray-800 ">
      
<div className="max-w-lg mt-20 mb-40 text-white mx-auto p-8">
  <h1 className="text-white text-3xl underline decoration-white font-bold animate-pulse">
    Get to Know Us
  </h1>
  
  <h2 className="text-5xl leading-18 tracking-wide bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent font-extrabold animate-pulse">
    Driven by Passion, Designed for You
  </h2>
  <p className="text-lg bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mt-7 animate-pulse">
    Your journey to the perfect car begins with us. From quality to customer care, we bring unmatched service to match you with the ideal car.
  </p>
</div>



        

    </section>
    <div className="bg-white p-6 rounded-lg shadow-lg  flex flex-col md:flex-row items-center">
          <Image
            src={mission1}
            alt="customer care & Support"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          {/* our mission */}
          <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold text-grey-600">Our Mission</h2>
            <p className="text-gray-700 mt-2">
            We believe that finding the right car is more than just a purchase – it’s a path to freedom, 
          adventure, and self-expression. Our mission is to bridge the gap between dreams and reality, 
          putting our expertise to work to match you with a car that’s a true reflection of you.
    </p>
        
          </div>
        </div>
{/* our services */}
        <div className="bg-white p-6 rounded-lg shadow-lg  flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold">Our services</h2>
            <p className="text-gray-700 mt-2">
            We provide flexible leasing, easy payment plans, customizations to match your style, and complete maintenance to keep your car in top condition. From start to finish, our services ensure a smooth, personalized driving experience.



    </p>
        
          </div>
          <Image
            src={service1}
            alt="customer care & Support"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
         
        </div>

{/* customer care */}
        <div className="bg-white p-6 rounded-lg shadow-lg  flex flex-col md:flex-row items-center">
        <Image
            src={customercare1}
            alt="customer care & Support"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
        <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold">Customer-First Approach</h2>
            <p className="text-gray-700 mt-2">
            
          We listen, understand, and prioritize your needs, curating a range of vehicles with you in mind.
          From browsing to buying, we’re here to support you with insights, guidance, and an unforgettable experience.


    </p>
        
          </div>


        </div>
  </main>
    </>
  );
}

