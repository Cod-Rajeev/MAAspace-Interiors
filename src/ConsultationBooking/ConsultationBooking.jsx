import { useLocation } from 'react-router-dom';
import Form from '../Form';
import { useEffect } from 'react';


const ConsultationBooking = () => {
   const location = useLocation();

    const title1 = "Consultation Booking",
      title2 = "Design Consultation",
      title3 = "Expert Consultation",
      title4 = "Personalized Advice",
      data1 = "01",
      data2 = "02",
      data3 = "03",
      data4 = "04",
      description1 =
        "Schedule a consultation with our experts to discuss your design needs and get personalized advice.",
      description2 =
        "Book a design consultation to explore innovative solutions tailored to your project requirements.",
      description3 =
        "Get expert insights and recommendations to enhance your design project and achieve requirements your goals.",
      description4 =
        "Receive personalized advice from our design professionals to elevate your  requirements to the next.";

            
   useEffect(() => {
     if (location.hash) {
       const section = document.querySelector(location.hash);
       if (section) {
         section.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location]);

  return (
    <>
      <div className="w-full bg-gray-700 p-10">
        <section className="max-w-7xl w-full text-center pb-10  cormorant-garamond-thin">
          <h1 className="text-3xl md:text-5xl text-white cormorant-garamond-bold uppercase">
            Our Design Process
          </h1>
          <p className="text-gray-100 max-w-2xl mx-auto text-2xl md:text-xl">
            A structured approach to transforming your vision into reality
          </p>
        </section>

        <div className="px-0 md:px-20">
          <div className="min-h-20 justify-center text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="m-4 flex flex-col items-center p-8 justify-center text-center bg-orange-50 rounded-2xl shadow-md overflow-hidden max-w-64 transition transform hover:scale-105">
              <h1 className="text-4xl flex flex-col items-center p-8 justify-center text-center hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 font-bold text-black">
                {data1}
              </h1>
              <div className="">
                <h3 className="text-xl mt-5 font-bold text-black">{title1}</h3>
                <p className="text-base   text-gray-500 mt-2">{description1}</p>
              </div>
            </div>

            <div className="m-4 flex flex-col items-center p-8 justify-center text-center bg-orange-50 rounded-2xl shadow-md overflow-hidden max-w-64 transition transform hover:scale-105">
              <h1 className="text-4xl flex flex-col items-center p-8 justify-center text-center hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 font-bold text-black">
                {data2}
              </h1>
              <div className="">
                <h3 className="text-xl mt-5 font-bold text-black">{title2}</h3>
                <p className="text-base   text-gray-500 mt-2">{description2}</p>
              </div>
            </div>

            <div className="m-4 flex flex-col items-center p-8 justify-center text-center bg-orange-50 rounded-2xl shadow-md overflow-hidden max-w-64 transition transform hover:scale-105">
              <h1 className="text-4xl flex flex-col items-center p-8 justify-center text-center hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 font-bold text-black">
                {data3}
              </h1>
              <div className="">
                <h3 className="text-xl mt-5 font-bold text-black">{title3}</h3>
                <p className="text-base   text-gray-500 mt-2">{description3}</p>
              </div>
            </div>

            <div className="m-4 flex flex-col items-center p-8 justify-center text-center bg-orange-50 rounded-2xl shadow-md overflow-hidden max-w-64 transition transform hover:scale-105">
              <h1 className="text-4xl flex flex-col items-center p-8 justify-center text-center hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 font-bold text-black">
                {data4}
              </h1>
              <div className="">
                <h3 className="text-xl mt-5 font-bold text-black">{title4}</h3>
                <p className="text-base   text-gray-500 mt-2">{description4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form />
    </>
  );
}

export default ConsultationBooking