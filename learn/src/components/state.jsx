import { useState } from "react";
//import dog from '../assets/KOA_Nassau_2697x1517.jpg';
//import cat from '../assets/dog-puppy-on-garden-royalty-free-image-1586966191.avif';
//import scottish from '../assets/Scottish-fold-cat.webp'
import india from '../assets/Flag_of_India.svg.webp'
import china from '../assets/China.png';
import south_korea from '../assets/south_korean.png';
import japan from '../assets/japan.png';
import russia from '../assets/russia.png';
import spain from '../assets/spanish.png';



const State = () => { 
/*
    const colors = [dog , cat , scottish];


    const [colorstate, setColorstate] = useState(0);
    
    const handleColor = () => {
        setColorstate((prev) => (prev + 1) % colors.length);
    }*/

    //const flags = [india , china , japan , russia , spain , south_korea];
    const countrys = [
        {name: 'India' , flag: india , language: 'mixed' , currency: 'INR'},
        {name: 'China' , flag: china , language:  'chinese' , currency: 'YUAN'},
        {name: 'Japan' , flag: japan , language: 'japanese' , currency: 'YEN'},
        {name: 'Russia' , flag: russia , language: 'russian' , currency: 'RUBBEL'},
        {name: 'Spain' , flag: spain , language: 'spanish' , currency: 'EURO'},
        {name: 'South Korea' , flag: south_korea , language: 'korean' , currency: 'WON'},
    ]

    

    const [country , setCountry] = useState(0);


    const handleCountry = () => {
        setCountry((prev) => (prev + 1) % countrys.length)
    }

    /*
    const [flagstate , setFlagstate] = useState(flags[0]);
    //const [flagstate , setFlagstate] = useState(0);


    const handleFlag = () => {
        //setFlagstate((prev) => (prev + 1) % flags.length)
        const randomIndex = Math.floor(Math.random() * flags.length);
        setFlagstate(flags[randomIndex])
    }*/

        const [clicked, setClicked] = useState(false);

        // Inline styles object
        const buttonStyle = {
            fontSize: '16px',
            color: clicked ? 'white' : 'black',
            backgroundColor: clicked ? 'blue' : 'gray',
            margin: clicked ? '40%': '50px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          };


    return (
        <>
        <h1>This is a State Component</h1>

        {/*
        <p>{count}</p>

        <button onClick={() => {setCount((prevcount) => prevcount+1)}}>+</button>
        <button onClick={() => {setCount((prevCount) => prevCount - 1 )}}>-</button>*/}

        {/*}
        <button onClick={handleColor}>Click Me!!</button>
        <p>Hello color is : <span style={{color: colors[colorstate]}}>{colors[colorstate]} </span></p>
        <img src={colors[colorstate]} alt="" />*/}


            {/*}
        <button onClick={handleFlag}>Click me !!!</button>

        <img src={flagstate} alt=""  style={{width: '300px'}}/>
*/}

        <button className="country" onClick={handleCountry}>Click Me !!</button>

        <div className="container">
            <h2>{countrys[country].name}</h2>
            <img src={countrys[country].flag} alt="" style={{height: '350px'}}/>
            <p>{countrys[country].language}</p>
            <p>{countrys[country].currency}</p>
        </div>

        <button
        style={buttonStyle} // Applying the style object from the arrow function
        onMouseEnter={() => setClicked(true)} // Toggle clicked state
        onMouseLeave={() => setClicked(false)}
      >
        {clicked ? 'Clicked!' : 'Click Me!'}
      </button>
        </>
    )
}

export default State;
