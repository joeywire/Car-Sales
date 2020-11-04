import React from 'react';
import { connect } from 'react-redux';

const Total = props => {

  const {car} = props;

  //Refactor w/ array.reduce & turnary 
  const calcTotalPrice = (c) => {
    let addPrice = 0;
    if (c.features.length > 0){
      c.feature.forEach((ft) => addPrice += ft.price)
    };
    return c.price + addPrice;
  }


  return (
    <div className="content">
      <h4>Total Amount: ${calcTotalPrice(car)}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    car: state.car
  }
}

export default connect(mapStateToProps, {})(Total);
