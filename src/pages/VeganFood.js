import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import input from '../components/Input';
import FetchApi from '../components/Fetch';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
         <div className="App">
             <header className="App-header">
                 VEGAN FOOD
            <ul>
           <li>Table<input /></li>
           <li>Waiter-Waitress<input /></li>
           </ul>
        </header>


        <div>
         <nav className="Nav">

              <ButtonItem />

        </nav>

        <div className="title-Menu">

                <p>Menu</p>
                <h1>Total Cliente....</h1>

        </div>

        <div className="Cont" id="contMenu">

        <p>MENÚ</p>

            <ul>


             <li></li>
             <li></li>
             <li></li>
            </ul>

        </div>

        <div className="Cont2">

            <p>contenedor 2</p>


            <p>Ticket</p>
            <ButtonItemTwo />

        </div>
     </div>
</div>

            )
    }

}

export default VeganFood;
