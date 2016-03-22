import { Link } from 'react-router';
import Branding from 'components/core/branding';

const Header = props => {
  return (
    <header className={`page-header ${props.className}`}>
      <div className="row">
        <div className="col col-l-2 col-s-12">
          {props.branding ? (
            <Link to="/" activeClassName="active">
              <Branding />
            </Link>
          ) : null}
        </div>
        <div className="col col-l-10 col-s-12">
          {props.navigation ? (
            <nav className='page-navigation' role='navigation'>
              <ul className='navigation-items'>
                <li className='navigation-item'>
                  <Link
                    to="/"
                    className="navigation-item-link"
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
                <li className='navigation-item'>
                  <Link
                    to="/posts"
                    className="navigation-item-link"
                    activeClassName="is-active"
                  >
                    Writing
                  </Link>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  className: '',
  branding: true,
  navigation: true
}

export default Header;
