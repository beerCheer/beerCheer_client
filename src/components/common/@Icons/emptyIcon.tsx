import { SVGIconProps } from '.';

const EmptyIcon = ({ width = 24, height = 24, onClick }: SVGIconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.61473 2C3.72294 2 3 2.7385 3 3.64948V19.0103C3 20.6615 4.31033 22 5.92669 22H13.748C15.3644 22 16.6747 20.6615 16.6747 19.0103H19.8394C20.4804 19.0103 21 18.4795 21 17.8247V7.46392C21 6.80915 20.4804 6.27835 19.8394 6.27835H16.6747V3.64948C16.6747 2.7385 15.9518 2 15.06 2H4.61473ZM16.6747 16.6043V8.78464H18.4345C18.7132 8.78464 18.9391 9.01542 18.9391 9.30011V16.0888C18.9391 16.3735 18.7132 16.6043 18.4345 16.6043H16.6747Z"
        fill="#E5DFD2"
      />
    </svg>
  );
};

export default EmptyIcon;
