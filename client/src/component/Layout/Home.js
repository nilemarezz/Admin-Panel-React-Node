import React,{useState} from "react";
import InfoBox from "./InfoBox";
import { connect } from "react-redux";
import {GetItemAdmin} from '../../actions/GetItemAdmin'
import GenderChart from './GenderChart'
import BubbleChart from './BubbleChart'
const Home = (props) => {
  
  
  if(props.Customer === null || props.Food === null || props.Food === undefined ||  props.Customer === undefined  ){
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
            <InfoBox
              title="Admin"
              amount={props.Admin.NumOfAdmin}
              color="info-box-icon bg-red"
              icon="ion ion-ios-people-outline"
            />
            
          </div>
        </section>
        <div className="row" style={{marginLeft:"20px"}}><GenderChart/> </div>
        <div className="row" style={{marginLeft:"41%",marginTop:"-350px",width:"50%"}}><BubbleChart/> </div>
        
      </section>
    </div>
  );
};
}
const mapStateToProps = state => {
  return state.ItemAdmin;
};
export default connect(mapStateToProps,{GetItemAdmin})(Home);
