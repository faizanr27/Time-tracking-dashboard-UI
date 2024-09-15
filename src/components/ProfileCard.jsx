import pic from '../assets/image-jeremy.png'

const ProfileCard = () => {
  return (
    <div className="row-span-2 min-h-[128px] rounded-2xl bg-cardcolor sm:max-h-min">
      <div className="flex h-2/3 flex-row gap-4 rounded-2xl bg-card1 p-4 text-[#FBFCFF] sm:h-2/3 sm:flex-col sm:gap-2">
        <img className="h-14 w-14 rounded-full outline" src={pic} alt="Profile" />
        <div className="max-w-44 text-pretty">
          <h6 className="text-sm font-thin text-[#B8B2FF]">Report for</h6>
          <h1 className="text-xl font-medium sm:text-4xl">Jeremy Robson</h1>
        </div>
      </div>
      <div className="p-4">
        <ul>
          <li className="mb-5 flex flex-row justify-between gap-1 text-txcolor sm:flex-col">
            <a className="hover:text-white" href="#">Daily</a>
            <a className="hover:text-white" href="#">Weekly</a>
            <a className="hover:text-white" href="#">Monthly</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
