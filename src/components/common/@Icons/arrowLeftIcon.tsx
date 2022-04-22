import { SVGIconProps } from '.';

const ArrowLeftIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.5 4L5.5 12L15.5 20" stroke={fill} stroke-width="3" stroke-linecap="round" />
    </svg>
  );
};

export default ArrowLeftIcon;
