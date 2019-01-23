import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="landing.html">
            VideoStream
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Page 1<span class="caret" />
                </a>
                <ul class="dropdown-menu">
                  {
                    [0,1,2,3,4,5,6,7,8,9].map((Ele,key)=>{
                      return (
                        <li>
                          <Link className = "btn btn-link" to = "/videoSection">{`Section ${key+1}`}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
