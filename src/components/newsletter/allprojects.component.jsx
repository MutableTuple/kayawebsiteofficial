import React from "react";
import SingleProject from "./singleproject.component";
const allProjects = [
  {
    image:
      "https://dl.dropboxusercontent.com/scl/fi/9ygi6a3nynd4vw1fuwnfs/ATC-Tires-Pvt-Ltd-30000-SFT-Vikhroli-Mumbai-11.jpeg?rlkey=a693m3tzzcbsf8mww99dmqdow&dl=0",
    name: "ATC Tires Pvt Ltd.",
    place: "Vikhroli, Mumbai",
    size: "30,000 SFT",
    type: "Commercial",
    id: crypto.randomUUID,
    description:
      " In the heart of Mumbai'/s vibrant Vikhroli district, ATC Tires Pvt Ltd. stood tall. This commercial enterprise occupied a spacious 30,000 square feet facility. Known for their dedication to quality, ATC Tires had become a trusted name in the industry, embodying the spirit of Mumbai'/s relentless pursuit of excellence.",
  },
  {
    // ERGO Technology & Services, , (3)
    image:
      "https://dl.dropboxusercontent.com/scl/fi/79tff93bkku1qpvx8frvd/ERGO-Technology-Services-40000-SFT-Hiranandani-Powai-Powai-Mumbai-2.jpeg?rlkey=f9spddffixcd4kw1u9dd1exhm&dl=0",
    name: "ERGO Technology & Services.",
    place: "Hiranandani Powai, Powai, Mumbai",
    size: "40,000 SFT",
    type: "Commercial",
    id: crypto.randomUUID,
    description: "",
  },
  {
    // Fashion Factory
    image:
      "https://dl.dropboxusercontent.com/scl/fi/4tx16po03kg4yesof9wkc/Fashion-Factory-9.jpeg?rlkey=ihpt6wmthn2rhugringh6kqrd&dl=0",
    name: "Fashion factory",
    place: "Hiranandani Powai, Powai, Mumbai",
    size: "40,000 SFT",
    type: "Commercial",
    id: crypto.randomUUID,
    description: "",
  },
  {
    // ERGO Technology & Services, , (3)
    image:
      "https://dl.dropboxusercontent.com/scl/fi/ss55jc7qzpoofl66pgf8r/Dr-Sandeep-Dighe-Andheri-22.jpeg?rlkey=s6fgrwe90i14ft2knwx0ojsjx&dl=0",
    name: "Dr. Sandeep Maheshwari's Residence",
    place: "Andheri, Mumbai",
    size: "1000 SFT",
    type: "Residential",
    id: crypto.randomUUID,
    description: "",
  },
  {
    // ERGO Technology & Services, , (3)
    image:
      "https://dl.dropboxusercontent.com/scl/fi/qjq4y82ekzx7nk438auoj/Chanchal-Singh-Dahisar-2.jpeg?rlkey=h2mwink8ywf3gmqlvsyvxeorf&dl=0",
    name: "Chanchal Singh's Residence",
    place: "Dahisar, Mumbai",
    size: "1000 SFT",
    type: "Residential",
    id: crypto.randomUUID,
    description: "",
  },
];
const AllProjects = () => {
  return (
    <>
      {allProjects.map((p) => (
        <SingleProject
          project__image={p.image}
          project__name={p.name}
          project_place={p.place}
          project__size={p.size}
          project__type={p.type}
          project__description={p.description}
        />
      ))}
    </>
  );
};

export default AllProjects;
