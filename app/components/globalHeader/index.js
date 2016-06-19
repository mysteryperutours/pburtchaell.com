import { Link } from 'react-router';
import Branding from 'app-core/branding';
import Navigation from 'app-core/globalNavigation';
import styles from './styles';

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
            <Navigation />
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
