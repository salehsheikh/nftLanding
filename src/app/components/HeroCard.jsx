import Image from 'next/image';

const HeroCard = ({ 
  name, 
  email, 
  profileImage, 
  tshirtImage, 
  price 
}) => {
  return (
    <div>
  <div className="min-w-[308px] mx-auto rounded-2xl  drop-shadow-lg  overflow-hidden relative bg-cover  bg-no-repeat bg-center  backdrop-blur-xl  " style={{
  backgroundImage: "url('/card.png')"
  ,
}}>
      {/* Profile Section */}
      <div className="flex justify-start gap-4 items-center p-6 pb-4">
        <div className="relative w-13.5 h-13.5 shrink-0">
          <Image
            src={profileImage}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-[Apex_Mk2]  text-[#2B2B2B] text-lg uppercase ">{name}</h3>
          <p className="text-[#6B6B6B] font-roboto text-xs font-light">{email}</p>
        </div>
      </div>

      {/* T-shirt Image Section */}
      <div className="relative aspect-square px-4 pb-4">
        <div className="relative h-full w-full rounded-[14px]   overflow-hidden ">
          <Image
            src={tshirtImage}
            alt="T-Shirt Design"
            layout="fill"
            className="object-cover"
          />

          {/* Overlay Buttons */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between">
            <button className=" text-white w-14 h-9 flex items-center justify-center rounded-lg text-xs font-roboto font-medium cursor-pointer shrink-0"
             style={{
              background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
            }}>
              Buy 
            </button>
            
            <div className="flex items-center justify-center gap-1 bg-white  w-[123px] h-[36px] rounded-[9px] shadow-sm shrink-0 ">
              <span className="font-semibold text-[#2B2B2B] capitalize">price:</span>
              <div className="flex items-center gap-1.5">
                <div className="bg-black rounded-full p-1.5 w-6 h-6 flex items-center justify-center">
                  <div className="relative w-4 h-4">
                    <Image
                      src="/cardicon.png"
                      alt="Cart"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-xs text-[#808080]">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroCard;