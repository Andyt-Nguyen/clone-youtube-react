import React, { Component } from 'react';
import Header from './Components/Common/Header';
import YtSideNav from './Components/Common/YtSideNav';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
				<div className="nav"><Header /></div>
				<div className="main">
					<div className="ytSideNav">
						<YtSideNav />
					</div>
					<div className="body">
					{this.props.children}
					</div>
				</div>
      </div>
    );
  }
}

export default App;
