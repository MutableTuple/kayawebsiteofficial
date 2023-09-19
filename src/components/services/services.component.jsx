import React from "react";
import "./services.styles.scss";
import ServiceCard from "./serviceCard.component";

const data = [
  {
    image: "",
    name: "Comprehensive Civil Interior Solutions",
    description:
      "We offer a comprehensive suite of interior solutions, including structural modifications and renovations.",
  },
  {
    image: "",
    name: "Versatile False Ceiling Installations",
    description:
      " Our expertise extends to the installation of a wide range of false ceiling designs, catering to various aesthetic and functional preferences.",
  },
  {
    image: "",
    name: "Comprehensive Flooring Solutions",
    description:
      "We provide an extensive selection of flooring solutions, encompassing hardwood, laminate, tile, carpet, and vinyl installations.",
  },
  {
    image: "",
    name: "Expert Carpets and Soft Furnishings",
    description:
      "We specialize in the supply and installation of carpets and soft furnishings, such as curtains, drapes, and upholstery.",
  },
  {
    image: "",
    name: "Electrical and Lighting Services",
    description:
      "Our services encompass electrical and lighting installations, ensuring efficient and well-illuminated interior spaces.",
  },
  {
    image: "",
    name: "Air Conditioning Solutions",
    description:
      "We excel in air conditioning installations, delivering optimal indoor climate control for your comfort.",
  },
  {
    image: "",
    name: "Fire Alarm Systems",
    description:
      "We provide cutting-edge fire alarm systems, enhancing safety and compliance within your premises.",
  },
  {
    image: "",
    name: "Advanced Networking and Telecom Systems",
    description:
      "Our proficiency extends to advanced networking and telecommunication infrastructure, ensuring seamless connectivity.",
  },
  {
    image: "",
    name: "Communication Systems, Public Address, and High-Quality Audio",
    description:
      "We specialize in the installation of communication systems, public address solutions, and top-tier audio equipment for diverse applications.",
  },
  {
    image: "",
    name: "Server Room Setup and Power Backup Solutions",
    description:
      "We offer expertise in designing and equipping server rooms, complete with uninterruptible power supplies (UPS) and backup diesel generators (DG).",
  },
  {
    image: "",
    name: "Designer Storage Solutions",
    description:
      "Our team crafts bespoke designer storage solutions, enhancing both aesthetics and functionality.",
  },
  {
    image: "",
    name: "Precision Partitions and Wall Paneling",
    description:
      "We excel in the construction of precision partitions and the installation of sophisticated wall paneling, elevating the interior environment.",
  },
  {
    image: "",
    name: "Customized Furniture and Carpentry Work",
    description:
      "We provide tailored solutions for both loose and fixed furniture, complemented by expert carpentry services.",
  },
  {
    image: "",
    name: "Modular Fixtures and Furnishings",
    description:
      "Our offerings encompass the installation of modular fixtures and furnishings, optimizing space utilization.",
  },
  {
    image: "",
    name: "Comprehensive Painting and Wall Finishing Services",
    description:
      "We provide a wide array of painting options and wall finishing techniques to achieve the desired look and feel.",
  },
  {
    image: "",
    name: "Kitchen Equipment and Miscellaneous Installations",
    description:
      "Our services include the installation of kitchen equipment and various miscellaneous items, ensuring a fully functional space.",
  },
  {
    image: "",
    name: "External and Internal Signage Solutions",
    description:
      "We specialize in designing and installing signage solutions for both external and internal applications, meeting your wayfinding and branding needs.",
  },
];

const Services = () => {
  return (
    <div className="main__services__container">
      <div className="main__services__container--box">
        <div className="main__services__container--box--text"></div>
      </div>
      <div className="main__services__container--box--content">
        <div className="main__services__container--box--content--elements">
          {data.map((sc) => (
            <ServiceCard name={sc.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
