import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title:
      "Is Orchard at Godrej SE7EN Kolkata well-positioned? Does it hold the RERA-registration number?",
    content:
      "The RERA-approved Orchard at Godrej SE7EN is well-positioned in Joka, Kolkata. It is an international-levelled residential project with abodes nestled in greenery.",
  },
  {
    title:
      "What documents are required to invest in 3BHK apartments in Orchard, Godrej SE7EN, Joka, Kolkata?",
    content:
      "To invest in 3 BHK apartments in Orchard at Godrej SE7EN in Joka, Kolkata you must have two years of Income Tax Return, Income and Address proof.",
  },
  {
    title: "When and how can I visit Orchard at Godrej SE7EN in Joka, Kolkata?",
    content:
      "Connect with our sales manager to schedule a site visit to Orchard at Godrej SE7EN in Joka, Kolkata.",
  },
  {
    title: "How is connectivity from Orchard in Godrej SE7EN in Joka, Kolkata?",
    content:
      "The strategic location of Orchard in Godrej SE7EN, Joka enjoys swift connectivity across the city.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col gap-y-[10px]">
      {accordionData.map((item, index) => (
        <div
          key={index}
          style={{
            background: "linear-gradient(to bottom right, #eff0f3, #ffffff)",
            boxShadow: "3px 3px 3px #e8e6e6, -3px -3px 3px #ffffff",
          }}
        >
          <button
            onClick={() => toggle(index)}
            className={`group w-full flex justify-between items-center p-4 text-left font-bold text-[1rem] ${
              openIndex === index
                ? "hover:text-[#116d42] text-[#2f2f2f]"
                : "text-[#2f2f2f]"
            }`}
          >
            <span>{`Q${index + 1}: ${item.title}`}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
            } text-[#2f2f2f] bg-white font-normal text-[1rem]`}
          >
            <p>
              <strong>Ans.</strong> {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
