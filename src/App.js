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
