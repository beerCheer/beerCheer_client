import { SVGIconProps } from '.';

const ArrowRightIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L12 10L2 18" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default ArrowRightIcon;
