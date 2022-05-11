import PropTypes from 'prop-types';
import { Button} from 'react-bootstrap';
import '../index.css'

const onClick = (e) => {
    console.log(e)
}

const Buttons = ({ color, text, onClick }) => {
    return <Button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</Button>
}

Buttons.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
 



export default Buttons
