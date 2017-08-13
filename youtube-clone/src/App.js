import React, { Component } from 'react';
import Header from './Components/Common/Header';
import YtSideNav from './Components/Common/YtSideNav';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<div className="main">
					<div className="ytSideNav">
						<YtSideNav />
					</div>
					{this.props.children}
				</div>
      </div>
    );
  }
}

export default App;
