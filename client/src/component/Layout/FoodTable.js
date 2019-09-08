import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AddFoodAdmin, DeleteFoodAdmin,EditAmountFoodAdmin } from "../../actions/ItemsAction";
const FoodTable = props => {
  const [name, setName] = useState("");
  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [image,setImage] = useState("");

  const [editAmount,seteditAmount] = useState("")

  const submitForm = e => {
    e.preventDefault();
    
    const newFood = {
      name,
      amount,
      description,
      price,
      image
    };
    props.AddFoodAdmin(newFood);
    setName("")
    setamount("")
    setdescription("")
    setprice("")
  };
  const deleteItem = id => {
    props.DeleteFoodAdmin(id);
  };
  const setNewAmount = (id) =>{
    const amout = {amount:editAmount}
    props.EditAmountFoodAdmin(id,amout)
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/content.js";
    script.async = true;
    document.body.appendChild(script);
  });
  if (!props.food) {
    return <div></div>;
  } else {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Food Data Tables</h1>
        </section>
        <section className="content">
          <form onSubmit={submitForm}>
            <div class="row">
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Amount"
                  value={amount}
                  onChange={e => setamount(e.target.value)}
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="file"
                  class="form-control"
                  
                  
                  onChange={e => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "10px" }}>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  value={description}
                  onChange={e => setdescription(e.target.value)}
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={e => setprice(e.target.value)}
                />
              </div>
              
              <div class="col-sm-4">
                <input type="submit" class="btn btn-primary" />
              </div>
            </div>
          </form>
          <div
            style={{
              color: "red",
              marginTop: "10px",
              display: props.errorMsg ? "" : "none"
            }}
          >
            {props.errorMsg}
          </div>
        </section>

        <section className="content" style={{ marginTop: "-150px" }}>
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <div
                    id="example1_wrapper"
                    className="dataTables_wrapper form-inline dt-bootstrap"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="example1"
                          className="table table-bordered table-striped dataTable"
                          role="grid"
                          aria-describedby="example1_info"
                        >
                          <thead>
                            <tr role="row">
                            <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="Rendering engine: activate to sort column descending"
                                style={{ width: 214 }}
                              >
                                Picture
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="Rendering engine: activate to sort column descending"
                                style={{ width: 214 }}
                              >
                                name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Browser: activate to sort column ascending"
                                style={{ width: 193 }}
                              >
                                amount
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: 149 }}
                              >
                                description
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: 149 }}
                              >
                                Price
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: 149 }}
                              ></th>
                            </tr>
                          </thead>
                          <tbody>
                            {props.food.FoodsList.map(item => {
                              return (
                                <tr role="row" className="odd" key={item._id}>
                                  <td style={{width:"15%"}}><img style={{width:"70px",height:"50px"}} src={`http://localhost:5000/${item.productImage}`}/></td>
                                  <td>{item.name}</td>
                                  <td>
                                    <div class="form-group row">
                                      <div class="col-10">
                                        <input
                                          class="form-control"
                                          value={item.editAmount}
                                          placeholder={item.amount}
                                          onChange={(e) => seteditAmount(e.target.value)}
                                        />
                                        <button className="btn btn-primary btm-sm" onClick={()=>setNewAmount(item._id)}>Set</button>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{item.description}</td>
                                  <td>{item.price}</td>
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => deleteItem(item._id)}
                                    >
                                      X
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}

                            {/* <tr role="row" className="even">
                            <td className="sorting_1">Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1">Trident</td>
                            <td>Internet Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td>5</td>
                            <td>C</td>
                          </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
};
const mapStateToProps = state => {
  return { food: state.ItemAdmin.Food, errorMsg: state.ItemAdmin.Errormsg };
};
export default connect(
  mapStateToProps,
  { AddFoodAdmin, DeleteFoodAdmin ,EditAmountFoodAdmin}
)(FoodTable);
