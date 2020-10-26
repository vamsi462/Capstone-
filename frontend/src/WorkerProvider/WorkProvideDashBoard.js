import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import { Link } from "react-router-dom";

const  WorkProviderDashBoard = () => {

  const {
    user: {_id, name, email, role},
  } = isAuthenticated();

  const workProviderLinks =()=>{
      return(
          <div className="card">
              <h4 className="card-header">Work ProviderLinks</h4>
              <ul className="list-group">
          <li className="list-group-item">
              <Link className="nav-link" to ="/create/category">Create Category</Link>
          </li>
          <li className="list-group-item">
              <Link className="nav-link" to ="/create/product">Post a Work</Link>
          </li>
          <li className="list-group-item">
              <Link className="nav-link" to ="/workProvider/orders">View Accepted Works</Link>
          </li>
          <li className="list-group-item">
              <Link className="nav-link" to ="/workProvider/products">Manage Prodcts</Link>
          </li>
           {/* <li className="list-group-item">
              <Link className="nav-link" to ="/workProvider/products">Manage Prodcts</Link>
          </li> */}
          </ul>
          </div>
      )
  }
  const workProviderInfo =()=>{
      return (
        <div className="card mb-5">
          <h3 className="card-header">workProvider Information</h3>
          <ul className="list-group">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">
              {role === 1 ? "workProvider" : "Registered User"}
            </li>
          </ul>
        </div>
      );
  }
  
  return (
          <Layout
            title="Dashboard"
            description={`G'day ${name}`}
            className="container-fluid">
            <div className="row">
              <div className="col-3">
                  {workProviderLinks()}
              </div>
             <div className="col-9">
                  {workProviderInfo()}
              </div>
            
      </div>
    </Layout>
  );
};

export default WorkProviderDashBoard;