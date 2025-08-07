
import React from "react";
import gallery1 from '../PortFolio/images/gallery1.jpg'
import gallery2 from "../PortFolio/images/gallery2.jpg";
import gallery3 from "../PortFolio/images/gallery3.jpg";
import gallery4 from "../PortFolio/images/gallery4.jpg";
import gallery5 from "../PortFolio/images/gallery5.jpg";
import gallery6 from "../PortFolio/images/gallery6.jpg";
import gallery7 from "../PortFolio/images/gallery7.jpg";
import gallery8 from "../PortFolio/images/gallery8.jpg";
import gallery9 from "../PortFolio/images/gallery9.jpg";
import gallery10 from "../PortFolio/images/gallery10.jpg";
import gallery11 from "../PortFolio/images/gallery11.jpg";
import gallery12 from "../PortFolio/images/gallery12.jpg";
import gallery13 from "../PortFolio/images/gallery13.jpg";
import gallery14 from "../PortFolio/images/gallery14.jpg";
import gallery15 from "../PortFolio/images/gallery15.jpg";
import gallery16 from "../PortFolio/images/gallery16.jpg";

import galleryvideo1 from "../PortFolio/images/galleryvideo1.mp4";
import galleryvideo2 from "../PortFolio/images/galleryvideo2.mp4";
import galleryvideo3 from "../PortFolio/images/galleryvideo3.mp4";
import galleryvideo5 from "../PortFolio/images/galleryvideo5.mp4";
import galleryvideo6 from "../PortFolio/images/galleryvideo6.mp4";
import galleryvideo7 from "../PortFolio/images/galleryvideo7.mp4";
import galleryvideo9 from "../PortFolio/images/galleryvideo9.mp4";
import galleryvideo10 from "../PortFolio/images/galleryvideo10.mp4";







