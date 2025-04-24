import Image from "next/image";
import HeroCard from "./HeroCard";

const AnimatedCards = () => {
  const cards = [
    {
      name: "John Doe",
      email: "john@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/trend5.png",
      price: 19.99,
    },
    {
      name: "Jusmab",
      email: "jusmab@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card1.png",
      price: 29.99,
    },
    {
      name: "center",
      email: "huzaifa@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/sold4.png",
      price: 39.99,
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/trend4.png",
      price: 49.99,
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card2.png",
      price: 49.99,
    },
  ];


  const cardTransforms = [
    "!rotate-x-45 z-10 -translate-x-90   animate-xShift ",
    "!rotate-x-30 z-20 -translate-x-48   animate-xShift",
    "!rotate-[0deg] z-30 ",
    "!rotate-x-30  z-20 translate-x-48 animate-xShift ",
    "!rotate-x-45 z-10 translate-x-90  animate-xShift",
    
  ];

  return (
    <div className="  relative">
            <div className="hidden lg:block absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] bg-[#FD0000] rounded-full blur-[250px] z-10 "></div>

      {/* For medium and up screens - layered layout */}
      <div className="hidden lg:flex min-h-[500px] items-center  mx-auto justify-center relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute ${cardTransforms[index % cardTransforms.length]} transition-transform duration-200`
          }
          >
            <HeroCard {...card} />
          </div>
        ))}
      </div>

      {/* For small screens - scrollable horizontal stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-24 md:mb-0 lg:hidden !gap-4 overflow-x-auto p-4 my-6 snap-x">
        {cards.map((card, index) => (
          <div key={index} className="min-w-[280px] snap-center">
            <HeroCard {...card} />
          </div>
        ))}
      </div>

      {/* Decorative Frame */}
      <div className="relative w-full  z-0  hidden md:block ">
        <Image
          src="/hands.png"
          alt="Background Frame"
          layout="responsive"
          width={1200}
          height={300}
          className="object-contain  xl:-mt-50 lg:-mt-36 mx-auto"
        />
      </div>
    </div>
  );
};

export default AnimatedCards;
