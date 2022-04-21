import { SVGIconProps } from '.';

const HeartIcon = ({ width = 24, height = 24, fill = '#F0E5CF', onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 9C8 10 12 14 12 14C12 14 16 10 16 9" stroke={fill} stroke-width="8.5" stroke-linecap="round" />
    </svg>
  );
};

export default HeartIcon;
