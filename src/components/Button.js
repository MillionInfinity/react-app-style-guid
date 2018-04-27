import React from 'react';
import { Button } from 'reactstrap';

/**
 * The only true button.
 * @author [Teresa](https://github.com/drteresavasquez)
 */
export default (props) => {
  return (
    <Button color="info">{props.buttonLabel}</Button>
  );
};