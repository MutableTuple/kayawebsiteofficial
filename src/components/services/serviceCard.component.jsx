import React from "react";

const ServiceCard = ({ name }) => {
  return (
    <div className="main__services__container--box--content--elements--14 elems--s">
      <h4 className="w-text">{name}</h4>
      <div className="button--elems">Enquire</div>
    </div>
  );
};

export default ServiceCard;
