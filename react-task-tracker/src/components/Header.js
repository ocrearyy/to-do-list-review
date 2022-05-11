import Buttons from './Buttons';
import PropTypes from 'prop-types';
import { Button} from 'react-bootstrap';


const onClick = () => {
  console.log('click')
}

const Header = ({title}) => {
    return ( 
        <header className='header'>
          <h1>{title}</h1>
          <Buttons color='green' text='Hello' onClick={onClick} />
        </header>
     );
}
 
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
}


export default Header;