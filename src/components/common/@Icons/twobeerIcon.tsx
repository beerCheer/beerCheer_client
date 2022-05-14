import { SVGIconProps } from '.';

const TwoBeerIcon = ({ width = 64, height = 64, onClick, fill = '#363636' }: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick ? onClick : () => {}}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 46H6C4.6744 45.9984 3.40356 45.4711 2.46622 44.5338C1.52888 43.5964 1.00159 42.3256 1 41V31C1.00159 29.6744 1.52888 28.4036 2.46622 27.4662C3.40356 26.5289 4.6744 26.0016 6 26H10C10.2652 26 10.5196 26.1054 10.7071 26.2929C10.8946 26.4804 11 26.7348 11 27C11 27.2652 10.8946 27.5196 10.7071 27.7071C10.5196 27.8946 10.2652 28 10 28H6C5.20435 28 4.44129 28.3161 3.87868 28.8787C3.31607 29.4413 3 30.2044 3 31V41C3 41.7956 3.31607 42.5587 3.87868 43.1213C4.44129 43.6839 5.20435 44 6 44H10C10.2652 44 10.5196 44.1054 10.7071 44.2929C10.8946 44.4804 11 44.7348 11 45C11 45.2652 10.8946 45.5196 10.7071 45.7071C10.5196 45.8946 10.2652 46 10 46Z"
        fill={fill}
      />
      <path
        d="M10 42H6C5.73478 42 5.48043 41.8946 5.29289 41.7071C5.10536 41.5196 5 41.2652 5 41V31C5 30.7348 5.10536 30.4804 5.29289 30.2929C5.48043 30.1054 5.73478 30 6 30H10C10.2652 30 10.5196 30.1054 10.7071 30.2929C10.8946 30.4804 11 30.7348 11 31C11 31.2652 10.8946 31.5196 10.7071 31.7071C10.5196 31.8946 10.2652 32 10 32H7V40H10C10.2652 40 10.5196 40.1054 10.7071 40.2929C10.8946 40.4804 11 40.7348 11 41C11 41.2652 10.8946 41.5196 10.7071 41.7071C10.5196 41.8946 10.2652 42 10 42Z"
        fill={fill}
      />
      <path
        d="M30 29C29.7348 29 29.4804 28.8946 29.2929 28.7071C29.1054 28.5196 29 28.2652 29 28V25C29 24.7348 29.1054 24.4804 29.2929 24.2929C29.4804 24.1054 29.7348 24 30 24C30.2652 24 30.5196 24.1054 30.7071 24.2929C30.8946 24.4804 31 24.7348 31 25V28C31 28.2652 30.8946 28.5196 30.7071 28.7071C30.5196 28.8946 30.2652 29 30 29Z"
        fill={fill}
      />
      <path
        d="M10 29C9.73478 29 9.48043 28.8946 9.29289 28.7071C9.10536 28.5196 9 28.2652 9 28V25C9 24.7348 9.10536 24.4804 9.29289 24.2929C9.48043 24.1054 9.73478 24 10 24C10.2652 24 10.5196 24.1054 10.7071 24.2929C10.8946 24.4804 11 24.7348 11 25V28C11 28.2652 10.8946 28.5196 10.7071 28.7071C10.5196 28.8946 10.2652 29 10 29Z"
        fill={fill}
      />
      <path
        d="M26 28C26 28.5304 25.7893 29.0391 25.4142 29.4142C25.0391 29.7893 24.5304 30 24 30C23.4696 30 22.9609 29.7893 22.5858 29.4142C22.2107 29.0391 22 28.5304 22 28H9V49C9 49.7956 9.31607 50.5587 9.87868 51.1213C10.4413 51.6839 11.2044 52 12 52H28C28.7956 52 29.5587 51.6839 30.1213 51.1213C30.6839 50.5587 31 49.7956 31 49V28H26Z"
        fill="#FFBD4A"
      />
      <path
        d="M26 47C25.7348 47 25.4804 46.8946 25.2929 46.7071C25.1054 46.5196 25 46.2652 25 46V34C25 33.7348 25.1054 33.4804 25.2929 33.2929C25.4804 33.1054 25.7348 33 26 33C26.2652 33 26.5196 33.1054 26.7071 33.2929C26.8946 33.4804 27 33.7348 27 34V46C27 46.2652 26.8946 46.5196 26.7071 46.7071C26.5196 46.8946 26.2652 47 26 47Z"
        fill={fill}
      />
      <path
        d="M20 47C19.7348 47 19.4804 46.8946 19.2929 46.7071C19.1054 46.5196 19 46.2652 19 46V34C19 33.7348 19.1054 33.4804 19.2929 33.2929C19.4804 33.1054 19.7348 33 20 33C20.2652 33 20.5196 33.1054 20.7071 33.2929C20.8946 33.4804 21 33.7348 21 34V46C21 46.2652 20.8946 46.5196 20.7071 46.7071C20.5196 46.8946 20.2652 47 20 47Z"
        fill={fill}
      />
      <path
        d="M14 47C13.7348 47 13.4804 46.8946 13.2929 46.7071C13.1054 46.5196 13 46.2652 13 46V34C13 33.7348 13.1054 33.4804 13.2929 33.2929C13.4804 33.1054 13.7348 33 14 33C14.2652 33 14.5196 33.1054 14.7071 33.2929C14.8946 33.4804 15 33.7348 15 34V46C15 46.2652 14.8946 46.5196 14.7071 46.7071C14.5196 46.8946 14.2652 47 14 47Z"
        fill={fill}
      />
      <path
        d="M58 52H54C53.7348 52 53.4804 51.8946 53.2929 51.7071C53.1054 51.5196 53 51.2652 53 51C53 50.7348 53.1054 50.4804 53.2929 50.2929C53.4804 50.1054 53.7348 50 54 50H58C58.7956 50 59.5587 49.6839 60.1213 49.1213C60.6839 48.5587 61 47.7956 61 47V37C61 36.2044 60.6839 35.4413 60.1213 34.8787C59.5587 34.3161 58.7956 34 58 34H54C53.7348 34 53.4804 33.8946 53.2929 33.7071C53.1054 33.5196 53 33.2652 53 33C53 32.7348 53.1054 32.4804 53.2929 32.2929C53.4804 32.1054 53.7348 32 54 32H58C59.3256 32.0016 60.5964 32.5289 61.5338 33.4662C62.4711 34.4036 62.9984 35.6744 63 37V47C62.9984 48.3256 62.4711 49.5964 61.5338 50.5338C60.5964 51.4711 59.3256 51.9984 58 52V52Z"
        fill={fill}
      />
      <path
        d="M58 48H54C53.7348 48 53.4804 47.8946 53.2929 47.7071C53.1054 47.5196 53 47.2652 53 47C53 46.7348 53.1054 46.4804 53.2929 46.2929C53.4804 46.1054 53.7348 46 54 46H57V38H54C53.7348 38 53.4804 37.8946 53.2929 37.7071C53.1054 37.5196 53 37.2652 53 37C53 36.7348 53.1054 36.4804 53.2929 36.2929C53.4804 36.1054 53.7348 36 54 36H58C58.2652 36 58.5196 36.1054 58.7071 36.2929C58.8946 36.4804 59 36.7348 59 37V47C59 47.2652 58.8946 47.5196 58.7071 47.7071C58.5196 47.8946 58.2652 48 58 48Z"
        fill={fill}
      />
      <path
        d="M54 35C53.7348 35 53.4804 34.8946 53.2929 34.7071C53.1054 34.5196 53 34.2652 53 34V31C53 30.7348 53.1054 30.4804 53.2929 30.2929C53.4804 30.1054 53.7348 30 54 30C54.2652 30 54.5196 30.1054 54.7071 30.2929C54.8946 30.4804 55 30.7348 55 31V34C55 34.2652 54.8946 34.5196 54.7071 34.7071C54.5196 34.8946 54.2652 35 54 35Z"
        fill={fill}
      />
      <path
        d="M34 35C33.7348 35 33.4804 34.8946 33.2929 34.7071C33.1054 34.5196 33 34.2652 33 34V31C33 30.7348 33.1054 30.4804 33.2929 30.2929C33.4804 30.1054 33.7348 30 34 30C34.2652 30 34.5196 30.1054 34.7071 30.2929C34.8946 30.4804 35 30.7348 35 31V34C35 34.2652 34.8946 34.5196 34.7071 34.7071C34.5196 34.8946 34.2652 35 34 35Z"
        fill={fill}
      />
      <path
        d="M50 34C50 34.5304 49.7893 35.0391 49.4142 35.4142C49.0391 35.7893 48.5304 36 48 36C47.4696 36 46.9609 35.7893 46.5858 35.4142C46.2107 35.0391 46 34.5304 46 34H33V55C33 55.7956 33.3161 56.5587 33.8787 57.1213C34.4413 57.6839 35.2044 58 36 58H52C52.7956 58 53.5587 57.6839 54.1213 57.1213C54.6839 56.5587 55 55.7956 55 55V34H50Z"
        fill="#FFBD4A"
      />
      <path
        d="M48 37C47.2044 37 46.4413 36.6839 45.8787 36.1213C45.3161 35.5587 45 34.7956 45 34V31C45 30.7348 44.8946 30.4804 44.7071 30.2929C44.5196 30.1054 44.2652 30 44 30H36C35.7348 30 35.4804 30.1054 35.2929 30.2929C35.1054 30.4804 35 30.7348 35 31C35 31.2652 34.8946 31.5196 34.7071 31.7071C34.5196 31.8946 34.2652 32 34 32C33.7348 32 33.4804 31.8946 33.2929 31.7071C33.1054 31.5196 33 31.2652 33 31C33 30.2044 33.3161 29.4413 33.8787 28.8787C34.4413 28.3161 35.2044 28 36 28H44C44.7956 28 45.5587 28.3161 46.1213 28.8787C46.6839 29.4413 47 30.2044 47 31V34C47 34.2652 47.1054 34.5196 47.2929 34.7071C47.4804 34.8946 47.7348 35 48 35C48.2652 35 48.5196 34.8946 48.7071 34.7071C48.8946 34.5196 49 34.2652 49 34V31C49 30.2044 49.3161 29.4413 49.8787 28.8787C50.4413 28.3161 51.2044 28 52 28C52.7956 28 53.5587 28.3161 54.1213 28.8787C54.6839 29.4413 55 30.2044 55 31C55 31.2652 54.8946 31.5196 54.7071 31.7071C54.5196 31.8946 54.2652 32 54 32C53.7348 32 53.4804 31.8946 53.2929 31.7071C53.1054 31.5196 53 31.2652 53 31C53 30.7348 52.8946 30.4804 52.7071 30.2929C52.5196 30.1054 52.2652 30 52 30C51.7348 30 51.4804 30.1054 51.2929 30.2929C51.1054 30.4804 51 30.7348 51 31V34C51 34.7956 50.6839 35.5587 50.1213 36.1213C49.5587 36.6839 48.7956 37 48 37Z"
        fill={fill}
      />
      <path
        d="M28 19.9999C27.8055 19.9998 27.6153 19.943 27.4526 19.8365C27.2899 19.7299 27.1618 19.5782 27.084 19.3999C26.9701 19.137 26.8038 18.9 26.5953 18.7033C26.3868 18.5067 26.1405 18.3546 25.8713 18.2563C25.6021 18.1579 25.3158 18.1154 25.0296 18.1314C24.7435 18.1473 24.4636 18.2213 24.207 18.3489C24.0737 18.414 23.9276 18.4486 23.7793 18.4502C23.631 18.4518 23.4842 18.4205 23.3495 18.3583C23.2148 18.2962 23.0956 18.2049 23.0006 18.091C22.9055 17.9771 22.837 17.8436 22.8 17.6999C22.667 17.1733 22.381 16.6979 21.978 16.3337C21.5749 15.9696 21.0731 15.7331 20.5357 15.654C19.9983 15.5749 19.4496 15.6569 18.9588 15.8895C18.4679 16.1221 18.057 16.4949 17.778 16.9609C17.707 17.0782 17.6126 17.1797 17.5008 17.259C17.3889 17.3383 17.2619 17.3937 17.1277 17.4219C16.9935 17.45 16.8549 17.4502 16.7206 17.4225C16.5863 17.3949 16.4591 17.3398 16.347 17.2609C15.9916 17.0089 15.5667 16.8733 15.131 16.8729C14.5664 16.8727 14.0249 17.0965 13.6253 17.4954C13.2257 17.8942 13.0008 18.4354 13 18.9999C13 19.2651 12.8946 19.5195 12.7071 19.707C12.5196 19.8946 12.2652 19.9999 12 19.9999C11.7348 19.9999 11.4804 19.8946 11.2929 19.707C11.1054 19.5195 11 19.2651 11 18.9999C10.9995 18.3277 11.1634 17.6655 11.4772 17.071C11.7911 16.4765 12.2456 15.9678 12.801 15.589C13.3564 15.2103 13.9959 14.973 14.664 14.8979C15.332 14.8227 16.0083 14.912 16.634 15.1579C17.1514 14.5941 17.7975 14.1637 18.5171 13.9035C19.2368 13.6432 20.0086 13.5607 20.767 13.663C21.5254 13.7653 22.2478 14.0495 22.8727 14.4912C23.4976 14.9329 24.0065 15.5191 24.356 16.1999C25.2753 16.0279 26.2257 16.1713 27.0534 16.6069C27.881 17.0425 28.5373 17.7448 28.916 18.5999C29.0223 18.8429 29.0278 19.1181 28.9312 19.3651C28.8347 19.6121 28.6439 19.8106 28.401 19.9169C28.2747 19.9725 28.138 20.0008 28 19.9999V19.9999Z"
        fill={fill}
      />
      <path
        d="M24 31C23.2044 31 22.4413 30.6839 21.8787 30.1213C21.3161 29.5587 21 28.7956 21 28V25C21 24.7348 20.8946 24.4804 20.7071 24.2929C20.5196 24.1054 20.2652 24 20 24H12C11.7348 24 11.4804 24.1054 11.2929 24.2929C11.1054 24.4804 11 24.7348 11 25C11 25.2652 10.8946 25.5196 10.7071 25.7071C10.5196 25.8946 10.2652 26 10 26C9.73478 26 9.48043 25.8946 9.29289 25.7071C9.10536 25.5196 9 25.2652 9 25C9 24.2044 9.31607 23.4413 9.87868 22.8787C10.4413 22.3161 11.2044 22 12 22H20C20.7956 22 21.5587 22.3161 22.1213 22.8787C22.6839 23.4413 23 24.2044 23 25V28C23 28.2652 23.1054 28.5196 23.2929 28.7071C23.4804 28.8946 23.7348 29 24 29C24.2652 29 24.5196 28.8946 24.7071 28.7071C24.8946 28.5196 25 28.2652 25 28V25C25 24.2044 25.3161 23.4413 25.8787 22.8787C26.4413 22.3161 27.2044 22 28 22C28.7956 22 29.5587 22.3161 30.1213 22.8787C30.6839 23.4413 31 24.2044 31 25C31 25.2652 30.8946 25.5196 30.7071 25.7071C30.5196 25.8946 30.2652 26 30 26C29.7348 26 29.4804 25.8946 29.2929 25.7071C29.1054 25.5196 29 25.2652 29 25C29 24.7348 28.8946 24.4804 28.7071 24.2929C28.5196 24.1054 28.2652 24 28 24C27.7348 24 27.4804 24.1054 27.2929 24.2929C27.1054 24.4804 27 24.7348 27 25V28C27 28.7956 26.6839 29.5587 26.1213 30.1213C25.5587 30.6839 24.7956 31 24 31V31Z"
        fill={fill}
      />
      <path
        d="M35.9999 26.0001C35.8621 26.0005 35.7258 25.9719 35.5999 25.9161C35.357 25.8097 35.1662 25.6112 35.0697 25.3643C34.9731 25.1173 34.9786 24.842 35.0849 24.5991C35.4631 23.7436 36.1194 23.041 36.9471 22.6054C37.7749 22.1697 38.7255 22.0266 39.6449 22.1991C39.9943 21.5182 40.5031 20.9319 41.1279 20.4901C41.7528 20.0483 42.4752 19.7641 43.2336 19.6616C43.992 19.5592 44.7639 19.6416 45.4836 19.9018C46.2033 20.162 46.8494 20.5923 47.3669 21.1561C47.9927 20.9103 48.669 20.8212 49.3371 20.8966C50.0052 20.9719 50.6447 21.2094 51.2 21.5883C51.7553 21.9673 52.2096 22.4762 52.5233 23.0709C52.837 23.6655 53.0006 24.3278 52.9999 25.0001C52.9999 25.2653 52.8945 25.5197 52.707 25.7072C52.5195 25.8948 52.2651 26.0001 51.9999 26.0001C51.7347 26.0001 51.4803 25.8948 51.2928 25.7072C51.1052 25.5197 50.9999 25.2653 50.9999 25.0001C50.9994 24.4359 50.775 23.8949 50.376 23.496C49.9771 23.097 49.4361 22.8726 48.8719 22.8721C48.4362 22.8725 48.0113 23.008 47.6559 23.2601C47.5438 23.3392 47.4165 23.3943 47.2821 23.4218C47.1477 23.4494 47.0091 23.4488 46.8749 23.4201C46.7406 23.3918 46.6137 23.3362 46.5018 23.2567C46.39 23.1772 46.2957 23.0756 46.2249 22.9581C45.946 22.4911 45.5348 22.1175 45.0433 21.8844C44.5519 21.6513 44.0023 21.5693 43.4643 21.6487C42.9262 21.7282 42.4238 21.9655 42.0207 22.3307C41.6176 22.6959 41.3319 23.1725 41.1999 23.7001C41.1634 23.8445 41.0952 23.9789 41.0002 24.0935C40.9051 24.2082 40.7857 24.3002 40.6505 24.3627C40.5154 24.4253 40.368 24.4569 40.2191 24.4553C40.0702 24.4536 39.9236 24.4187 39.7899 24.3531C39.5337 24.2259 39.2543 24.152 38.9687 24.1361C38.683 24.1201 38.3972 24.1624 38.1284 24.2603C37.8596 24.3582 37.6135 24.5098 37.4051 24.7057C37.1966 24.9016 37.0302 25.1379 36.9159 25.4001C36.8381 25.5784 36.71 25.7301 36.5473 25.8366C36.3846 25.9432 36.1944 26 35.9999 26.0001Z"
        fill={fill}
      />
      <path
        d="M48 37C47.2044 37 46.4413 36.6839 45.8787 36.1213C45.3161 35.5587 45 34.7956 45 34V31C45 30.7348 44.8946 30.4804 44.7071 30.2929C44.5196 30.1054 44.2652 30 44 30H36C35.7348 30 35.4804 30.1054 35.2929 30.2929C35.1054 30.4804 35 30.7348 35 31C35 31.2652 34.8946 31.5196 34.7071 31.7071C34.5196 31.8946 34.2652 32 34 32C33.7348 32 33.4804 31.8946 33.2929 31.7071C33.1054 31.5196 33 31.2652 33 31C33 30.2044 33.3161 29.4413 33.8787 28.8787C34.4413 28.3161 35.2044 28 36 28H44C44.7956 28 45.5587 28.3161 46.1213 28.8787C46.6839 29.4413 47 30.2044 47 31V34C47 34.2652 47.1054 34.5196 47.2929 34.7071C47.4804 34.8946 47.7348 35 48 35C48.2652 35 48.5196 34.8946 48.7071 34.7071C48.8946 34.5196 49 34.2652 49 34V31C49 30.2044 49.3161 29.4413 49.8787 28.8787C50.4413 28.3161 51.2044 28 52 28C52.7956 28 53.5587 28.3161 54.1213 28.8787C54.6839 29.4413 55 30.2044 55 31C55 31.2652 54.8946 31.5196 54.7071 31.7071C54.5196 31.8946 54.2652 32 54 32C53.7348 32 53.4804 31.8946 53.2929 31.7071C53.1054 31.5196 53 31.2652 53 31C53 30.7348 52.8946 30.4804 52.7071 30.2929C52.5196 30.1054 52.2652 30 52 30C51.7348 30 51.4804 30.1054 51.2929 30.2929C51.1054 30.4804 51 30.7348 51 31V34C51 34.7956 50.6839 35.5587 50.1213 36.1213C49.5587 36.6839 48.7956 37 48 37Z"
        fill={fill}
      />
      <path
        d="M50 53C49.7348 53 49.4804 52.8946 49.2929 52.7071C49.1054 52.5196 49 52.2652 49 52V40C49 39.7348 49.1054 39.4804 49.2929 39.2929C49.4804 39.1054 49.7348 39 50 39C50.2652 39 50.5196 39.1054 50.7071 39.2929C50.8946 39.4804 51 39.7348 51 40V52C51 52.2652 50.8946 52.5196 50.7071 52.7071C50.5196 52.8946 50.2652 53 50 53Z"
        fill={fill}
      />
      <path
        d="M44 53C43.7348 53 43.4804 52.8946 43.2929 52.7071C43.1054 52.5196 43 52.2652 43 52V40C43 39.7348 43.1054 39.4804 43.2929 39.2929C43.4804 39.1054 43.7348 39 44 39C44.2652 39 44.5196 39.1054 44.7071 39.2929C44.8946 39.4804 45 39.7348 45 40V52C45 52.2652 44.8946 52.5196 44.7071 52.7071C44.5196 52.8946 44.2652 53 44 53Z"
        fill={fill}
      />
      <path
        d="M38 53C37.7348 53 37.4804 52.8946 37.2929 52.7071C37.1054 52.5196 37 52.2652 37 52V40C37 39.7348 37.1054 39.4804 37.2929 39.2929C37.4804 39.1054 37.7348 39 38 39C38.2652 39 38.5196 39.1054 38.7071 39.2929C38.8946 39.4804 39 39.7348 39 40V52C39 52.2652 38.8946 52.5196 38.7071 52.7071C38.5196 52.8946 38.2652 53 38 53Z"
        fill={fill}
      />
      <path
        d="M36 18C35.4067 18 34.8266 17.8241 34.3333 17.4944C33.8399 17.1648 33.4554 16.6962 33.2284 16.1481C33.0013 15.5999 32.9419 14.9967 33.0576 14.4147C33.1734 13.8328 33.4591 13.2982 33.8787 12.8787C34.2982 12.4591 34.8328 12.1734 35.4147 12.0576C35.9967 11.9419 36.5999 12.0013 37.148 12.2284C37.6962 12.4554 38.1648 12.8399 38.4944 13.3333C38.8241 13.8266 39 14.4067 39 15C39 15.7957 38.6839 16.5587 38.1213 17.1213C37.5587 17.6839 36.7957 18 36 18ZM36 14C35.8022 14 35.6089 14.0587 35.4444 14.1685C35.28 14.2784 35.1518 14.4346 35.0761 14.6173C35.0004 14.8 34.9806 15.0011 35.0192 15.1951C35.0578 15.3891 35.153 15.5673 35.2929 15.7071C35.4327 15.847 35.6109 15.9422 35.8049 15.9808C35.9989 16.0194 36.2 15.9996 36.3827 15.9239C36.5654 15.8482 36.7216 15.72 36.8315 15.5556C36.9414 15.3911 37 15.1978 37 15C37 14.7348 36.8946 14.4804 36.7071 14.2929C36.5196 14.1054 36.2652 14 36 14Z"
        fill={fill}
      />
      <path
        d="M42 8C41.4067 8 40.8266 7.82405 40.3333 7.49441C39.8399 7.16477 39.4554 6.69623 39.2284 6.14805C39.0013 5.59987 38.9419 4.99667 39.0576 4.41473C39.1734 3.83279 39.4591 3.29824 39.8787 2.87868C40.2982 2.45912 40.8328 2.1734 41.4147 2.05765C41.9967 1.94189 42.5999 2.0013 43.148 2.22836C43.6962 2.45543 44.1648 2.83994 44.4944 3.33329C44.8241 3.82664 45 4.40666 45 5C45 5.79565 44.6839 6.55871 44.1213 7.12132C43.5587 7.68393 42.7957 8 42 8ZM42 4C41.8022 4 41.6089 4.05865 41.4444 4.16853C41.28 4.27841 41.1518 4.43459 41.0761 4.61732C41.0004 4.80004 40.9806 5.00111 41.0192 5.19509C41.0578 5.38907 41.153 5.56726 41.2929 5.70711C41.4327 5.84696 41.6109 5.9422 41.8049 5.98079C41.9989 6.01937 42.2 5.99957 42.3827 5.92388C42.5654 5.84819 42.7216 5.72002 42.8315 5.55557C42.9414 5.39112 43 5.19778 43 5C43 4.73478 42.8946 4.48043 42.7071 4.29289C42.5196 4.10536 42.2652 4 42 4V4Z"
        fill={fill}
      />
      <path
        d="M27.5 11C26.8078 11 26.1311 10.7947 25.5555 10.4101C24.9799 10.0256 24.5313 9.47893 24.2664 8.83939C24.0015 8.19985 23.9322 7.49612 24.0673 6.81719C24.2023 6.13825 24.5356 5.51461 25.0251 5.02513C25.5146 4.53564 26.1383 4.2023 26.8172 4.06725C27.4961 3.9322 28.1999 4.00152 28.8394 4.26642C29.4789 4.53133 30.0256 4.97993 30.4101 5.55551C30.7947 6.13108 31 6.80777 31 7.5C31 8.42826 30.6313 9.3185 29.9749 9.97487C29.3185 10.6313 28.4283 11 27.5 11V11ZM27.5 6C27.2033 6 26.9133 6.08798 26.6666 6.2528C26.42 6.41762 26.2277 6.65189 26.1142 6.92598C26.0007 7.20007 25.9709 7.50167 26.0288 7.79264C26.0867 8.08361 26.2296 8.35088 26.4393 8.56066C26.6491 8.77044 26.9164 8.9133 27.2074 8.97118C27.4983 9.02906 27.7999 8.99935 28.074 8.88582C28.3481 8.77229 28.5824 8.58003 28.7472 8.33336C28.912 8.08668 29 7.79667 29 7.5C29 7.10218 28.842 6.72065 28.5607 6.43934C28.2794 6.15804 27.8978 6 27.5 6Z"
        fill={fill}
      />
    </svg>
  );
};

export default TwoBeerIcon;
