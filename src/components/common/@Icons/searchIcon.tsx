type SVGIconProps = {
  width?: number;
  height?: number;
  onClick?: () => void;
};

const SearchIcon = ({ width, height, onClick }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 37 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8988 22.9391C29.3733 20.6296 30.2267 17.8929 30.2267 14.9589C30.2267 6.69731 23.4602 0 15.1133 0C6.76641 0 0 6.69731 0 14.9589C0 23.2204 6.76641 29.9177 15.1133 29.9177C18.5013 29.9177 21.6289 28.8143 24.1493 26.9508L32.5788 34.4407C33.4863 35.2471 34.8826 35.1727 35.6974 34.2744L36.4349 33.4611C37.2497 32.5628 37.1745 31.1808 36.2668 30.3744L27.8988 22.9391ZM15.1133 24.8562C9.59072 24.8562 5.11379 20.425 5.11379 14.9589C5.11379 9.49272 9.59072 5.06154 15.1133 5.06154C20.6359 5.06154 25.1129 9.49272 25.1129 14.9589C25.1129 20.425 20.6359 24.8562 15.1133 24.8562Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

export default SearchIcon;
