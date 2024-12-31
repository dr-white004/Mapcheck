
import Header from "./header";
import term from '../assets/terms.svg'
import { Link  } from 'react-router-dom';
import tower from '../assets/tower.svg'
import side from '../assets/side.svg'
import arrow from '../assets/arrowdown.svg'

export default function Quote() {
  return (
    <div className="flex flex-col">
            <Header className="w-full" />

            <div className="flex flex-col gap-4 p-4 ">
              <div className="flex justify-between items-start ">
                <div>
                  <h3>
                    Quote details
                  </h3>
                  <span className="text-xs text-gray-500">
                      created on Wednesday, 12th June 2022, 08:00 AM
                    </span>
                </div>   

                <div className="flex gap-4 items-start">
                <Link to="/respond">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
                  Respond
                </button>
                </Link>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300">
                      Reject
                    </button>
                  </div>         
              </div>


       <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <div className="flex justify-between">
              {/* First Group */}
              <div className="flex flex-col">
                <h4 className="text-gray-700 mb-2">Quote information</h4>
                <h4 className="text-gray-700 mb-2">Title</h4>
                <h4 className="text-gray-700 mb-2">RFQ no</h4>
                <h4 className="text-gray-700 mb-2">Requestor</h4>
                <h4 className="text-gray-700 mb-2">Status</h4>
                <h4 className="text-gray-700 mb-2">Department</h4>
              </div>

              {/* Second Group */}
              <div className="flex flex-col">
                <h4 className="text-gray-700 mb-2 py-3"></h4>
                <h4 className="text-gray-700 mb-2">Request equipments</h4>
                <h4 className="text-gray-700 mb-2">RQ #01234</h4>
                <h4 className="text-gray-700 mb-2 flex items-center space-x-2">
                  <b className="flex items-center justify-center w-6 h-6 bg-orange-500 text-black text-xs font-bold rounded-full">JD</b>
                  <span>Jane Doe</span>
                  <span className="text-sm text-gray-500">.Head nurse, pediatrics</span>
                </h4>
                <h4 className="text-orange-700 mb-2 bg-orange-100 px-2 py-1 inline-block rounded-full">
                  Awaiting
                </h4>
                <h4 className="text-gray-700 mb-2">Maternity</h4>
              </div>

              {/* Third Group */}
              <div className="flex flex-col self-start">
                <h4 className="text-gray-700 mb-6">Expected delivery date</h4>

                <div className="border border-gray-300 rounded-md p-2 flex flex-col">
                  <div className="text-gray-500 flex mb-2">
                    <img src={tower} alt="tower" />
                    <span className="text-sm text-gray-500">Client</span>
                  </div>
                  <div className="flex item-ceenter">
                  <span className="flex items-center justify-center w-9 h-9 bg-orange-500 text-black  font-bold rounded-full">W</span>
                        <div className="flex flex-col item-center justify-center">
                          <span> <b className="text-xs m-0">Westland Hospital</b></span>
                         <span className="text-sm text-gray-500 m-0">clear street</span>
                        </div>
                  </div>
                </div>
              </div>
            </div>
         </div>

              
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
                <h3>items</h3>
                 <div className="overflow-x-auto border border-gray-300 rounded-md p-4">
                  <table className="table-auto border-collapse w-full">
                    <thead className="bg-white border-b-2">
                      <tr>
                        <th className="px-4 py-2 border-r text-left"></th>
                        <th className="px-4 py-2 text-left">Items</th>
                        <th className="px-4 py-2 text-left">Variants</th>
                        <th className="px-4 py-2 text-left">Quantity</th>
                        <th className="px-4 py-2 text-left">Price</th>
                        <th className="px-4 py-2 text-left">Amount</th>
                        <th className="px-4 py-2 text-left">Expected Delivery Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">
                          <input type="checkbox" />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={side} alt="item" className="mr-2" />
                            <div className="flex flex-col">
                              <span>Oxygen conc</span>
                              <span className="text-sm text-gray-500">#2b373</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">blue</td>
                        <td className="px-4 py-2">100 pieces</td>
                        <td className="px-4 py-2">$200</td>
                        <td className="px-4 py-2">$2000.00</td>
                        <td className="px-4 py-2">2024-01-15</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">
                          <input type="checkbox" />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={side} alt="item" className="mr-2" />
                            <div className="flex flex-col">
                              <span>mechanical ventilation</span>
                              <span className="text-sm text-gray-500">#2b373</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">nil</td>
                        <td className="px-4 py-2">40kg</td>
                        <td className="px-4 py-2">$350</td>
                        <td className="px-4 py-2">$2500.00</td>
                        <td className="px-4 py-2">2024-02-20</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">
                          <input type="checkbox" />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={side} alt="item" className="mr-2" />
                            <div className="flex flex-col">
                              <span>Patient monitor</span>
                              <span className="text-sm text-gray-500">#2b373</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">blue</td>
                        <td className="px-4 py-2">30 unit</td>
                        <td className="px-4 py-2">$200</td>
                        <td className="px-4 py-2">$1500</td>
                        <td className="px-4 py-2">2024-08-7</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">
                          <input type="checkbox" />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={side} alt="item" className="mr-2" />
                            <div className="flex flex-col">
                              <span>mechanical ventilation</span>
                              <span className="text-sm text-gray-500">#2b373</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">blue</td>
                        <td className="px-4 py-2">30 unit</td>
                        <td className="px-4 py-2">$300.00</td>
                        <td className="px-4 py-2">$1500.00</td>
                        <td className="px-4 py-2">2024-08-05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                     <div className="flex flex-col  items-end pr-32">
                        <div className="flex item center gap-4">
                           <h5 className="text-gray-500">Sub total</h5>
                           <span> 8000</span>
                        </div>
                        <div  className="flex item center gap-4">
                            <h5 className="text-gray-500">Total</h5>
                           <span>8750</span>
                        </div>
                     </div>
              </div>

                <div className="border border-gray-300 rounded-lg p-4 bg-white flex justify-between">
                  <div className="flex items-center">
                      <img src={term} alt="item" className="mr-2" />
                      <div className="flex flex-col">
                        <span>Terms and Attachment</span>
                        <span className="text-sm text-gray-500">Review payment and delivery time</span>
                      </div>
                  </div>
                  <img src={arrow} alt="" />
                </div>
              
            </div>
  
    </div>
  );
}

