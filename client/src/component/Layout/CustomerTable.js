import React, { useEffect } from "react";
import { connect } from "react-redux";
import {DeleteCustomer} from '../../actions/CustomerAction'
const CustomerTable = props => {
  const deleteItem = id => {
    
    props.DeleteCustomer(id);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/content.js";
    script.async = true;
    document.body.appendChild(script);
  });
  if (!props.customer) {
    return <div></div>;
  } else {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Customer Data Tables</h1>
        </section>
        <section className="content">
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

        <section className="content" style={{ marginTop: "-250px" }}>
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
                                user
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
                                password
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
                                name
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
                                age
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
                                gender
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
                            {props.customer.CustomerList.map(item => {
                              return (
                                <tr role="row" className="odd" key={item._id}>
                                  <td>{item.user}</td>
                                  <td>{item.password}</td>
                                  <td>{item.name}</td>
                                  <td>{item.age}</td>
                                  <td>{item.gender}</td>
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
  return {
    customer: state.ItemAdmin.Customer,
    errorMsg: state.ItemAdmin.Errormsg
  };
};
export default connect(mapStateToProps,{DeleteCustomer})(CustomerTable);
