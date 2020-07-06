import React from 'react';
import '../styles/styles.css';

class TitleCard extends React.Component {
	render() {
		return (
      <div>
        <div class="container" id="top">
          <div class="menu">
              <ul>
                  <li><img src="../styles/images/logo.jpeg" alt="logo" class="logo"/></li>
                  <li><a>Skiferier</a></li>
                  <li><a>Destinationer</a></li>
                  <li><a>Inspiration</a></li>
                  <li><a>Om os</a></li>
              </ul>
          </div>
        </div>           
        <div class="titlecard">
          <div class="title-card-filter">
              <h1 class="titlecard-titel">Find din næste skiferie med blot én enkelt søgning</h1>
          </div>
        </div>
      </div>
        );
    }
} 
export default TitleCard;