import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {AddAdmin,DeleteAdmin} from '../../actions/AdminAction'
const AdminTable = props => {
  const [name, setName] = useState("");
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [department, setdepartment] = useState("");
  

  const submitForm = e => {
    e.preventDefault();
    const newAdmin = {
      name,
      user,
      department,
      password
    };
    props.AddAdmin(newAdmin);
    setName("")
    setuser("")
    setdepartment("")
    setpassword("")
    
  };

  const deleteItem = (id) =>{
      props.DeleteAdmin(id)
  }


  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/content.js";
    script.async = true;
    document.body.appendChild(script);
  });
  if (!props.admin) {
    return <div></div>;
  } else {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Admin Data Tables</h1>
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
                  placeholder="User"
                  value={user}
                  onChange={e => setuser(e.target.value)}
                />
              </div>
            </div>
            
            <div class="row" style={{ marginTop: "10px" }}>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Department"
                  value={department}
                  onChange={e => setdepartment(e.target.value)}
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={e => setpassword(e.target.value)}
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
                                user
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
                                department
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
                            {props.admin.AdminList.map(item => {
                              return (
                                <tr role="row" className="odd" key={item._id}>
                                  <td>{item.name}</td>
                                  
                                  <td>{item.user}</td>
                                  <td>{item.department}</td>
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
  return { admin: state.ItemAdmin.Admin, errorMsg: state.ItemAdmin.Errormsg };
};
export default connect(
  mapStateToProps,{AddAdmin,DeleteAdmin}
)(AdminTable);
