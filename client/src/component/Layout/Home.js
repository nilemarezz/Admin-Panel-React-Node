import React,{useState} from "react";
import InfoBox from "./InfoBox";
import { connect } from "react-redux";
import {GetItemAdmin} from '../../actions/GetItemAdmin'
const Home = (props) => {
  useState(()=>{
    props.GetItemAdmin()
  },[])
  console.log(props)
  if(props.Customer === null || props.Food === null){
    return <div></div>
  }else{

  
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>Dashboard</h1>
        <section className="content">
          <div className="row">
            <InfoBox
              title="Items"
              amount={props.Food.NumOfFoods}
              color="info-box-icon bg-green"
              icon="ion ion-ios-cart-outline"
            />
            <InfoBox
              title="Member"
              amount={props.Customer.NumOfCustomer}
              color="info-box-icon bg-yellow"
              icon="ion ion-ios-people-outline"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
}
const mapStateToProps = state => {
  return state.ItemAdmin;
};
export default connect(mapStateToProps,{GetItemAdmin})(Home);
