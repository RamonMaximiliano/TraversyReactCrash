import { click } from "@testing-library/user-event/dist/click"
import PropTypes from "prop-types"

const Button = ({color, text}) => {
    const clicked = () => {
        console.log("Hello")
    }

   return (
        <div>
            <button className="btn" style={{backgroundColor: color}} onClick={clicked}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}


export default Button