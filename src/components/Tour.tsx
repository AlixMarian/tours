import { useState } from 'react';
import { Tour as TourType } from '../types';

type TourProps = {
  tour: TourType;
};

const Tour = ({ tour }: TourProps) => {
  const { image, name, price, info } = tour;
  const [readMore, setReadMore] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {readMore ? info : info.substring(0, 200) + '...'}
            <button onClick={() => setReadMore(!readMore)} className="info-btn">
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className="delete-btn btn-block btn">
            not interested
          </button>
        </div>
      </article>
    )
  );
};

export default Tour;
