import { SVGIconProps } from '.';

const KakaoIcon = ({ width = 24, height = 24, fill = '#000000', onClick }: SVGIconProps) => {
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
        d="M22 10.5C22 14.6421 17.7467 18 12.5 18C12.0475 18 11.6023 17.975 11.1667 17.9267L6.33333 21L7.09142 16.6667C4.61899 15.3126 3 13.0555 3 10.5C3 6.35786 7.2533 3 12.5 3C17.7467 3 22 6.35786 22 10.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default KakaoIcon;
