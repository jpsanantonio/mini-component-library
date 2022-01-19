import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const PresentationalContainer = styled.div`
  background: ${COLORS.transparentGray15};
  padding: 16px 52px 16px 12px;
  border-radius: 8px;
  color: inherit;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  height: min-content;
  color: inherit;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalContainer>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={16} strokeWidth={2}></Icon>
        </IconWrapper>
      </PresentationalContainer>
    </Wrapper>
  );
};

export default Select;
