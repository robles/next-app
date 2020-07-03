import PropTypes from 'prop-types';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.defaultProps = {
  children: <></>,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
