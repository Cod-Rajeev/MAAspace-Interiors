import React from 'react'

const SixSection = () => {
    const user = {
      description1:
        "MAAspace Interiors transformed our home beautifully. Their professionalism, creativity, and exceeded expectations. We are truly satisfied and highly recommend their interior design services.",
      name1: "Dilip Ji",
      add1: "Udaipur",

      description2:
        "MAAspace Interiors designed our home exactly as we imagined. Their dedication, creativity, and finishing quality were outstanding. We are extremely happy and recommend them wholeheartedly.",
      name2: "⁠RK Mittal",
      add2: "Keshavnagar Udaipur",

      description3:
        "MAAspace Interiors gave our home a modern yet elegant touch. Their team’s creativity, professionalism, and perfect execution impressed us greatly. We strongly recommend their services.",
      name3: "⁠Vikram singh ji Rathor",
      add3: "Bhuwana",
    };
   
  return (
    <div className="bg-neutral-400 flex flex-col items-center pb-16">
      <section className="max-w-7xl w-full text-center p-10 ">
        <h1 className="text-3xl md:text-5xl cormorant-garamond-bold uppercase">
          Testimonials
        </h1>
      </section>

      <section className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  px-7 md:px-0">
        {/* <!-- Card 1 --> */}
        <article className="hover:scale-[1.04] card bg-white rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div className="px-10 py-6  flex flex-col grow">
            <p className="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description1}
            </p>
          </div>
          <div className="text-xl poppins-semibold flex flex-col items-center  justify-center text-center">
            <h1>{user.name1}</h1>
            <h1 className=" pb-4 text-sm poppins-regular">{user.add1}</h1>
          </div>
        </article>

        {/* <!-- Card 2 --> */}
        <article className="hover:scale-[1.04] card  rounded-2xl shadow-2xl   card bg-white transform-gpu duration-300 flex flex-col">
          <div className="px-10 py-6  flex flex-col grow">
            <p className="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description2}
            </p>
          </div>
          <div className="text-xl poppins-semibold flex flex-col items-center  justify-center text-center">
            <h1>{user.name2}</h1>
            <h1 className=" pb-4 text-sm poppins-regular">{user.add2}</h1>
          </div>
        </article>

        {/* <!-- Card 3 --> */}
        <article className="hover:scale-[1.04] card bg-white   rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div className="px-10 py-6  flex flex-col grow">
            <p className="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description3}
            </p>
          </div>
          <div className="text-xl poppins-semibold flex flex-col items-center  justify-center text-center">
            <h1>{user.name3}</h1>
            <h1 className=" pb-4 text-sm poppins-regular">{user.add3}</h1>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SixSection