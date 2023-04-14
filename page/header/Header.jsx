import * as React from 'react';
import { Banner } from '../banner/Banner';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Milton Duarte</span>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Insta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Face
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <Banner />
    </>
  );
};
