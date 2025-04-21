import Image from 'next/image';

const SoldCard = ({ 
  name, 
  email, 
  profileImage, 
  tshirtImage, 
  price 
}) => {
  return (
    <div>
            <div className="min-w-[308px] mx-auto rounded-2xl shadow-xl  overflow-hidden relative bg-cover bg-no-repeat bg-center" style={{
  backgroundImage: "url('/card.png')",
  
  
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
               <h3 className="font-[Apex-Mk2]  text-[#2B2B2B] text-lg  uppercase">{name}</h3>
               <p className="text-[#6B6B6B] font-roboto text-xs">{email}</p>
             </div>
           </div>

      {/* T-shirt Image Section */}
      <div className="relative aspect-square rounded px-4 pb-4">
        <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-gray-100">
          <Image
            src={tshirtImage}
            alt="T-Shirt Design"
            layout="fill"
            className="object-cover opacity-[0.5] "
          />

          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
      <button className=" text-[#fff] w-24 h-[37px] rounded-lg   font-montserrat uppercase font-semibold border-[2.7px] border-[#FDFDFD26] "
      style={{
        background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
      }}
    > 
        Sold
      </button>
    </div>
          <div className="absolute bottom-4 left-2 right-2 flex justify-between">
            <button className=" text-[#fff] opacity-[0.6] px-4 rounded-lg text-xs   font-medium font-roboto "
             style={{
              background: "linear-gradient(318deg, #FD0000 26.88%, #FF9292 105.85%)",
            }}>
              Buy 
            </button>
            
            <div className="flex items-center gap-1 bg-[#fff]  px-3 py-3 rounded-lg   opacity-[0.6]">
              <span className="font-semibold text-[#808080]">Price:</span>
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
                <span className="text-xs  text-[#808080]">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SoldCard;