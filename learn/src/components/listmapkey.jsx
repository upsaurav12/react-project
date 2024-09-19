import PropTypes from "prop-types";

const List_map_key = () => {
    /*
    const skills = [
        {tech: 'html', value: 10},
        {tech: 'css', value: 20},
        {tech: 'js', value: 30},
        {tech: 'react', value: 40}
      ]*/


        /*

    const colors = [
        [0,1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23],
        [24,25,26,27,28,29,30,21]
    ]

    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };*/


      const tenHighestPopulation = [
        { country: 'World', population: 7693165599 },
        { country: 'China', population: 1377422166 },
        { country: 'India', population: 1295210000 },
        { country: 'United States of America', population: 323947000 },
        { country: 'Indonesia', population: 258705000 },
        { country: 'Brazil', population: 206135893 },
        { country: 'Pakistan', population: 194125062 },
        { country: 'Nigeria', population: 186988000 },
        { country: 'Bangladesh', population: 161006790 },
        { country: 'Russian Federation', population: 146599183 },
        { country: 'Japan', population: 126960000 },
      ]

    return(
        <>
        {/*
        <h1>Colors:</h1>
        {colors.map((color , index) => (
            <li key={index}  style={{display: 'flex'}}>{color.map((value , idx) => (
                <p key={idx} style={{border: '1px solid' , margin: '2px' , padding: '2px' ,  width: '40px', height:'30px' , display:"flex" , justifyContent:'center' , alignItems:'center' , backgroundColor: isPrime(value)  ? 'red' : value % 2 !== 0  ? 'yellow' : 'green' }}>{value}</p>
            ))}</li>
        ))}*/}

        <h1>Worlds Population!!!</h1>
        {tenHighestPopulation.map((population , idx) => (
            <li key={idx}>
                <span>{population.country}</span>
                <span>{population.population}</span>

                <div style={{border: '1px solid' ,width: '30%' , height:'40px' }}>
                    <div className="actualpopulation" style={{width: `${(population.population / 7693165599) * 100 }%`,height: '40px',  backgroundColor:'yellow'}}></div>
                </div>
            </li>
        ))}
        </>
    )
}

List_map_key.propTypes = {
    numbers: PropTypes.array.isRequired,
}

export default List_map_key;