import React from 'react';

const Total = props => {

  const {car} = props;

  const calcTotalPrice = (car) => {
    let addPrice = 0;
    if (car.features.length > 0){
      car.feature.forEach((ft) => addPrice += ft.price)
    };
    return car.price + addPrice;
  }


  return (
    <div className="content">
      <h4>Total Amount: ${calcTotalPrice(car)}</h4>
    </div>
  );
};

export default Total;
