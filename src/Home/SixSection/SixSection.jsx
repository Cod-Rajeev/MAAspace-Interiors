import React from 'react'

const SixSection = () => {
    const user = {
      description1:
        "MAAspace Interiors transformed our home beautifully. Their professionalism, creativity, and attention to detail exceeded expectations. We are truly satisfied and highly recommend their excellent interior design services.",
      name1: "Dilip Ji Udaipur",
      imageUrl1:
        "https://media.istockphoto.com/id/1289899046/photo/sick-old-man-woke-up-in-the-middle-of-night-while-sleeping-due-to-fever-and-cough.jpg?s=2048x2048&w=is&k=20&c=lnG4jKAypIPivq8PdWjVfGhWB5PhYdqvXhSLyMq1nM8=",

      description2:
        "MAAspace Interiors designed our home exactly as we imagined. Their dedication, creativity, and finishing quality were outstanding. We are extremely happy and recommend them wholeheartedly.",
      name2: "⁠RK Mittal Keshavnagar Udaipur",
      imageUrl2:
        "https://plus.unsplash.com/premium_photo-1682089841647-458dd29dc0ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      description3:
        "MAAspace Interiors gave our home a modern yet elegant touch. Their team’s creativity, professionalism, and perfect execution impressed us greatly. We strongly recommend their services.",
      name3: "⁠Vikram singh ji Rathor Bhuwana",
      imageUrl3:
        "https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageSize: 90,
    };
   
  return (
    <div class="bg-neutral-400  flex flex-col items-center py-16">
      <section class="max-w-7xl w-full text-center p-5 ">
        <h1 class="text-3xl md:text-5xl cormorant-garamond-bold uppercase">
          Testimonials
        </h1>
      </section>

      <section class="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* <!-- Card 1 --> */}
        <article class="hover:scale-[1.04] card bg-white rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div className="text-xl poppins-semibold mt-5 flex flex-col items-center  justify-center text-center">
            <h1>{user.name1}</h1>
          </div>
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description1}
            </p>
          </div>
        </article>

        {/* <!-- Card 2 --> */}
        <article class="hover:scale-[1.04] card  rounded-2xl shadow-2xl   card bg-white transform-gpu duration-300 flex flex-col">
          <div className="text-xl poppins-semibold flex flex-col items-center mt-4 justify-center text-center">
            <h1>{user.name2}</h1>
          </div>
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description2}
            </p>
          </div>
        </article>

        {/* <!-- Card 3 --> */}
        <article class="hover:scale-[1.04] card bg-white   rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div className="text-xl poppins-semibold flex flex-col items-center mt-4 justify-center text-center">
            <h1>{user.name3}</h1>
          </div>
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description3}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SixSection