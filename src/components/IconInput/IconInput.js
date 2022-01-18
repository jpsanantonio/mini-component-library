import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: min-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: min-content;
  height: min-content;
  padding-bottom: var(--padding-bottom);
  color: inherit;
`;

const Input = styled.input`
  color: inherit;
  padding-left: var(--padding-left);
  border: 0;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: var(--font-size);
  width: var(--width);

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === 'small' ? 10.67 : 16;
  const borderWidth = size === 'small' ? 1 : 2;
  const fontSize = size === 'small' ? 14 : 18;
  const paddingLeft = size === 'small' ? 1 : 1.5;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--padding-bottom': borderWidth + 'px' }}>
        <Icon id={icon} size={iconSize}></Icon>
      </IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          '--border-width': borderWidth + 'px',
          '--padding-left': paddingLeft + 'rem',
          '--font-size': fontSize + 'px',
          '--width': width,
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
