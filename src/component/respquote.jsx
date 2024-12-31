import React, { useState } from "react";
import Header from "./header";
import icon1 from "../assets/hum.svg";
import icon2 from "../assets/hum.svg";
import icon3 from "../assets/hum.svg";
import cloud from '../assets/cloud.svg'

export default function Respquote() {
  const [currentSection, setCurrentSection] = useState("Request Information");
  const [formData, setFormData] = useState({
    requestInfo: {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    termsAttachments: {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      file: null,
    },
  });

  const [tableData, setTableData] = useState([
    {
      items: "",
      variants: "",
      quantity: "",
      price: "",
      amount: "",
      expectedDeliveryDate: "",
    },
    {
      items: "",
      variants: "",
      quantity: "",
      price: "",
      amount: "",
      expectedDeliveryDate: "",
    },
    {
      items: "",
      variants: "",
      quantity: "",
      price: "",
      amount: "",
      expectedDeliveryDate: "",
    },
    {
      items: "",
      variants: "",
      quantity: "",
      price: "",
      amount: "",
      expectedDeliveryDate: "",
    },
  ]);

  const handleTableChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const renderSection = () => {
    if (currentSection === "Request Information") {
      return (
        <div>
          <h3 className="text-lg font-bold mb-4">Request for Quote</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Input 1"
              className="border border-gray-300 rounded-md p-2"
              value={formData.requestInfo.input1}
              onChange={(e) =>
                handleInputChange("requestInfo", "input1", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 2"
              className="border border-gray-300 rounded-md p-2"
              value={formData.requestInfo.input2}
              onChange={(e) =>
                handleInputChange("requestInfo", "input2", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 3"
              className="border border-gray-300 rounded-md p-2"
              value={formData.requestInfo.input3}
              onChange={(e) =>
                handleInputChange("requestInfo", "input3", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 4"
              className="border border-gray-300 rounded-md p-2"
              value={formData.requestInfo.input4}
              onChange={(e) =>
                handleInputChange("requestInfo", "input4", e.target.value)
              }
            />
          </div>

          <div className="overflow-x-auto border border-gray-300 rounded-md p-4">
      <table className="table-auto border-collapse w-full">
        <thead className="bg-white border-b-2">
          <tr>
            <th className="px-4 py-2 text-left">Items</th>
            <th className="px-4 py-2 text-left">Variants</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Expected Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr className="border-b" key={index}>
              <td className="px-4 py-2">
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  value={row.items}
                  onChange={(e) =>
                    handleTableChange(index, "items", e.target.value)
                  }
                  placeholder="Enter Item"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  value={row.variants}
                  onChange={(e) =>
                    handleTableChange(index, "variants", e.target.value)
                  }
                  placeholder="Enter Variant"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  className="border rounded w-full p-2"
                  value={row.quantity}
                  onChange={(e) =>
                    handleTableChange(index, "quantity", e.target.value)
                  }
                  placeholder="Enter Quantity"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  className="border rounded w-full p-2"
                  value={row.price}
                  onChange={(e) =>
                    handleTableChange(index, "price", e.target.value)
                  }
                  placeholder="Enter Price"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  className="border rounded w-full p-2"
                  value={row.amount}
                  onChange={(e) =>
                    handleTableChange(index, "amount", e.target.value)
                  }
                  placeholder="Enter Amount"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="date"
                  className="border rounded w-full p-2"
                  value={row.expectedDeliveryDate}
                  onChange={(e) =>
                    handleTableChange(index, "expectedDeliveryDate", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setCurrentSection("Terms and Attachments")}
          >
            Continue
          </button>
        </div>
      );
    }

    if (currentSection === "Terms and Attachments") {
      return (
        <div>
          <h3 className="text-lg font-bold mb-4">Terms and Attachments</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Input 1"
              className="border border-gray-300 rounded-md p-2"
              value={formData.termsAttachments.input1}
              onChange={(e) =>
                handleInputChange("termsAttachments", "input1", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 2"
              className="border border-gray-300 rounded-md p-2"
              value={formData.termsAttachments.input2}
              onChange={(e) =>
                handleInputChange("termsAttachments", "input2", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 3"
              className="border border-gray-300 rounded-md p-2"
              value={formData.termsAttachments.input3}
              onChange={(e) =>
                handleInputChange("termsAttachments", "input3", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Input 4"
              className="border border-gray-300 rounded-md p-2"
              value={formData.termsAttachments.input4}
              onChange={(e) =>
                handleInputChange("termsAttachments", "input4", e.target.value)
              }
            />
          </div>
          <div className="mb-4 border border-gray-300 rounded-md">
                    <h4>Attachment</h4>
                    <span className="text-sm text-gray-500">Attach all necessary files or documents</span>
                    <div className="p-4 m-4 border-2 border-dashed border-gray-400 rounded-lg">
                        <img src={cloud} alt="cloud" className="mr-2 w-6 h-6" />
                        <input
                        type="file"
                        onChange={(e) =>
                            handleInputChange(
                            "termsAttachments",
                            "file",
                            e.target.files[0]
                            )
                        }
                        />
                    </div>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setCurrentSection("Review")}
          >
            Continue
          </button>
        </div>
      );
    }

    if (currentSection === "Review") {
      return (
        <div>
          <h3 className="text-lg font-bold mb-4">Review</h3>
          <div className="border border-gray-300 rounded-md p-4">
            <h4 className="text-md font-semibold">Request Information</h4>
            <pre>{JSON.stringify(formData.requestInfo, null, 2)}</pre>
            <h4 className="text-md font-semibold">Terms and Attachments</h4>
            <pre>{JSON.stringify(formData.termsAttachments, null, 2)}</pre>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Header className="w-full" />

      <div className="border border-gray-300 rounded-lg p-4 bg-white flex items-center justify-between m-2">
        {[
          { id: "Request Information", icon: icon1, info:"Provide details about Rfq" },
          { id: "Terms and Attachments", icon: icon2, info: "Payment and dilevry items" },
          { id: "Review", icon: icon3, info: "Confirm information provided" },
        ].map((section) => (
          <div
            key={section.id}
            className={`flex items-center cursor-pointer ${
              currentSection === section.id ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setCurrentSection(section.id)}
          >
            <img src={section.icon} alt={section.id} className="mr-2 w-6 h-6" />
            <div className="flex flex-col">
              <span>{section.id}</span>
              <span className="text-sm text-gray-500"> {section.info}</span>
            </div>
          </div>
        ))}
      </div>

      <div>{renderSection()}</div>
    </div>
  );
}


