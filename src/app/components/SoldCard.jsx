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
            <div className="min-w-[308px] mx-auto rounded-2xl shadow-md overflow-hidden relative bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/card.png')" }}>

      {/* Profile Section */}
      <div className="flex justify-start gap-4 items-center p-6 pb-4">
        <div className="relative w-14 h-14 shrink-0">
          <Image
            src={profileImage}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-800 text-lg leading-tight">{name}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>

      {/* T-shirt Image Section */}
      <div className="relative aspect-square rounded px-4 pb-4">
        <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-gray-100">
          <Image
            src={tshirtImage}
            alt="T-Shirt Design"
            layout="fill"
            className="object-cover"
          />

          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
      <button className="bg-red-600 text-white px-4 py-1 rounded-md  shadow-lg cursor-pointer">
        Sold
      </button>
    </div>
          <div className="absolute bottom-4 left-2 right-2 flex justify-between">
            <button className="bg-gradient-to-r from-[#FF9292] to-[#FD0000] text-white px-6 py-3 rounded-lg text-xs  font-semibold cursor-pointer">
              Buy Now
            </button>
            
            <div className="flex items-center gap-1 bg-white backdrop-blur-sm px-3 py-3 rounded-lg shadow-sm cursor-pointer">
              <span className="font-semibold text-gray-800">price:</span>
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