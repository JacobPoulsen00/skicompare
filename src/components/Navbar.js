import React from 'react';
import '../styles/styles.css';

class Navbar extends React.Component {
	render() {
		return (
      <div>
        <div class="container" id="top">
          <div class="menu">
              <ul>
                  <li><img src="/src/styles/images/logo.jpeg" alt="logo" class="logo"/></li>
                  <li><a>Skiferier</a></li>
                  <li><a>Destinationer</a></li>
                  <li><a>Inspiration</a></li>
                  <li><a>Om os</a></li>
              </ul>
          </div>
        </div>           
      </div>
        );
    }
} 
export default Navbar;