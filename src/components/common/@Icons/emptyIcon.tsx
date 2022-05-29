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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.88158 5C4.05222 5 3.37988 5.66465 3.37988 6.48454V20.3093C3.37988 21.7953 4.59849 23 6.10171 23H13.3755C14.8788 23 16.0974 21.7953 16.0974 20.3093H19.0405C19.6366 20.3093 20.1199 19.8316 20.1199 19.2423V9.91753C20.1199 9.32823 19.6366 8.85052 19.0405 8.85052H16.0974V6.48454C16.0974 5.66465 15.425 5 14.5957 5H4.88158ZM16.0974 18.1438V11.1062H17.7339C17.9931 11.1062 18.2032 11.3139 18.2032 11.5701V17.6799C18.2032 17.9361 17.9931 18.1438 17.7339 18.1438H16.0974Z"
        fill="#E5DFD2"
      />
    </svg>
  );
};

export default EmptyIcon;
