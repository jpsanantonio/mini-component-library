/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
  },
  large: {
    '--height': '24px',
    '--border-radius': '8px',
  },
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: ${(props) => {
    if (props.size === 'large') {
      return '4px';
    }

    return null;
  }};
`;

const Progress = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  border-top-right-radius: ${(props) => {
    if (props.value === 100) {
      return '4px';
    }

    return 0;
  }};

  border-bottom-right-radius: ${(props) => {
    if (props.value === 100) {
      return '4px';
    }

    return 0;
  }};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
      style={styles}
    >
      <Progress value={value}></Progress>
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
