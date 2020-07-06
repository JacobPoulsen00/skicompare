import React from 'react';
import '../styles/styles.css';
import { Router } from 'express';

class TitleCard extends React.Component {
	render() {
		return (
      <Router>        
        <div class="container">
          <div class="titlecard">
            <div class="title-card-filter">
                <h1 class="titlecard-titel">Find og sammenlign billige skiferier</h1>
            </div>
            <div class="SB-box"></div>
          </div>
        </div>
      </Router>
        );
    }
} 
export default TitleCard;