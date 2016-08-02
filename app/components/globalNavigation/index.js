import { Link } from 'react-router';
import styles from './styles';

const Navigation = props => {
  return (
    <nav className='page-navigation' role='navigation'>
      <ul className='navigation-items'>
        <li className='navigation-item'>
          <Link
            className="navigation-item-link"
            activeClassName="is-active"
            onlyActiveOnIndex={true}
          >
            Home
          </Link>
        </li>
        <li className='navigation-item'>
          <Link
            to="/about"
            className="navigation-item-link"
            activeClassName="is-active"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
