import React from "react";
import "../Cards/Cards.css";

function CardsItem(props) {
  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardsItem;
