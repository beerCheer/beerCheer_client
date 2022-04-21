import { SVGIconProps } from '.';

const CloseIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L18 18M6 18L18 6" stroke={fill} stroke-width="2.5" stroke-linecap="round" />
    </svg>
  );
};

export default CloseIcon;
