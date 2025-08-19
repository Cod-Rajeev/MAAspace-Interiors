import React from "react";
import Blog1 from "../Blogs/blog1.jpg"

const Blog = () => {
  return (
    <main className="mx-auto items-center px-12 py-2">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-5/6 mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <img
              src={Blog1}
              alt="Modern Home Interior Design"
              className="w-full h-[500px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/800x400?text=Interior+Design";
              }}
            />

            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-gray-500 text-sm">August 2, 2025</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Elegant 2BHK Interior Design Ideas for Urban Living
              </h2>
              <p className="text-gray-600 mb-4 text-xl font-bold">
                Discover the latest trends in 2BHK home interior design. From
                modern living rooms to space-saving modular kitchens, transform
                your small space into a stylish haven with expert tips and
                creative ideas.
              </p>

              <div className="mt-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <b>Design That Reflects Your Personality</b>
                  <br />
                  Your home should feel like *you*. With proper layout, color
                  palettes, and lighting, even a small 2BHK can look luxurious.
                </p>
                <br />
                <p>
                  <b>Key Zones to Focus:</b>
                  <br />
                  <b>✅ Living Room:</b> Use neutral walls, wooden textures, and
                  a comfy sectional sofa.
                  <br />
                  <b>✅ Modular Kitchen:</b> Go for L-shaped layout with pastel
                  overhead cabinets and hidden storage.
                  <br />
                  <b>✅ Bedrooms:</b> Add a calming accent wall, sheer curtains,
                  and smart wardrobes.
                  <br />
                  <b>✅ Balcony:</b> Hang plants, cozy chairs, and warm fairy
                  lights for a chill evening vibe.
                </p>
                <br />
                <p>
                  <b>Transforming Spaces: Interior Design from 1BHK to 5BHK :</b>
                  Interior design plays a crucial role in turning a house into a
                  home, whether it’s a compact 1BHK or a spacious 5BHK. In a
                  1BHK, every inch counts—designers focus on smart storage,
                  multifunctional furniture, and open layouts to create a sense
                  of space and comfort. Moving to a 2BHK or 3BHK, the design
                  becomes more versatile. Homeowners can experiment with
                  separate themes for bedrooms, add cozy reading corners, or
                  create a stylish dining space. As we move to 4BHK and 5BHK
                  homes, luxury and personalization become key elements. These
                  larger spaces allow for dedicated rooms such as a home office,
                  entertainment lounge, or even a home gym. Interior designers
                  emphasize elegance through premium materials, mood lighting,
                  and detailed finishes. Spacious balconies, walk-in wardrobes,
                  modular kitchens, and artistic decor further enhance the
                  living experience. From minimalist styles to lavish layouts,
                  interior design evolves with the size of the home—but the goal
                  remains the same: to create a beautiful, functional, and
                  personalized space. Whether small or large, every home
                  deserves a design that reflects the lifestyle, taste, and
                  dreams of those who live in it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
