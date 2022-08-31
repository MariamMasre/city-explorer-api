import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name : '',
      link : ''
    }
  }
  
  getPockData= async (event) =>{
    event.preventDefault();
    const name = event.target.pockName.value;
    const url = `${process.env.REACT_APP_URL}getPockData?name=${name}`;
     console.log(url);
    // const url = `http://localhost:3010/getPockNames`;
    try
    {
      const result = await axios.get(url);
      console.log(result.data);
      this.setState({
        name : result.data.name,
        link : result.data.url
      })
      
    }
    catch
    {
      //
    }
  } 
  
  render(){
    return(
      <div>
        <h1>Pock App</h1>

        <form onSubmit={this.getPockData}>
          <input type="text" name="pockName" placeholder="Enter Pock Name" />
          <button type='submit'>Get Data</button>
        </form>

         <p>{this.state.name}</p>
        <p>{this.state.link}</p> 
      </div>
    )
  }
}

export default App;
