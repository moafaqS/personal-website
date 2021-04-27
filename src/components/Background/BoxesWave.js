import React from "react"
import "./BoxesWave.css"
import styled from "styled-components"

export const BoxesWave = () => {
  return (
    <Wrapper>
      <svg
        width="740"
        height="699"
        viewBox="0 0 740 699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <g id="Rectangle1" opacity="0.25" filter="url(#filter0_d)">
            <rect
              x="122.416"
              y="35.98118"
              width="450"
              height="450"
              rx="137.5"
              transform="rotate(9 122.416 0.98118)"
              stroke="black"
            />
          </g>
          <g id="Rectangle1_2" opacity="0.5" filter="url(#filter1_d)">
            <rect
              x="122.445"
              y="35.958644"
              width="450"
              height="450"
              rx="137.5"
              transform="rotate(6 122.445 0.958644)"
              stroke="black"
            />
          </g>
          <g id="Rectangle1_3" opacity="0.75" filter="url(#filter2_d)">
            <rect
              x="122.473"
              y="35.934601"
              width="450"
              height="450"
              rx="137.5"
              transform="rotate(3 122.473 0.934601)"
              stroke="black"
            />
          </g>
          <g id="Rectangle1_4" filter="url(#filter3_d)">
            <rect
              x="122.5"
              y="35.909119"
              width="450"
              height="450"
              rx="137.5"
              stroke="black"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="26.7061"
            y="35.409119"
            width="705.245"
            height="680.379"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="56.998"
            y="0.409119"
            width="679.146"
            height="652.523"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d"
            x="87.457"
            y="0.409119"
            width="651.207"
            height="622.899"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d"
            x="118"
            y="0.409119"
            width="621.505"
            height="591.591"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  padding: 10px;
  top: 140px;
  left: -160px;

  @media (max-width: 450px) {
    display: none;
  }
`
