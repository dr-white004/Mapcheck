// import message from '../assets/alarm.svg'
// import alarm from '../assets/alarm.svg'
// import hum from '../assets/hum.svg'
// import search from '../assets/search.svg'



// export default function Header(){
//     return (
//         <div className="flex justify-between items-center p-4  bg-white border-b border-gray-300">
//          <div>
//             <input 
            
//             type="text"
//              />
//          </div>
//         <div>
//         <img src={alarm} alt="Dashboard" width="18" height="18" />
//         <img src={message} alt="Dashboard" width="18" height="18" />
//         <img src={hum} alt="Dashboard" width="18" height="18" />
//         </div>
    
//         </div>
//     )
//     }

// import message from '../assets/alarm.svg';
// import alarm from '../assets/alarm.svg';
// import hum from '../assets/hum.svg';
// import search from '../assets/search.svg';

// export default function Header() {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
//       {/* Left Section with Search Bar */}
//       <div className="flex items-center w-1/2">
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Search here"
//             className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <img
//             src={search}
//             alt="Search Icon"
//             className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
//           />
//         </div>
//       </div>

//       {/* Right Section with Icons */}
//       <div className="flex items-center space-x-4">
//         <img src={alarm} alt="Alarm" width="18" height="18" />
//         <img src={message} alt="Message" width="18" height="18" />
//         <img src={hum} alt="Hum" width="18" height="18" />
//       </div>
//     </div>
//   );
// }



import message from '../assets/alarm.svg';
import alarm from '../assets/alarm.svg';
import hum from '../assets/hum.svg';
import search from '../assets/search.svg';
import backIcon from '../assets/arrowup.svg';

export default function Header() {
  return (
    <div className="flex items-center p-1 bg-white border-b border-gray-300">

        <div className="flex items-center ml-6">
            <img src={backIcon} alt="Back Icon" className="w-5 h-5 mr-2" />
            <span className="text-gray-700 font-medium">Back</span>
        </div>

      {/* Search and Icons Section */}
      <div className="flex items-center justify-end w-full gap-x-6">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src={search}
            alt="Search Icon"
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center mr-4 space-x-4">
          <img src={alarm} alt="Alarm" width="18" height="18" />
          <img src={message} alt="Message" width="18" height="18" />
          <img src={hum} alt="Hum" width="18" height="18" />
        </div>
      </div>

      {/* Back Section */}
      
    </div>
  );
}