const interiorDesignData = [
  {
    id: 1,
    image: gallery1,
    title: "Modern Pooja Room",
    alt: "Modern living room interior",
    description:
      "Modern Pooja Room designs blend spiritual elegance with contemporary aesthetics. These spaces are thoughtfully crafted using clean lines, soft lighting, and minimalistic decor to create a calm and sacred atmosphere. Often adorned with marble backdrops, wooden panels, or floating shelves, modern pooja rooms reflect both tradition and style. ..",
  },
  {
    id: 2,
    // image: gallery2,
    video: galleryvideo1,
    title: " Modern Home Design",
    description:
      "Modern Home Design emphasizes simplicity, functionality, and elegance. With clean architectural lines, open floor plans, and minimalistic aesthetics, modern homes create a sense of space and calm. Large windows invite natural light, while neutral tones and bold accents add depth and style. Materials like glass, steel, and concrete are often used to achieve a sleek and contemporary look. Smart home features and sustainable design elements are frequently integrated, ",
  },
  {
    id: 3,
    image: gallery3,
    title: "Urban Nest Interiors",
    description:
      "Urban Nest Interiors blends the warmth of home with the sophistication of modern city life. Designed for the contemporary dweller, this interior style emphasizes comfort, compact elegance, and functional design. Think cozy corners, multi-functional furniture, smart storage solutions, and a neutral color palette accented with bold urban textures like concrete, metal, and wood. ",
  },
  {
    id: 4,
    image: gallery4,
    title: "Luxury Corridor",
    description:
      "Luxury Corridor design is all about creating a grand first impression. This opulent passageway combines elegance and architectural finesse through high-end materials like Italian marble flooring, gold-accented light fixtures, textured wall panels, and designer ceiling lights. Statement art pieces, decorative mirrors, or sculptural elements add personality,",
  },
  {
    id: 5,
    // image: gallery5,
    video: galleryvideo3,
    title: "Elegant Dining Area",
    description:
      "Elegant Dining Area design blends comfort with sophistication, creating a warm yet refined space for shared meals and conversations. It features a luxurious dining table—often in wood, marble, or glass—paired with upholstered chairs that balance style and ergonomics. A statement chandelier or pendant light enhances ambiance, while soft wall tones and curated art elevate the mood.",
  },
  {
    id: 6,
    image: gallery6,
    title: "Wardrobe",
    description:
      "Wardrobe design is a perfect fusion of functionality and aesthetic appeal, offering smart storage solutions while enhancing the visual appeal of the bedroom. Modern wardrobes feature sleek sliding or hinged doors, built-in lighting, and modular compartments for clothes, accessories, and shoes. Materials like wood, glass, and laminates are used to match various interior styles. Whether it's a walk-in wardrobe or a compact fitted unit, the layout is optimized for accessibility and organization. Mirrors, minimalist handles, and neutral tones elevate the design, turning a simple storage space into a stylish and efficient element of home decor.",
  },
  {
    id: 7,
    image: gallery7,
    title: "Double Bed Room",
    description:
      "Double Bed Room designs offer the ideal blend of comfort, space, and elegance for couples or shared accommodations. Featuring a spacious double bed as the focal point, the room is styled with coordinated furniture like side tables, wardrobes, and soft lighting. Neutral color palettes with accents of texture, art, and natural light create a soothing and functional atmosphere. Smart storage solutions, cozy linens, and thoughtful decor bring a personalized charm.",
  },
  {
    id: 8,
    // image: gallery8,
    video: galleryvideo6,
    title: "Wall Design",
    description:
      "Wall Design is the art of transforming plain walls into expressive visual statements. From textured paint finishes and 3D wall panels to wallpapers, wooden cladding, or artistic murals—wall design plays a crucial role in defining a space’s mood. Modern wall trends incorporate elements like geometric patterns, metallic accents, or minimalist tones to enhance aesthetics. Accent walls, vertical gardens, or LED-lit panels can turn a boring surface into a dynamic focal point. ",
  },
  {
    id: 9,
    image: gallery9,
    title: "Luxury Kitchen",
    description:
      "Luxury Kitchen blends high-end aesthetics with top-tier functionality. Featuring premium materials like marble countertops, modular cabinetry, smart appliances, and ambient lighting, it redefines everyday cooking into a refined experience. A luxury kitchen emphasizes space optimization, elegant finishes, and seamless designs. Whether it’s an open-plan layout or an island centerpiece, every element is crafted to offer comfort, convenience, and class — making the kitchen not just a workspace, but the heart of a luxurious home.",
  },
  {
    id: 10,
    image: gallery10,
    title: "Pooja Room",
    description:
      "A spiritual and peaceful pooja room with traditional wooden carvings and ambient lighting Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam quae, nostrum blanditiis et molestias sunt accusantium enim iste earum consectetur, sapiente impedit sed vero voluptatibus officiis, temporibus vitae eaque quia provident reprehenderit repellat quam vel? Perspiciatis cumque in minima..",
  },
  {
    id: 11,
    // image: gallery11,
    video: galleryvideo7,
    title: "Stair Case",
    description:
      "Stair Case design in modern homes is more than just functional — it’s a statement piece. With sleek railings, floating steps, and innovative use of materials like glass, wood, or steel, the staircase becomes an architectural highlight. Ambient lighting and thoughtful detailing enhance its elegance. Whether spiral, straight, or cantilevered, a well-designed staircase adds vertical beauty, connects spaces seamlessly, and reflects the overall style and sophistication of the interior.",
  },
  {
    id: 12,
    image: gallery12,
    title: "Guest Room",
    description:
      "Guest Room interiors should evoke comfort, elegance, and warmth. A soothing color palette, cozy bedding, and functional furniture ensure a welcoming atmosphere for visitors. Thoughtfully placed lighting, stylish décor accents, and smart storage elevate the experience. Whether it's a minimal modern look or a blend of traditional aesthetics, a well-designed guest room provides a luxurious stay while making guests feel right at home.",
  },
  {
    id: 13,
    image: gallery13,
    title: "Kides Room",
    description:
      "Kids Room design blends creativity, comfort, and functionality. Vibrant colors, playful wall art, and themed décor ignite imagination and joy. Smart storage solutions keep toys and books organized, while safe furniture ensures a child-friendly environment. Whether it's a dreamy princess space or an adventurous superhero zone, a well-designed kids room supports learning, fun, and restful sleep — creating a world where children can grow, explore, and express themselves freely.",
  },
  {
    id: 14,
    // image: gallery14,
    video: galleryvideo9,
    title: "Behind the Scenes: The Making of a Dream Home Interior",
    description:
      "Crafting a dream home interior is a journey of imagination, design precision, and emotional connection. It begins with understanding the lifestyle and personality of the homeowner — their needs, preferences, and aspirations. Every detail matters — from selecting the perfect color palette to choosing materials that balance luxury with comfort. Designers work closely with architects, craftsmen, and vendors to bring the vision to life. Mood boards, 3D renderings, and on-site visits shape the space with purpose and harmony.",
  },
  {
    id: 15,
    image: gallery15,
    title: "The Minimal Mood",
    description:
      "Simplicity meets sophistication in The Minimal Mood. This design philosophy embraces clean lines, open spaces, and a calming color palette to create an atmosphere of clarity and peace. Each element in the room serves a purpose — there is no clutter, only intentional design. Natural light, neutral tones, and sleek furniture come together to reflect a serene and modern lifestyle. This style is not about lacking; it’s about refining. By focusing on “less is more,” The Minimal Mood offers a timeless, functional, and elegant space where the mind can breathe and beauty lies in subtlety.",
  },
];
export default interiorDesignData;