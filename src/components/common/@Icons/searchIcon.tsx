import { SVGIconProps } from '.';

const SearchIcon = ({ width, height, fill = '#eeccee', onClick }: SVGIconProps) => {
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
        d="M16.3264 14.7972C17.0836 13.6095 17.5218 12.202 17.5218 10.6931C17.5218 6.44433 14.0471 3 9.7609 3C5.47464 3 2 6.44433 2 10.6931C2 14.9419 5.47464 18.3863 9.7609 18.3863C11.5007 18.3863 13.1067 17.8188 14.401 16.8604L18.7297 20.7124C19.1957 21.1271 19.9127 21.0888 20.3311 20.6268L20.7098 20.2086C21.1282 19.7466 21.0896 19.0359 20.6235 18.6211L16.3264 14.7972ZM9.7609 15.7832C6.92497 15.7832 4.626 13.5043 4.626 10.6931C4.626 7.88197 6.92497 5.60308 9.7609 5.60308C12.5968 5.60308 14.8958 7.88197 14.8958 10.6931C14.8958 13.5043 12.5968 15.7832 9.7609 15.7832Z"
        fill={fill}
      />
    </svg>
  );
};

export default SearchIcon;