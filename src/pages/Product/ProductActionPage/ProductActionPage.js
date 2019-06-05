import React, { Component } from "react";

export default class ProductActionPage extends Component {
  render() {
    return (
      <div className="content col-md-8" style={{ paddingLeft: "25%", paddingTop: "5%" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Create new food</h4>
                  <p className="card-category">Add new food for your menu</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Food Type</label>
                            <select className="form-control" data-show-content="true"  >
                            <option>Select...</option>
                            <option>Món Lẩu</option>
                            <option>Món Cơm</option>
                            <option>Món Nước</option>
                            <option>Bánh Mì</option>
                            <option>Nước</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Menu</label>
                            <select className="form-control">
                            <option>Select...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Food Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>                   
                    </div>     
                    <div className="row">
                    <div className="col-md-6">
                          <div className="form-group">
                              <label className="bmd-label-floating">Price</label>
                              <input type="number" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group">
                              <label className="bmd-label-floating">Quantity</label>
                              <input type="number" className="form-control" />
                        </div>
                      </div>
                    </div>  
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <div className="form-group">                          
                            <textarea className="form-control" rows={3} defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </div>       
                    <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                            <label className="bmd-label-floating">Status</label>
                            <div classname="form-check">
                              <input classname="form-check-input" type="checkbox" />
                              <label classname="form-check-label" htmlfor="exampleRadios1">
                                True
                              </label>                       
                            </div>
                        </div>
                      </div>          
                    </div>             
                    <div className="row">
                      <div className="col-md-12">
                          <br/>
                            <img src="" width={"70%"} height={"70%"} style={{margin: '0 auto'}}/>
                            <input type="file" />
                      </div>
                    </div>
                    <br/>             
                    <button type="submit" className="btn btn-primary pull-right">Create</button>
                    <button type="submit" className="btn btn-primary pull-right">Back</button>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
  }
}
