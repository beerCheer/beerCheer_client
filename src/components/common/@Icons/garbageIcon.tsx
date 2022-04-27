import { SVGIconProps } from '.';

const GarbageIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
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
        d="M18 22H6V8H4V21.7C4 22.8 4.9 24 6 24H18C19.1 24 20 22.8 20 21.7V8H18V22ZM15 4V2H9V4H2V6H22V4H15ZM9 10V20H11V10H9ZM13 10V20H15V10H13Z"
        fill="#1E232D"
      />
    </svg>
  );
};

export default GarbageIcon;
