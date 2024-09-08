import React, { forwardRef } from "react";
import { ColorValue, Dimensions, ViewProps } from "react-native";
import Svg, { GProps, Path } from "react-native-svg";

export interface SvgProps extends GProps, ViewProps {
  width?: number;
  height?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  color1?: ColorValue;
  color2?: ColorValue;
  title?: string;
}

export const Logo = forwardRef(function LogoImpl(
  {
    color1 = "#172031",
    color2 = "#6C9CFA",
    width: w,
    height: h,
    ...props
  }: SvgProps,
  ref
) {
  const width = w;
  const height = h;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      style={[{ width, height }, props.style]}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.84 116.859C71.84 118.446 70.5535 119.732 68.9664 119.732H50.7669C49.1799 119.732 47.8933 118.446 47.8933 116.859L47.8933 88.644L19.2234 117.782C18.1103 118.914 16.2909 118.928 15.1597 117.815L2.18679 105.051C1.05552 103.938 1.04077 102.119 2.15384 100.987L30.8335 71.8392H2.8736C1.28656 71.8392 0 70.5527 0 68.9657V50.7664C0 49.1793 1.28655 47.8928 2.8736 47.8928H47.8906H47.8933H71.8373V71.8392H71.84V116.859Z"
        fill="#172031"
      />
      <Path
        d="M47.8906 68.9658C47.8906 70.5528 49.1772 71.8394 50.7642 71.8394H116.857C118.444 71.8394 119.731 70.5528 119.731 68.9658V50.7665C119.731 49.1794 118.444 47.8929 116.857 47.8929L71.8373 47.8929L71.8373 2.87358C71.8373 1.28655 70.5508 2.59466e-06 68.9637 2.38655e-06L50.7642 0C49.1772 -2.08114e-07 47.8906 1.28654 47.8906 2.87358L47.8906 68.9658Z"
        fill="#6C9CFA"
      />
    </Svg>
  );
});

