import Image from "next/image";
import HeroCard from "./HeroCard";

const AnimatedCards = () => {
  const cards = [
    {
      name: "John Doe",
      email: "john@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card2.png",
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
      tshirtImage: "/card1.png",
      price: 39.99,
    },
    {
      name: "Sheikh",
      email: "sheikh@example.com",
      profileImage: "/profile.png",
      tshirtImage: "/card1.png",
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
    "rotate-x-45  -translate-x-65 z-10",
    "rotate-x-30 -translate-x-32 z-20",
    "rotate-[0deg] z-100",
    "rotate-x-30  translate-x-32 z-20",
    "rotate-x-45 translate-x-65 z-10",
  ];

  return (
    <div className="bg-[#FFF9F9] radial-bg py-10 relative ">
      {/* For medium and up screens - layered layout */}
      <div className="hidden lg:flex min-h-[500px] items-center justify-center relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute ${cardTransforms[index % cardTransforms.length]} transition-transform duration-500`}
          >
            <HeroCard {...card} />
          </div>
        ))}
      </div>

      {/* For small screens - scrollable horizontal stack */}
      <div className="flex lg:hidden gap-4 overflow-x-auto px-4 snap-x">
        {cards.map((card, index) => (
          <div key={index} className="min-w-[280px] snap-center">
            <HeroCard {...card} />
          </div>
        ))}
      </div>

      {/* Decorative Frame */}
      <div className="relative w-full mt-12 lg:-translate-y-56 z-0">
        <Image
          src="/Frame 2147223672.svg"
          alt="Background Frame"
          layout="responsive"
          width={1200}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedCards;
