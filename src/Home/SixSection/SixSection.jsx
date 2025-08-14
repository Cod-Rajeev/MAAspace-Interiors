import React from 'react'

const SixSection = () => {
    const user = {
      description1:
        "My home renovation was beautifully handled by the MAAspace Interiors team. They brought amazing creativity and perfection to every detail. The furniture quality is outstanding and their timeline was impressive. I’m truly happy with the results and would highly recommend them for premium interior solutions !",
      name1: "Mr. Rahul Sharma",
      imageUrl1:
        "https://media.istockphoto.com/id/1289899046/photo/sick-old-man-woke-up-in-the-middle-of-night-while-sleeping-due-to-fever-and-cough.jpg?s=2048x2048&w=is&k=20&c=lnG4jKAypIPivq8PdWjVfGhWB5PhYdqvXhSLyMq1nM8=",

      description2:
        "The team at MAAspace Interiors transformed our space beyond expectations. Their professionalism, smart space planning, and custom furniture ideas were top-notch. We had a wonderful experience and would gladly recommend them to anyone who values design excellence and quality workmanship. Thank you, team!",
      name2: "Mrs. Neha Mehra",
      imageUrl2:
        "https://plus.unsplash.com/premium_photo-1682089841647-458dd29dc0ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      description3:
        "I hired MAAspace Interiors for my apartment interior and they exceeded all my expectations. From color coordination to furniture design, everything was handled with care and precision. The staff was cooperative and full of brilliant ideas. I’m extremely satisfied with their work and would surely recommend them to others.",
      name3: "Mr. Arvind Khurana",
      imageUrl3:
        "https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageSize: 90,
    };
   
  return (
    <div class="bg-neutral-400 min-h-screen flex flex-col items-center py-2">
      <section class="max-w-7xl w-full text-center p-5 ">
        <h1 class="text-3xl md:text-5xl cormorant-garamond-bold uppercase">
          Testimonials
        </h1>
      </section>

      <section class="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* <!-- Card 1 --> */}
        <article class="hover:scale-[1.04] card bg-white rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description1}
            </p>
            <div className="text-xl poppins-semibold flex flex-col items-center  justify-center text-center">
              <h1>{user.name1}</h1>
              <img
                className="flex bg-black rounded-full mt-2"
                src={user.imageUrl1}
                alt={"Photo of " + user.name1}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                }}
              />
            </div>
          </div>
        </article>

        {/* <!-- Card 2 --> */}
        <article class="hover:scale-[1.04] card  rounded-2xl shadow-2xl   card bg-white transform-gpu duration-300 flex flex-col">
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description2}
            </p>

            <div className="text-xl poppins-semibold flex flex-col items-center mt-4 justify-center text-center">
              <h1>{user.name2}</h1>
              <img
                className="avatar rounded-full mt-2"
                src={user.imageUrl2}
                alt={"Photo of " + user.name1}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                }}
              />
            </div>
          </div>
        </article>

        {/* <!-- Card 3 --> */}
        <article class="hover:scale-[1.04] card bg-white   rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-900 poppins-regular text-base grow text-center">
              {user.description3}
            </p>

            <div className="text-xl poppins-semibold flex flex-col items-center mt-4 justify-center text-center">
              <h1>{user.name3}</h1>
              <img
                className="avatar rounded-full mt-2"
                src={user.imageUrl3}
                alt={"Photo of " + user.name1}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                }}
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SixSection