import React from 'react'

const SixSection = () => {
    const user = {
      description1:
        "My home renovation was beautifully handled by the MAAspace Interiors team. They brought amazing creativity and perfection to every detail. The furniture quality is outstanding and their timeline was impressive. I’m truly happy with the results and would highly recommend them for premium interior solutions !",
      name1: "Mr. Rahul Sharma",
      imageUrl1:
        "https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg",

      description2:
        "The team at MAAspace Interiors transformed our space beyond expectations. Their professionalism, smart space planning, and custom furniture ideas were top-notch. We had a wonderful experience and would gladly recommend them to anyone who values design excellence and quality workmanship. Thank you, team!",
      name2: "Mrs. Neha Mehra",
      imageUrl2: "https://i.imgur.com/yXOvdOSs.jpg",

      description3:
        "I hired MAAspace Interiors for my apartment interior and they exceeded all my expectations. From color coordination to furniture design, everything was handled with care and precision. The staff was cooperative and full of brilliant ideas. I’m extremely satisfied with their work and would surely recommend them to others.",
      name3: "Mr. Arvind Khurana",
      imageUrl3:
        "https://cdn.pixabay.com/photo/2023/06/16/15/10/man-8068201_1280.jpg",
      imageSize: 90,
    };
   
  return (
    <div class="bg-neutral-400 min-h-screen flex flex-col items-center py-2">
      <section class="max-w-7xl w-full text-center p-5 ">
        <h1 class="text-3xl md:text-5xl cormorant-garamond-bold uppercase">
          Testimonials
        </h1>
      </section>

      <section class="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <article class="hover:scale-[1.04] card bg-white rounded-2xl shadow-2xl transform-gpu duration-300 flex flex-col">
          <div class="p-6 text-left flex flex-col grow">
            <p class="text-neutral-700 poppins-regular text-base grow text-justify">
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
            <p class="text-neutral-700 poppins-regular text-base grow text-justify">
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
            <p class="text-neutral-700 poppins-regular text-base grow text-justify">
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