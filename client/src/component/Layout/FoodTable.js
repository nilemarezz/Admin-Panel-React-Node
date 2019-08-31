import React,{useState} from "react";
import { connect } from "react-redux";
const FoodTable = props => {
  const [name,setName] = useState("");
  const [amount,setamount] = useState("");
  const [description,setdescription] = useState("");
  const [price,setprice] = useState("");

  const submitForm = (e) =>{
    e.preventDefault();
    console.log(name)
  }
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
                <input type="text" class="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Amount" value={amount} onChange={(e)=>setamount(e.target.value)}/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  value={description}
                  onChange={(e)=>setdescription(e.target.value)}
                />
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Price" value={price} onChange={(e)=>setprice(e.target.value)}/>
              </div>
              <div class="col-sm-4">
                <input type="submit" class="btn btn-primary" />
              </div>
            </div>
          </form>
        </section>

        <section className="content" style={{marginTop:'-120px'}}>
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
                      <div className="col-sm-6">
                        <div className="dataTables_length" id="example1_length">
                          <label>
                            Show{" "}
                            <select
                              name="example1_length"
                              aria-controls="example1"
                              className="form-control input-sm"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div id="example1_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control input-sm"
                              placeholder
                              aria-controls="example1"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
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
                    <div className="row">
                      <div className="col-sm-5">
                        <div
                          className="dataTables_info"
                          id="example1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 3 of 3 entries
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button previous disabled"
                              id="example1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={0}
                                tabIndex={0}
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button active">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={1}
                                tabIndex={0}
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button next disabled"
                              id="example1_next"
                            >
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={2}
                                tabIndex={0}
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
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
export default connect(mapStateToProps)(FoodTable);
