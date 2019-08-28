import React from "react";
import InfoBox from "./InfoBox";
const Home = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>Dashboard</h1>
        <section className="content">
          <div className="row">
            <InfoBox
              title="Items"
              amount="60"
              color="info-box-icon bg-green"
              icon="ion ion-ios-cart-outline"
            />
            <InfoBox
              title="Member"
              amount="20"
              color="info-box-icon bg-yellow"
              icon="ion ion-ios-people-outline"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
