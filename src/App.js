import logo from './logo.svg';
import './App.css';





function App() {
  
const players = ["sakib","mushi","Tamim","Mash"];

  return (
    <div className="App"> 

      {players.map(player => <Person name = {player}></Person>)}
      


      {/* <Person name = "sakib al hasan" profession = "Alrounder" > </Person>
      <Person name = "Tamim" profession = " batsman"> </Person>
      <Person name = "Mushfiq" profession = "wicket keeper"> </Person> */}

       <Movie name = "Ajai" movieName = "singam" ></Movie>
       <Movie name = "salman" movieName = "bhaijan" ></Movie>
       <Movie name = "sarukh" movieName = "kal ho na ho" ></Movie>

    </div>
  );
}



function Person (props){

return (
<div className='container'>
<h2>name : {props.name} </h2>
<p>Statas : {props.profession}</p>

</div>
)

}


function Movie (props){

return(
  <div className='movie'>
    <h2>name : {props.name} </h2>
    <p>movie : {props.movieName} </p>
  </div>
)

}



export default App;
