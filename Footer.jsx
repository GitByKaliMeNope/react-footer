import React from 'react';
import './Footer.css';




class Footer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    time: new Date(),
  }
}
componentDidMount() {
   this.timer = setInterval(() => this.times(), 1000);
}
componentWillUnmount(){
  clearInterval(this.time)
}
times = () => {
  this.setState({
    time: new Date()
  });

}

  render() { 
    return (
      <>
      <div class="fixed-bottom footer">
      <h1 className='span'><i className='tag'>KaliMenope.de</i>  <i className="clock">
      {new Date().toUTCString()}  
      </i></h1>
      </div>
      </>
    );
  }
}
 
export default Footer;