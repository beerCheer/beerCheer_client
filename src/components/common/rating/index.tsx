import styled from '@emotion/styled';
import { HTMLAttributes, useState } from 'react';
import EmptyIcon from '../@Icons/emptyIcon';
import SymbolIcon from '../@Icons/symbolIcon';

interface RatingProps {
  value: number | null;
  onChange: (newValue: number) => void;
}
const Rating = ({ value: defaultValue, onChange }: RatingProps) => {
  const [isHover, setIsHover] = useState(-1);
  const [value, setValue] = useState(defaultValue ?? -1);
  const handleOnClick = (newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <span>
      {[1, 2, 3, 4, 5].map(rateItem => {
        const isActive = (isHover === -1 && value >= rateItem) || isHover >= rateItem;
        const isFocus = isHover === rateItem;
        return (
          <RateBeer
            key={rateItem}
            isActive={isActive}
            isFocus={isFocus}
            onMouseEnter={() => {
              setIsHover(rateItem);
            }}
            onMouseLeave={() => {
              setIsHover(-1);
            }}
            onClick={() => handleOnClick(rateItem)}
          />
        );
      })}
    </span>
  );
};

interface RateBeerProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  isFocus: boolean;
}

const RateBeer = ({ isActive, isFocus, ...props }: RateBeerProps) => {
  return (
    <BeerIcon {...props} isFocus={isFocus}>
      {isActive ? <SymbolIcon /> : <EmptyIcon />}
    </BeerIcon>
  );
};

const BeerIcon = styled.span<{ isFocus?: boolean }>`
  cursor: pointer;
  & > * {
    transform: ${props => props.isFocus && `scale(1.2)`};
  }
`;

export default Rating;
