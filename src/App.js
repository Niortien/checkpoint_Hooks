import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [cars, setCars] = useState(
    [
      {id:1,marque:"bmw",
        Matricule:"12334U"
      },
      {id:2,marque:"Mercedes",
      Matricule:"1i334ok"
    },
    {id:3,marque:"Duster",
    Matricule:"1233kdie4U"
  },
    ]
  );
  //ajout d'un élément 
  const [marque, setMarque] = useState("");
  const [Id, setId] = useState(0);

  function addCars(){
    let car={
      id : 10,
      marque:marque,
      Matricule:"yuinb-"
    }
    let newCar=[...cars]
    newCar.push(car)
    setCars(newCar)

  }
  function adding(e){
    setMarque(e.target.value)
  }

    //suppression d'un élément
  
    function deleteCars(id){
      let delCars=[...cars]
      let index = delCars.findIndex(car=> car.id == id);
      delCars.splice(index, 1);
      setCars(delCars);

      
    }

    
    
  
  return (
    <div className="App">
<div>
  <input type="text"  placeholder='ajouter' onChange={adding} />
  <button onClick={addCars}>ajouter</button>
</div>
      
     {cars.map(car=>{
      return <div>


        <h1>la marque:{car.marque}</h1>
        <h5>le Matricule est :{car.Matricule} </h5>
        <button onClick={()=>deleteCars(car.id)}>x</button>
      </div>
     })}
    </div>
  );
}

export default App;
