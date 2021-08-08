import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <ul className="list-link d-flex w-25 justify-content-between">
          <li className="hover-scale transition-all">
            <a className="text-white" href="mailto:online.academy.hcmus@gmail.com">
              <i className="fas fa-envelope h1"/>
            </a>
          </li>
          <li className="hover-scale transition-all">
            <a className="text-white" href="https://github.com/GithubVanLinh/online-academy-client">
              <i className="fab fa-github h1"/>
            </a>
          </li>
          <li className="hover-scale transition-all">
            <a className="text-white" href="https://www.facebook.com/redfoxvn99">
              <i className="fab fa-facebook h1"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-3">
        <div className="text-small text-center">&copy;&nbsp;&nbsp;2021 Klearn, Inc.</div>
      </div>
    </div>
  );
}
