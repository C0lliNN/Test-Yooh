import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../assets/images/logo.svg';

export default function Logo({ width }) {
  return <img src={logo} alt="Teste WEB" width={width} />;
}

Logo.propTypes = {
  width: PropTypes.string,
};

Logo.defaultProps = {
  width: '142',
};
