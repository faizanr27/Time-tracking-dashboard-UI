import work from '../assets/icon-work.svg'
import exercise from '../assets/icon-exercise.svg'
import play from '../assets/icon-play.svg'
import selfcare from '../assets/icon-self-care.svg'
import social from '../assets/icon-social.svg'
import study from '../assets/icon-study.svg'
import ellipsis from '../assets/icon-ellipsis.svg'

const ActivityCard = () => {
    const card = [
        {
          title: "Work",
          hours: "32hrs",
          lastWeekHours: "36hrs",
          icon: work,
          colorClass: "bg-cardindi-orange"
        },
        {
          title: "Exercise",
          hours: "4hrs",
          lastWeekHours: "5hrs",
          icon: exercise,
          colorClass: "bg-cardindi-green"
        },
        {
          title: "Play",
          hours: "10hrs",
          lastWeekHours: "8hrs",
          icon: play,
          colorClass: "bg-cardindi-blue"
        },
        {
          title: "Social",
          hours: "5hrs",
          lastWeekHours: "10hrs",
          icon: social,
          colorClass: "bg-cardindi-purple"
        },
        {
          title: "Study",
          hours: "4hrs",
          lastWeekHours: "7hrs",
          icon: study,
          colorClass: "bg-cardindi-pink"
        },
        {
          title: "Self Care",
          hours: "2hrs",
          lastWeekHours: "2hrs",
          icon: selfcare,
          colorClass: "bg-cardindi-yellow"
        }
      ];
    
  return (
    card.map((e, index) => (   
    // <div key={index} className={`z-0 flex min-h-[128px] md:max-h-[190px] md:min-w-[190px] flex-col overflow-hidden rounded-2xl ${e.colorClass} md:max-h-min`}>
    //   <img className="h-10 w-10 self-end" src={e.icon} alt={e.title} />
    //   <div className="z-20 flex h-[95%] w-full flex-row justify-between rounded-2xl bg-cardcolor p-4 text-white hover:bg-cardhover sm:h-4/5 ">
    //     <div className="flex flex-col justify-between gap-2 md:gap-0">
    //       <h6 className="text-sm font-medium">{e.title}</h6>
    //       <span className="text-4xl font-thin">{e.hours}</span>
    //       <span className="text-xs text-[#8C8EBE]">Last Week - {e.lastWeekHours}</span>
    //     </div>
    //     <div>
    //       <img className='cursor-pointer' src={ellipsis} alt="More" />
    //     </div>
    //   </div>
    // </div>
    <div key={index} className={`mb-4 sm:mb-0 z-0 flex min-h-max sm:max-h-[160px] md:min-w-[190px] flex-col rounded-2xl ${e.colorClass} `}>
  <div className={`flex-grow  rounded-t-2xl pr-2`}>
    <img className="h-10 w-10 ml-auto" src={e.icon} alt={e.title} />
  </div>
  <div className="z-20 flex  min-h-[90%] w-full flex-row justify-between rounded-2xl p-4 text-white bg-cardcolor hover:bg-cardhover">
    <div className="flex flex-col justify-between gap-2 md:gap-0">
      <h6 className="text-sm font-medium">{e.title}</h6>
      <span className="text-4xl font-thin">{e.hours}</span>
      <span className="hidden sm:block text-xs text-[#8C8EBE]">Last Week - {e.lastWeekHours}</span>
    </div>
    <div className='flex flex-col justify-between'>
      <img className='cursor-pointer h-1 w-5 self-end' src={ellipsis} alt="More" />
      <span className="sm:hidden text-xs text-[#8C8EBE]">Last Week - {e.lastWeekHours}</span>
    </div>
  </div>
</div>
    ))

  );
};

export default ActivityCard;
