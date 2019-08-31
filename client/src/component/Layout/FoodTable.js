import React, { useState ,useEffect} from "react";
import { connect } from "react-redux";
import { AddFoodAdmin } from "../../actions/AddItems";
const FoodTable = props => {
  const [name, setName] = useState("");
  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");

  const submitForm = e => {
    e.preventDefault();
    const newFood = {
      name,
      amount,
      description,
      price
    };
    props.AddFoodAdmin(newFood);
  };

  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "js/content.js"
    script.async = true;
    document.body.appendChild(script)
  })
  if (!props.FoodsList) {
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
            </div>
            <div class="row">
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
        </section>

        <section className="content" style={{ marginTop: "-120px" }}>
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
                            {props.FoodsList.map(item => {
                              return (
                                <tr role="row" className="odd">
                                  <td>{item.name}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.description}</td>
                                  <td>{item.price}</td>
                                  <td>
                                    <button className="btn btn-danger">
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
  return state.ItemAdmin.Food;
};
export default connect(
  mapStateToProps,
  { AddFoodAdmin }
)(FoodTable);
