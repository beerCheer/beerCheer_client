import { SVGIconProps } from '.';

const NaverIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H9V4.00672L9.00481 4.0036L15 12.0615V4H21V20H15V19.994L14.996 19.9966L9 11.9376V20H3V4Z"
        fill={fill}
      />
    </svg>
  );
};

export default NaverIcon;
