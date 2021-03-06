import React, {useState , useEffect} from 'react'; // When you do state Declar in code Then You do write this line if not have :=
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Kalam','jamal','Tina','jhanu']
  const Products = [
    {name: 'PhotoShop', price: '$99.99'},/* Product can do call 1st time for learning parpuse:   <Product name ={Products[0].name } price ={Products[0].price} ></Product>
    <Product name ={Products[1].name} price={Products[1].price}></Product>*/
    {name: 'PDF-Redar', price: '$6.99'},
    {name: 'illistator', price: '$67.99'},
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>I M REACT PERSONE!!!</h2>

        <Users></Users>
       <Counter></Counter>
       
       <ul>

         {

           friends.map(friend => <li>{friend}</li>)/* <ul></ul> under this map command are make of Dynamic any product going add then going auto update or any friends name // and all item name show list wise */
         }

         {
           Products.map(product => <li>{product.name}</li>)
         }
       </ul>

    <Product product = {Products[0]}></Product>
      <Product product = {Products[1]}></Product>
      <Product product = {Products[2]}></Product>

  
      <Persone name={friends[0]} job="Manager" Address= "Uposhor" salary="$2700"></Persone>
      <Persone name={friends[1]} job="Sale-Manager" Address= "Tillaghore" salary="$1900"></Persone>
      <Persone name={friends[2]}job = 'Excucative-Officer' Address= "Houseing-State" salary="$3300"></Persone>

      </header>
    </div>
  );
 
}

 
function Counter(){
  const [count, setCount] = useState(5) // State Declare : 

  const hamdleincrase = () => {

    const AddCount = count + 1;

    setCount(AddCount);

  }
 
  
    const hamdleDecrase = () => {
  
      const DecCount = count - 1;
  
      setCount(DecCount);
  
    }
  
return(

  <div>
    <h1>Count:{count}</h1>
    <button onClick ={hamdleincrase}>Incrase</button>
    <button onClick = {hamdleDecrase}>Decrase</button>
  </div>

)

}
// use useEffect and call API data
function Users(){
  const[users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data));


  })
 
  return(

    <div>
      <h3> Dynamic_Users:{users.length}</h3>
    <ul>
      {
        console.log(users)
      }
      {
        users.map(user =><li>{user.name}</li>)
      }
    </ul>
      </div>
  )
}

function Product(props){
  const StyleofProduct ={
border: '1px solid gray',
borderRadius:'5px',
height:'350px',
width:'300px',
backgroundColor:'lightgray',
margin:'5px',

float:'left'
    
  }
 const {name , price} = props.product;
  return(
    <div style ={StyleofProduct}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy-It-Now</button>
      </div>
  )
}

function Persone(props){
    const StyleOfText = {


    border: '2px solid red',
     margin:'10px',
  width :'500px'
  
    }

  return ( 
    <div style ={StyleOfText}>
  <h1>Name:{props.name}</h1>
  <p>Job: {props.job}</p>
  <p>Addres:{props.Address}</p>
  <p>Salary:{props.salary}</p>
  </div>
  )
}

export default App;
