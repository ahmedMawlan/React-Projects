// import Reac from 'react';
import './css/index.css'
import NaveBar from './components/nav'
import Header from './components/header'
import Cards from './components/cards'
import Container from 'react-bootstrap/esm/Container';
import {menueFoods} from './components/data'
import { useState } from 'react';

const App = ()=>{
const [foodData, setfoodData] = useState(menueFoods)

//get all cat uniqe
const allCat = ['الكل', ...new Set(menueFoods.map(i => i.category))]
console.log(allCat)

// Filter by category
    const filterFood = (cat) =>{
        if (cat === 'الكل'){
            setfoodData(menueFoods)
        }else{
            const newArrCat = menueFoods.filter((item) => item.category === cat)
            setfoodData(newArrCat)
    }
}

// Filter by search
    const filterSearch = (word) =>{
        if (word !==''){
            const newArrSearch = menueFoods.filter((item) => item.title === word)
            setfoodData(newArrSearch)
        }
}

    return(
        <div>
            <NaveBar filterSearch={filterSearch} />
            <Container>
                <Header filterFood={filterFood} allCat={allCat} />
                <Cards menueFoods={foodData}/>
            </Container>
        </div>
        )
}
export default App ;
