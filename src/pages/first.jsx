import { useState } from 'react';
import Quote from '../component/quote';
import { Link  } from 'react-router-dom';
import dash from '../assets/dashboard-alt-svgrepo-com.svg'
import map from  '../assets/map.svg'
import procure from '../assets/procure.svg'
import communicate from '../assets/communicate.svg'
import calender from '../assets/calender.svg'
import finance from '../assets/finance.svg'
import inventory from '../assets/inventory.svg'
import contract from '../assets/contract.svg'
import mark from '../assets/mark.svg'
import set from '../assets/set.svg'
import support from '../assets/support.svg'

import arrowup from '../assets/arrowup.svg'
import arrowdown from '../assets/arrowdown.svg'



export default function Home() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <main className="h-screen flex  sm:flex-col">
    
      <div className="flex flex-grow flex-col sm:flex-row">

      
        <div className="w-auto sm:w-auto md:w-auto h-full p-4 bg-[#F7F9FC] border-r border-gray-300 flex flex-row justify-between sm:flex-col">
          <div className="flex items-center p-8 pl-2">
          <img src={map} alt="Dashboard" width="170" height="170" />
          </div>
         <div>
          <div className="flex items-center p-2 gap-2">
          <img src={dash} alt="Dashboard" width="18" height="18" />
            <h5>Dashboard</h5>
          </div>
          <div className="flex items-center p-2 gap-2">
          <img src={inventory} alt="Dashboard" width="18" height="18" />
            <h5>Inventory</h5>
          </div>

          <div className="flex flex-col p-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2">
              <img src={procure} alt="Procurement" width="18" height="18" />
              <h5>Procurement</h5>
            </div>
            <img
              className="ml-2"
              src={isDropdownOpen ? arrowdown : arrowup}
              alt="Dropdown"
              width="15"
              height="15"
            />
          </div>
          {isDropdownOpen && (
            <div className="ml-6 mt-2 flex flex-col space-y-1">
              <Link to="/quotes" className="text-gray-700 hover:text-blue-500">
                Quotes
              </Link>
              <Link to="/orders" className="text-gray-700 hover:text-blue-500">
                Orders
              </Link>
            </div>
          )}
        </div>

          <div className="flex items-center p-2 gap-2">   
          <img src={finance} alt="Dashboard" width="18" height="18" />        
            <h5>Finance</h5>
          </div>
          <div className="flex items-center p-2 gap-2"> 
          <img src={communicate} alt="Dashboard" width="18" height="18" />          
            <h5>Communication</h5>
          </div>
          <div className="flex items-center p-2 gap-2">   
          <img src={calender} alt="Dashboard" width="18" height="18" />        
            <h5>Calender</h5>
          </div>
          <div className="flex items-center p-2 gap-2">   
          <img src={contract} alt="Dashboard" width="18" height="18" />        
            <h5>contract</h5>
          </div>
        </div> 

        <div className='mt-32'>
            <div className="flex items-center p-2 gap-2">   
              <img src={support} alt="Dashboard" width="12" height="12" />        
                <h5>support</h5>
              </div>
            <div className="flex items-center p-2 gap-2">   
                <img src={set} alt="Dashboard" width="12" height="12" />        
                <h5>settings</h5>
            </div>
        </div>
           
           <div className='mt-8 p-0'>
           <img src={mark} alt="Dashboard" width="190" height="190" />  
           </div>


        </div>
    

        <div className="flex-grow items-center ">
            <Quote />
          
        </div>
      </div>

    </main>
  );
}

