import PropTypes from 'prop-types'; // ES6

export function Button({text}){
    return <button onClick={function (){console.log("Hola Mundo")}}>{text}</button> 
}

Button.propTypes = {
    text: PropTypes.string
}

Button.defaultProps = {
    name: "Some user"
}