export const Text = forwardRef(({ ...props }: SvgProps, ref) => {
  return (
    <Svg
      // @ts-ignore
      ref={ref}
      {...props}
      viewBox="0 0 360 157"
      fill="none"
      style={[props.style, { width: "100%", aspectRatio: 360 / 157 }]}
    >
      <Path
        d="M4.44824 0L22.0189 0C24.0586 0 25.7406 1.64654 25.7406 3.72262V94.4615C25.7406 96.5017 27.3867 98.1841 29.4622 98.1841H72.3332C74.3729 98.1841 76.0548 99.8306 76.0548 101.907V116.01C76.0548 118.05 74.4087 119.732 72.3332 119.732H4.44824C2.40848 119.732 0.726562 118.086 0.726562 116.01L0.726562 3.72262C0.726562 1.64654 2.37269 0 4.44824 0Z"
        fill="#172031"
      />
      <Path
        d="M83.4083 40.7282C89.5263 32.871 100.009 28.9424 114.893 28.9424C124.588 28.9424 133.175 30.8887 140.688 34.7452C148.202 38.6017 151.958 45.9183 151.958 56.6589V97.5308C151.958 100.378 151.994 103.802 152.137 107.839C152.28 110.902 152.745 112.957 153.533 114.038C154.077 114.822 154.828 115.511 155.773 116.105C156.457 116.536 156.931 117.256 156.931 118.064V118.064C156.931 119.224 155.991 120.165 154.83 120.165H134.427C132.781 120.165 131.315 119.048 130.849 117.462C130.635 116.633 130.42 115.876 130.313 115.083V115.083C129.948 113.064 127.322 112.134 125.77 113.477C123.578 115.374 121.202 117.072 118.649 118.579C113.676 121.463 108.059 122.905 101.762 122.905C93.748 122.905 87.1292 120.598 81.9056 115.984C76.6821 111.371 74.0703 104.847 74.0703 96.4135C74.0703 85.4566 78.2563 77.5273 86.6641 72.6256C91.2436 69.9585 98.0414 68.0482 106.95 66.8949L114.821 65.9217C119.079 65.3811 122.156 64.6963 123.98 63.8673C127.272 62.4617 128.917 60.2271 128.917 57.2355C128.917 53.5953 127.665 51.0723 125.161 49.6667C122.656 48.261 118.936 47.5762 114.07 47.5762C108.596 47.5762 104.732 48.9458 102.478 51.649C101.297 53.0907 100.438 54.9288 99.8302 57.0914C99.4009 58.6772 97.934 59.7945 96.2883 59.7945H81.0827C78.793 59.7945 77.0399 57.7041 77.3976 55.3974C78.3279 49.5585 80.3314 44.7649 83.4083 40.7282ZM100.617 103.334C102.764 105.136 105.447 106.037 108.56 106.037C113.533 106.037 118.113 104.559 122.299 101.64C126.485 98.6841 128.667 93.3138 128.846 85.5287V76.8786C127.379 77.8157 125.912 78.5365 124.41 79.1132C122.907 79.6899 120.868 80.2305 118.292 80.699L113.104 81.6722C108.238 82.5372 104.732 83.6185 102.621 84.8439C99.0431 86.9704 97.2542 90.2502 97.2542 94.7195C97.2542 98.6841 98.3634 101.568 100.582 103.298L100.617 103.334Z"
        fill="#172031"
      />
      <Path
        d="M191.44 85.1271L204.996 34.7337C205.424 33.1151 206.851 32 208.456 32H224.474C226.936 32 228.684 34.5538 227.863 36.9638L200.18 119.442C194.544 136.312 190.049 146.743 186.767 150.808C183.484 154.872 176.885 156.886 166.967 156.886C164.97 156.886 163.4 156.886 162.187 156.85C161.652 156.85 161.01 156.814 160.225 156.778C158.298 156.671 156.764 155.052 156.764 153.038V140.79C156.764 139.261 158.056 138.049 159.583 138.146V138.146C161.795 138.254 163.864 138.146 165.861 137.894C167.859 137.607 169.536 136.995 170.891 136.024C172.211 135.089 173.424 133.182 174.53 130.233C175.672 127.283 176.1 125.485 175.922 124.837L146.205 36.9638C145.384 34.5538 147.132 32 149.594 32H166.718C168.323 32 169.714 33.0791 170.178 34.6617L184.555 85.163C185.589 88.76 190.477 88.724 191.44 85.1271Z"
        fill="#172031"
      />
      <Path
        d="M293.408 96.4455C296.014 96.4455 297.8 99.0867 296.871 101.583C295.55 105.201 293.229 108.891 289.945 112.618C282.376 121.301 271.807 125.679 258.204 125.679C246.957 125.679 237.067 122.025 228.498 114.68C219.93 107.336 215.609 95.4325 215.609 78.8983C215.609 63.4133 219.465 51.5463 227.213 43.2973C234.961 35.0483 245.029 30.9238 257.383 30.9238C264.738 30.9238 271.343 32.3348 277.234 35.1207C283.125 37.9065 287.981 42.3205 291.801 48.3263C295.265 53.6448 297.478 59.7954 298.514 66.7781C299.013 70.179 299.263 74.81 299.263 80.7073C299.263 82.8057 297.621 84.5062 295.55 84.5062H242.887C240.638 84.5062 238.888 86.5684 239.21 88.8116C240.174 95.5049 242.816 100.389 247.172 103.392C250.349 105.635 254.205 106.757 258.668 106.757C263.417 106.757 267.273 105.382 270.236 102.668C271.45 101.547 272.557 100.136 273.557 98.3631C274.199 97.2415 275.306 96.5179 276.591 96.5179H293.372L293.408 96.4455ZM271.022 69.0574C273.342 69.0574 275.163 66.8866 274.663 64.6073C273.807 60.5913 272.164 57.3713 269.701 54.9834C266.38 51.7996 262.274 50.1715 257.347 50.1715C251.992 50.1715 247.85 51.872 244.922 55.2729C242.816 57.6969 241.28 60.736 240.281 64.354C239.638 66.7057 241.459 69.0574 243.887 69.0574H270.986H271.022Z"
        fill="#172031"
      />
      <Path
        d="M343.205 55.2125C333.9 55.2125 327.637 58.2616 324.451 64.3239C322.662 67.7316 321.767 73.0047 321.767 80.1073V118.777C321.767 120.821 320.121 122.507 318.045 122.507H302.191C300.151 122.507 298.469 120.857 298.469 118.777V37.528C298.469 35.4833 300.115 33.7973 302.191 33.7973H316.828C318.868 33.7973 320.55 35.4474 320.55 37.528C320.55 40.9716 324.845 42.5141 327.1 39.9313C328.066 38.7835 328.997 37.8867 329.891 37.1692C334.222 33.5462 339.841 31.7168 346.784 31.7168C347.213 31.7168 347.571 31.7168 347.893 31.7527C348.078 31.7527 352.595 31.7825 356.059 31.8133C358.214 31.8325 359.921 33.5691 359.921 35.7244V51.0884C359.921 53.49 357.809 55.4918 355.408 55.4406C351.597 55.3593 346.727 55.3072 345.996 55.2843C344.851 55.2484 343.92 55.2125 343.241 55.2125H343.205Z"
        fill="#172031"
      />
    </Svg>
  );
});