import  PropTypes from "prop-types";

const Form = (props) => {
    console.log(props)
    return (
        <>
            <h1>Hello</h1>
            <h1>{props.welcome}</h1>
            <p>{props.title}</p>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.date}</p>
            <p>{props.x}</p>
            <p>{props.y}</p>
            <p>{props.status}</p>
            <button onClick={props.onClick}>HI</button>
        </>
    )
}


//Prop Validation 
Form.propTypes = {
    welcome : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}


export default Form;