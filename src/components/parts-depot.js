import { css } from 'linaria'
import React from 'react'

export const PartsDepot = () => {
  return (
    <svg
      className={hide}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 686 705"
    >
      <defs>
        <g id="head-outline">
          <path d="M93.84,235.18c0.02-3.12,0.11-16.36,7.05-19.6c4.05-1.89,6.36,1.52,12.55-0.88c3.43-1.33,7.93-4.4,7.93-4.4c0,0,15.19-3.52,15.19-3.52c0,0,0.12-6.23,0.88-12.33c0.85-6.75,1.9-8.72,0.66-12.11c-0.64-1.73-1.57-3-2.25-3.8c-4.35-3.42-41.02-33.09-35.62-68.64c1.92-12.62,8.53-21.97,15.41-31.71c16.14-22.83,37.2-34.57,47.08-39.94c13.6-7.4,33.95-15.76,33.95-15.76c0,0,21.22-13.17,35.89-20.04c19.07-8.93,35.43-11.1,48.47-12.84c31.27-4.16,90.5-3.67,145.29,31.78c31.76,20.55,47.34,43.33,52.62,51.74c6.73,10.72,14.4,22.92,15.85,39.19c0.56,6.29,1.1,23.34,1.1,23.34c0,0,4.8,8.7,7.27,16.51c2.97,9.39,2.62,17.62,2.42,21.36c0,0-0.17,3.24-2.42,17.61c0,0,11.21,3.97,12.61,4.52c13.13,5.17,22.79,48.27,15.14,90.38c-3.68,20.24-6.91,38.03-18.28,49.32c-2.14,2.13-7.92,7.35-11.45,16.29c-2.64,6.71-2.63,11.97-2.86,18.28c0,0-0.09,15.98-4.4,40.95c-1.98,11.47-6.96,21.64-16.84,41.5c-6.71,13.49-15.5,31.16-27.41,48.55c-11.77,17.18-34.65,50.58-76.98,74.26c-20.05,11.22-58.67,32.81-104.67,23.17c-8.94-1.87-34.34-7.54-55.16-28.4c-10.02-10.05-15.08-19.72-23.78-36.33c0,0-6.44-12.31-23.67-58.02l0,0c0,0-12.84-38.1-19.38-77.28c-6.28-37.63-6.77-76.32-6.77-76.32c0,0-9.15-5.34-13.49-8.89c-7.87-6.45-10.34-15.56-13.21-26.2c-4.28-15.85-1.12-21.32-7.49-28.4c-2.83-3.15-5.35-4.18-7.93-8.81C93.85,243.79,93.83,238.01,93.84,235.18z" />
        </g>
        <g id="neck">
          <path d="M287 611.5c13.6 2.3 55.6 8.7 102.3-11.1 18-7.7 30-16.4 33-18.6 9.4-7 31.8-23.7 42.5-50a62 62 0 003.3-10.2c2-9.2 1-14.4 0-30.3v-.6-.3l-.5-14.3v-15c.1-6.3.4-14.4 1-24-17 5.9-62.4 29.3-114 37.4-73.4 11.4-149-9.5-149-9.5a549.7 549.7 0 004 28.8l1 6.3c2 12 3 20.8 3.4 25.5l.3 3.7c1 11.9 2.3 27.5 9 41.9 1 2.1 5 10.7 12.2 18.4 3 3.1 15.6 16 51.4 21.9z" />
        </g>
        <g id="face-fill">
          <path d="M517.2 237.3V236a71 71 0 00-3.7-18.6l-.2-1c-.2-1.1-1.8-8.4-8.4-11.6-2.2-1.1-4.3-1.4-5.8-1.5a15 15 0 00-8.1 2.3l-1.7.5a259.1 259.1 0 00-25.6-88.6c-2.3-4.6-23-44.1-56-67.7-47.5-34-123.6-37-181.1-.8-54 34-70.3 89-74.2 103.9-1 8.8-1.4 16-1.6 21-.5 9.6-.2 12.7-.4 17.4l-.4 6c-1.4 14.6-2 21.8-1.8 25.8.7 12.3 5 15.8 5.3 31.8v3.8c-.1 3-.6 6.8-2.7 24.6-.6 5.5-1 11.6-1.2 18-.2 10.2.6 16 1.4 24.4 1.3 16 3.2 52 9 70.9l.1.2c6.6 23 17.3 49.1 33.2 68 5.3 7.5 10.2 13.6 14 18l10.3 14.9c3.2 5.2 6 10 11 16.3 2.6 3.3 7 8.9 11.9 13.5a34 34 0 006.1 5c9.3 6 18.4 6.6 32.1 6.7h5a152.4 152.4 0 0053.9-9.4c25.4-9.6 47.3-25.9 73.2-45.2l4.1-3a209 209 0 0040.7-35.2 87 87 0 0017.8-28.4c4.4-11.4 5.4-21.6 6.2-29.8.7-5.5.8-8 .8-8 0-2 0-5.9.2-10.7l.2-5.3c.3-6.5 1-13.9 2.2-20.1 1-3.8 2.2-7 3.4-9.7l.1-.3c3.3-5.1 7.7-7 11-9.3a20 20 0 004.2-3.8 68 68 0 007.5-13.8c6.9-14.6 7.4-27.6 8.3-51.7.4-9.3-.2-17.2-.3-18.3z" />
        </g>
        <g id="hair">
          <path d="M448.8 223.6c-2.8-1.2-9.3-27.1-22.3-78.9-11.9-39.7-49-90.5-97-103.8-57.3-15.8-130.7 21.7-171.8 95.4 2.9-9 8.5-21 16-34.8a131 131 0 0136.2-40 182.5 182.5 0 01108.6-38.3c13 0 43 .5 75 17.9 0 0 40.9 22.1 63.2 64a406.3 406.3 0 0113.9 29.5c3.5 8.6 13.6 34.5 10.2 25.9 4.3 17.1 8.5 45.7 8.5 45.7s-26.6 23.4-40.5 17.4z" />
        </g>
        <g id="face-outline">
          <path d="M517.2 237.3V236a71 71 0 00-3.7-18.6l-.2-1c-.2-1.1-1.8-8.4-8.4-11.6-2.2-1.1-4.3-1.4-5.8-1.5a15 15 0 00-8.1 2.3l-1.7.5a259.1 259.1 0 00-25.6-88.6c-2.3-4.6-23-44.1-56-67.7-47.5-34-123.6-37-181.1-.8-54 34-70.3 89-74.2 103.9-1 8.8-1.4 16-1.6 21-.5 9.6-.2 12.7-.4 17.4l-.4 6c-1.4 14.6-2 21.8-1.8 25.8.7 12.3 5 15.8 5.3 31.8v3.8c-.1 3-.6 6.8-2.7 24.6a189.6 189.6 0 00-1.1 26c.2 7 .8 10.5 1.3 16.4 1.2 14.5 0 17.2 1.8 28.2a109 109 0 001.7 8.4 178.4 178.4 0 006.1 36.4 235.4 235.4 0 0046.7 84.2l10.3 14.8c3.2 5.2 6 10 11 16.3 2.6 3.3 7 8.9 11.9 13.5a34 34 0 006.1 5c9.3 6 18.4 6.6 32.1 6.7h5a152.4 152.4 0 0053.9-9.4c25.4-9.6 47.3-25.9 73.2-45.2l4.1-3a209 209 0 0040.7-35.2 87 87 0 0017.8-28.4c4.4-11.4 5.4-21.6 6.2-29.8.7-5.5.8-8 .8-8 0-2 0-5.9.2-10.7l.2-5.3c.3-6.5 1-13.9 2.2-20.1 1-3.8 2.2-7 3.4-9.7l.1-.3c3.3-5.1 7.7-7 11-9.3a20 20 0 004.2-3.8 68 68 0 007.5-13.8c6.9-14.6 7.4-27.6 8.3-51.7.4-9.3-.2-17.2-.3-18.3z" />
        </g>
        <g id="beard">
          <path d="M 487 208.2 C 485.6 208.8 483.6 210 481.8 211.9 C 473.5 220.5 475.4 237.7 475.4 237.7 C 478.3 271.4 481.2 305.1 484.1 338.8 C 484.9 349.4 485.2 363.2 483.6 379.2 C 482.6 389 480.7 406.9 473.7 426.8 C 459.6 466.8 430.8 498.4 430.8 498.4 C 430.8 498.4 388.9 568.2 322.2 580 C 280.8 587.3 262.1 584.1 251.3 579.9 C 244 577 238.8 574.1 237.2 573.1 C 222.9 564.4 208.1 549.5 185.3 491.5 C 178 472.9 173 460.1 167.5 440.4 C 160.4 415 154 383.1 151.9 345.6 C 151.9 345.6 151.9 345.6 151.9 345.6 C 157.2 373.1 191.4 428.3 191.4 428.3 C 193.7 429.5 195.4 429.7 196.5 429.1 C 199.8 427.2 198.6 417.7 193 400.8 C 184.7 375.9 184 368.5 185.2 366.6 C 188.2 361.9 190.2 359.5 192.7 358.4 C 200.1 355.2 208.1 357.4 214.5 359.7 C 222.5 362.6 226.9 366.2 229.8 367.9 C 237.4 372.4 251.3 374.3 278.8 360.7 C 290.4 356.9 307.6 353.1 328.2 355.1 C 330.2 355.3 363 357.6 373.4 371.1 C 377 375.8 378 380.9 378 380.9 C 375.6 408.6 373.1 422.4 370.4 422.4 C 369.6 422.4 368.8 421.2 368 418.8 C 363.2 405.8 357.4 396.5 353.2 394.4 C 353 394.3 350.1 392.9 346.1 391.3 C 345 390.8 343.6 390.4 341.9 389.9 C 335.8 388.1 331.1 387.8 324.7 387.4 C 318.1 387 312.1 386.6 304.3 387.9 C 299 388.8 295.2 390 289.8 391.8 C 284.05 393.7 281.3 394.975 279.3 395.938 C 277.3 396.9 276.05 397.55 273.3 398.2 C 265.6 400.1 257.975 399.225 252.188 397.825 C 246.4 396.425 242.45 394.5 242.1 394.3 C 239.05 392.8 236.95 391.3 234.8 390.063 C 232.65 388.825 230.45 387.85 227.2 387.4 C 222.2 386.7 216.5 387.5 215 387.7 C 212.1 388.1 209.7 388.4 208.1 389.1 C 200 392.7 197.6 413.9 204.3 431.2 C 209.5 444.8 221.5 459.9 230.1 457.9 C 234.2 456.9 236.7 452.4 237.6 451 C 241.7 443.9 239.2 436.6 238.8 435.3 C 242.6 438 248.8 441.7 257.1 443.6 C 259.2 444.1 264.4 445.1 275.9 444.4 C 283 443.9 292.9 442.8 304.7 439.6 C 301.3 448.9 301.9 457.6 306.6 461.5 C 310.9 465.1 317.3 463.5 325.4 461 C 332.8 458.8 358.6 451 366.1 428.2 C 367.4 424.1 367.8 420.7 368 418.6 C 397.6 409.5 440.2 390.5 452.3 353.4 C 455.6 343.2 454.7 325.7 452.2 290.9 C 449.3 250.1 441.8 207.7 441.8 207.7 C 441.8 207.7 444 207.3 448.4 206.4 C 465.4 203 468.7 201.6 474.2 202.4 C 477.2 202.9 481.7 204.1 487 208.2 Z" />
        </g>
        <g id="left-lid">
          <path d="M291 246.4a40.5 40.5 0 0115.7-16.7c9.5-5.3 18.6-5 26.2-4.8a65 65 0 0120.9 4c7.6 3.1 8 5.8 20.2 12.3 2.6 1.4 4.4 2.3 7 2.8 5.2 1.2 9.8.3 12.6-.6M369.5 247.4c.9.6 17.5 6.6 25.1 2.8" />
        </g>
        <g id="right-lid">
          <path d="M215 238.8a39.5 39.5 0 00-10.5-5.2c-12.8-4-31.4-2.5-37.7 8a46.3 46.3 0 00-4 10.4" />
        </g>
        <g id="left-eye">
          <circle cx="335.5" cy="243" r="10" />
        </g>
        <g id="right-eye">
          <circle cx="196.1" cy="249.8" r="10" />
        </g>
        <g id="forehead-wrinkles">
          <path d="M157.2,163.5c27.1-12.9,46-13.6,58.5-11.6c5.2,0.8,14.9,3,28.4,1.7c11.8-1.1,19.9-4.3,24.9-6c34.4-11.9,77.1-9.6,108.8,1.4c3.7,1.3,6.6,2.5,8.3,3.2" />
          <path d="M210.5,138.6c2.2,0.1,5.4,0.3,9.2,1.2c5,1.2,6.2,2.3,11,3.6c3,0.8,7.6,2,13.3,1.5c1.1-0.1,6.8-0.7,12.9-4c4.8-2.6,5.6-4.5,10.5-6.9c3.5-1.6,6.6-2.3,8.6-2.6" />
          <path d="M319.3,130.4c14.3-0.7,33.9,0.3,55.3,7.9c6.7,2.3,12.6,5,18,7.8" />
          <path d="M156.7,153.9c6.6-2.9,13.9-5.8,21.8-8.4c4.5-1.5,9-2.8,13.2-4" />
        </g>
        <g id="ear-outline">
          <path d="M498 253.7c1.1 1.2 7.2 8 6.1 17.1-.6 5.5-4 14-9.4 14.2-4.7.3-10.3-5.4-11.5-14.2-3.2-18.2 6.1-49.4 12.8-48.7 3.4.3 5.9 4.2 6.8 5.9 4.7 8.8 2.6 17.8 2.6 17.8" />
        </g>
        <g id="ear-shadow">
          <path d="M484 270a183 183 0 01-1-9.3c-.7-7.2-.4-8.5.5-9.6 2.6-3.1 9.1-1.5 9.5-1.4 7.2 1.9 13.5 12.3 12 21.7-.8 5.2-4.3 12.6-9.4 13-4.3.3-7.9-4.4-8-4.6 0 0-1.2-1.6-3.5-9.7z" />
        </g>
        <g id="lower-lip">
          <path d="M209.1,387.3c3.3,6.1,5.7,11.1,7.2,14.5c3,6.7,3.8,9.3,6.7,14.4c1.7,3,3.7,6.6,7,10.5c2.3,2.7,7,8.3,15.1,12.5c9.2,4.9,17.7,5.3,22.1,5.4c3.1,0.1,5.5-0.1,10.1-0.5c8.5-0.7,16-1.3,24.4-3.7c11.9-3.4,20.1-8.5,25.6-12c8.5-5.4,16.2-10.3,22.2-19.8c3.5-5.4,7.1-13.5,5.4-14.9c-2-1.6-8.9,7.6-25.4,17.6c-10.5,6.3-19.5,9.7-23.2,11c-6.8,2.4-12.7,3.7-16.1,4.5c-6.8,1.5-11.1,2.1-12.4,2.2c-3.9,0.5-6.9,0.8-11.1,0.6c-2.2-0.1-6.5-0.4-11.6-2c-6.1-2-10.1-4.9-12.7-6.7c-10.4-7.6-16.9-17.9-19.9-23.4" />
        </g>
        <g id="teeth">
          <path
            transform="translate(-10 0)"
            d="M 220.9 388.1 C 224.7 390.7 229.5 394.6 234.3 400 C 237.45 403.6 239.075 406.225 240.713 408.725 C 242.35 411.225 244 413.6 247.2 416.7 C 249.8 419.3 254.7 423.9 262.1 426.9 C 265.4 428.2 270.7 429.4 280.7 429.6 C 286.4 429.7 296.3 428.5 312.2 423.7 C 325.5 419.7 342 411.8 362.8 394.4 C 357 392 348.7 389.2 338.4 387.9 C 326 386.3 316.5 387.6 313.9 388 C 307.3 388.967 302.744 390.456 299.015 392.026 C 295.285 393.596 292.381 395.248 289.085 396.541 C 285.789 397.833 282.1 398.767 276.8 398.9 C 274.7 398.95 271.7 399.1 268.15 398.837 C 264.6 398.575 260.5 397.9 256.2 396.3 C 254.3 395.6 253.625 395.175 252.625 394.587 C 251.625 394 250.3 393.25 247.1 391.9 C 241.2 389.4 237.7 387.9 232.9 387.3 C 230.2 386.8 226 386.7 220.9 388.1 C 220.9 388.1 220.9 388.1 220.9 388.1"
          />
        </g>
        <g id="crinkles">
          <path d="M198.3 423.3c-1.1-5.7-3-14.5-6-25.1-5.2-18.8-8.7-25-6.8-33.6 1.2-5 4.6-12.7 16.3-20.5M317.6 333c20.4 21.6 28 22.3 41 28.5 10.6 4.8 15.8 8.8 18.3 15 .5 1.5 1.7 4.8-.7 17.5-1.1 6.2-3.2 14.9-7 25" />
        </g>
        <g id="nose-shadow">
          <path d="M248.7 249.4c-2.1-4-13.9-2.9-13.9-2.9-13.4 38.8-10.7 54.8-18.6 69-.9 1.6-4.3 7.4-5.7 15.8-.3 2-.5 3.4-.5 5.2.2 7.7 4.9 13.3 10.2 19.4 5.6 6.6 9.8 11.3 17 13.6 4.6 1.4 12.2.1 12-.1a167 167 0 01-6.1-20c-6.4-26.7-6.7-57-1.3-72.6 2.4-7.2 2.6-15 6-21.8.6-1.5 1.8-3.8.9-5.6z" />
        </g>
        <g id="nose-outline">
          <path d="M293.6 345c-24.9 17-45 26-50.4 25.6a26.3 26.3 0 01-13.4-4.7 79.1 79.1 0 01-17.4-21.5c-.6-1-.9-1.4-1-1.8-4.5-8.5 3.5-24.6 4.3-26 5.2-10.5 9-29.6 18.7-69.2" />
        </g>
        <g id="right-brow-shadow">
          <path d="M223.9 226.2l-.5-28.5c-37-10.3-50-9.4-54.5-6-1.1.8-3.7 3.3-8.4 5.7-6.3 3.1-9.4 2.6-10.7 5.3-1.1 2.4.8 4.1 1.5 10.6.3 3 .2 5.5 0 7.2a161.4 161.4 0 0172.6 5.7z" />
        </g>
        <g id="right-brow">
          <path d="M224 203.6l-1.5-16.3c-25.4-9.3-46.6-10.5-55-6.2-4.4 2.2-8.5 5.7-8.5 5.7-1.6 1.4-7.3 6.4-8.6 11.7a31.6 31.6 0 00-.6 8c4.2-4 10-8.5 18-11.5 26.7-10.3 52.5 6.2 56.2 8.6z" />
        </g>
        <g id="left-brow-shadow">
          <path d="M270.6 218.3l-4.4-25a292.9 292.9 0 0184.6-12c22.3.3 35.4 3.3 43.6 13.1a36.6 36.6 0 017.7 21.2 262 262 0 01-24.5-2.1c-11-1.5-11.3-2.3-20.2-3.6a178.6 178.6 0 00-62.6 2.2c-9.7 2-18 4.3-24.2 6.2z" />
        </g>
        <g id="left-brow">
          <path d="M267 198l-3.4-17.6c14-5 50-16.7 84.6-12 16 2.2 24.8 7 29.7 10.1a65 65 0 0121.6 24.2 112 112 0 00-46.4-19.2c-17-2.7-30.4-.3-44.1 2.3-10.9 2-25.4 5.6-42 12.3z" />
        </g>
        <g id="mask-base">
          <path d="M402.62 339.33c-.01-.01-130.12-93.13-130.13-93.14 0 0-9.52-6.2-18.5-7.27-13.29-1.57-27.08 7.93-27.08 7.93s-18.52 19.1-33.69 38.31c-13.17 16.68-47.3 70.63-35.67 52.84 0 0 2.47 46.95 9.91 82.57 8.07 38.65 17.06 81.67 52.84 105.69 4.37 2.93 32.8 21.4 68.7 15.19 29.27-5.06 47.28-23.72 59.45-36.33 37.53-38.89 52.84-94.46 52.84-94.46l1.33-71.33z" />
        </g>
        <g id="mask-shadow">
          <path d="M242.25 297.49c-.73 12.9-1.2 21.19 3.96 29.06 4.68 7.14 10.18 8.27 31.71 17.61 21.13 9.17 31.81 13.87 37.43 19.82 14.42 15.24 14.16 36.07 14.09 38.75-.6 22.66-15.5 38.07-21.79 44.38-31.37 31.5-69.06 20.93-75.97 42.37-4.18 12.97 6.08 27.81 14.09 34.79 23.3 20.31 60.76 4.34 67.66 1.16 19.89-9.14 30.94-23.87 47.27-45.64 12.7-16.93 8.81-16.95 28.7-45.75 5.76-8.33 9.73-13.61 12.14-22.62 1.39-5.21 2.01-10.73.11-34.24-1.47-18.16-2.21-27.25-3.52-30.17-6.87-15.22-23.45-25.8-38.75-28.4-12.1-2.06-15.2 2.26-27.74-1.32-3.41-.98-15.1-4.32-23.64-14.24-11.32-13.15-4.5-23.19-14.3-36-8.41-10.99-25.38-19.2-36.66-14.17-12.59 5.64-13.73 25.81-14.79 44.61z" />
        </g>
        <g id="mask-airflow-shadow">
          <path d="M203.89,375.82c-16.35,23.76-7.51,58.67,14.63,72.87c17.73,11.38,37.54,5.56,40.17,4.75c20.77-6.45,38.42-27.25,36.74-52.24c-1.42-21.12-16.3-40.09-37.65-45.58C236.49,350.15,214.99,359.69,203.89,375.82z" />
        </g>
        <g id="mask-airflow">
          <circle cx="240.11" cy="406.45" r="47.44" />
        </g>
        <g id="mask-breather">
          <path d="M275.94 385.01s8.14 10.79 7.6 22.13c-.09 1.88-.9 13.84-2.97 18.17-.15.32-.75 1.52-.26 2.37.65 1.11 2.82 1.07 3.56.93 4.1-.73 6.17-11.42 6.61-19.49.81-14.77-3.3-30.58-7.6-30.72-2.84-.08-6.94 6.61-6.94 6.61z" />
        </g>
        <g id="mask-nose-clamp">
          <path d="M230.8 282.96c-1.42 2.02-1.62 2.88-4.62 9.91-5.12 11.96-5.4 11.48-7.93 17.83-3.97 9.98-6.58 19.45-6.17 19.6.28.1 1.83-4.05 7.27-16.51 6.76-15.5 3.51-7.12 7.84-16.99 3.18-7.25 4.2-10.09 7.57-12.73.89-.69 4.57-3.51 9.47-3.74 5.66-.27 10.32 3.02 18.5 11.01 10.1 9.87 10.36 12.05 19.16 21.14 9.97 10.29 21.58 19.82 21.58 19.82-1.53-.17 3.43.98 4.62 0 1.16-.96 1.1-3.52 1.1-3.52-23.28-20.69-26.42-24-26.42-24-7.83-8.26-9.39-11.42-19.16-20.92-10.1-9.82-13.82-11.69-17.83-11.45-7.91.45-13.8 8.87-14.98 10.55z" />
        </g>
        <g id="mask-band-left">
          <path d="M402.49,339.33c47.92-86.56,73.38-132.56,73.38-132.56c0,0.01,1.72,0.71,2.86,1.76c1.7,1.58,2.31,4.14,2.31,4.13c-16.09,28.06-29.5,51.35-39.28,68.29c-16.96,29.4-39.32,68.05-39.33,68.05c-2.79-1.29-4.29-1.98-4.29-1.98c0,0-6.93,2.39-11.67,4.91c-4.37,2.32-9.93,5.27-12.56,10.88c-3.07,6.57-0.58,13.47,0.78,17.24c4.75,13.17,17.27,19.9,20.54,20.24c0.47,0.05,3.48,0.25,6.88,1.89c0,0,0,0,0,0c0,0,66.39,37.43,66.39,37.43c0,0-3.67,7.81-3.67,7.81c-22.96-12.1-36.53-20.32-63.66-36.75c0,0-18.28-11.76-27.46-24.26c-2.26-3.08-4.39-6.81-5.29-11.63c-0.82-4.39-0.34-8.14,0.17-10.54c1.12-2.75,3.15-6.7,6.91-10.24c2.86-2.7,5.42-3.92,11.14-6.74C389.97,345.61,395.41,342.91,402.49,339.33z" />
        </g>
        <g id="mask-band-right">
          <path d="M150.43,334.04c0.54,1.06,1.12,2.14,1.75,3.23c1.9,3.3,3.9,6.2,5.88,8.74c-0.13-0.89-0.17-1.8,0.18-1.95c1.27-0.55,9.04,8.29,9.3,18.83c0.23,9.16-5.44,16.7-6.14,16.48c-0.27-0.09-0.46-1.54-0.48-1.66c-0.02-0.16-0.03-0.27-0.11-1.03c-0.04-0.36-0.07-0.65-0.09-0.85c-0.47,0.61-0.94,1.22-1.41,1.83c-0.9,1.17-2.2,2.86-3.78,4.91c0,0,0,0,0,0c0.39,2.6,0.78,5.2,1.17,7.79c1.44-1.3,3.37-3.25,5.23-5.91c1.23-1.76,7.15-10.58,6.44-22.46c-0.65-10.86-6.53-19.12-9.96-23.94c-0.34-0.48-0.99-1.37-1.93-2.77c-3.3-4.9-5.53-9.15-6.93-12.04C149.84,326.85,150.14,330.44,150.43,334.04z" />
        </g>
        <g id="glasses">
          <path d="M483 196.9c-.7-.4-1.4-.6-1.5-.6-4-1.2-7.4.8-8.7 1-18 3.5-28.3 7.3-45.7 11.2l-6 1.3c-1.1-.5-2.6-1-4.4-1.4l-3.2-.4c-3.8-.4-5.6.6-10.8 1.7-3.8.8-7.3 1.6-11.5 1.6-3.5 0-4-.4-12.2-1.5l-9-1c-12.2-1.2-14.6-1.9-21-2.5a195.5 195.5 0 00-66.3 6c-19.6 4.7-23.5 8.3-25.8 11-2.7 3.3-3.5 6.1-7.2 7.8 0 0-6.6 2.8-16.7-1.8-2.8-1.3-4.7-2.8-5.2-3.1-4.6-3.5-14-7.3-34.2-9a226 226 0 00-67.3 5.8 31.2 31.2 0 01-17.3 5.8s-6 10.4 1.6 15.6c7.7 5.3 7 13.3 7 13.3s2.4 28.2 15.4 44.5c13 16.4 65.3 9.1 65.3 9.1 4.2 0 11.9-.9 17.8-6.4 3.9-3.7 5.4-7.9 6.3-10.6 9.2-27.3 7.6-42 16.1-46 4.4-2 9.8-.5 12.8 1.5 3.3 2.1 2.7 4.1 8.1 15 0 0 4.2 8.5 10.5 18.4l2.7 4.1c1.8 2.8 4 6 5.6 8 3.7 4.5 7.7 7 9.9 8.4 4.2 2.6 10 4.9 24.1 5.7 14.4.9 25.3-1 46.9-4.4 0 0 5-.9 14.5-4.5a13.8 13.8 0 007-5.6c1.7-2 6.3-8.2 8.2-18.7 4.2-22-.3-35.4.4-47 .3-3.6 12.1-7 20.4-7.5 1-.1 3-.2 5.4-1.2 2.7-1 3.1-3 6-4.4 1.8-.8 3.2-1 4.2-1.1 4.8-.7 14.7-3.1 33.3-7.8 10.4-2.5 14.3-4 18.3-1.6 2.7 1.6 4.2 4.2 5 6.2l8.1-5.4c-.5-2-2.5-7.4-6.8-9.5zm-260.1 81c-4.1 12.7-6.3 19.6-12.6 24.4-4.7 3.6-13.5 4.2-31.1 5-29.8 1.5-36.1-2.9-39.6-6.1-2.5-2.3-4-4.9-6.9-10a66.5 66.5 0 01-8.8-24 58.4 58.4 0 011-30.4l26.6 1.9a2673.3 2673.3 0 01-1.7-5.3l-6.2-.3c-10-.5-15-.7-15.2-1.5-.3-1.7 10.5-6 21.4-8 7-1.4 12-1.6 21-1.8 21.6-.5 31.8 1.8 34.5 2.4 9 1.9 16.1 4.6 19 10.3 1 2.2 1.7 5.3 2 6.5.8 3.9 1 7.6.8 12.4-.6 10.2-3 20-4.2 24.5zm161.6-18a84 84 0 01-2.7 22.9s-1.3 3.8-3.5 7c-6.8 10.7-36 13-45.1 13.6-8.3.6-14.2.6-19.7.1-9.1-.7-15.3-1.1-21.8-4.8a42.2 42.2 0 01-12.4-11 74 74 0 01-10-15.8c-4.2-8.6-13.3-27.3-9.2-39 1.8-5.2 5.2-8.2 5.2-8.2 2.3-2 4.7-3 5.9-3.4 18.2-6.5 43.4-8.6 43.4-8.6a266.5 266.5 0 0138.6-.6c6.4.5 17.4 2.2 22.6 10.1a74.2 74.2 0 017.2 24.3c.8 5 1.3 8.4 1.5 13.4z" />
        </g>
        <g id="cap-face-shadow">
          <path d="M151.5 169.3a116 116 0 0146.6-57.1c18.4-11.1 36.5-14 51.1-16.3 12-2 29.8-4.8 51.5-1 5.7 1.1 10 2.3 71.4 28.7 17 7.4 18.2 8 24.6 10.6 29.6 12.2 34.8 13 44 18a101 101 0 0136.2 35.3l10 11.2s4-32-22.4-75.5c-26.4-43.6-164.2-78-164.2-78L193.4 61.4 154 107" />
        </g>
        <g id="cap-base">
          <path d="M151.4 173.4s0-63.8 38.7-83.6c35.8-18.3 68.8-22.4 88-21 19.7 1.3 33.2 6.1 58 15 9.8 3.5 33.3 15.5 79.7 39.4 24.3 12.5 41.9 21.8 51.5 38.2 5.1 8.6 9.4 16.8 9.4 16.8 8.7 16.5 12.4 28.4 13.8 27.8 1.4-.5-.8-12.1.3-21.1.6-5.3 1.7-7.5 1.5-13.2a45 45 0 00-2-11.7c-1.6-5.2-3.7-12.3-7.8-17.5-.6-.7-1.6-2-2.2-4-.4-1.7-.3-3 0-6.8l.6-5.4C483.7 107 466 79 466 79s-22.1-35.2-74.1-61.5c-2.6-1.3-5-2.6-8.5-4C376.5 11 372 10.4 351 6l-3.5-.7c-44.6-9.2-78.8-.9-86 1-27.6 7-48 19.2-60.3 28a131 131 0 00-55.7 30.3c-10 9.3-32.3 30-33 58.3v1.2c6 24.7 30.9 37.9 30.9 37.9s6.9 12 7.9 11.5z" />
        </g>
        <g id="cap-shadow">
          <path d="M402.7 116.5c7.5 4 9.5 4.6 9.7 4.4.7-1.2-26.2-20.1-54.2-36-22.9-13-40.5-20.6-45-22.6-22.3-9.5-34.3-14.6-50.4-17.6-11.1-2-45-7.8-82.1 8 0 0-28 12-50.7 40.5-5.4 6.8-8 13-8.8 20.1-.4 3.5.1 7.5 1.9 12.2 1.6 4.3 1.8 5.9 1.6 6a28.6 28.6 0 01-3-31.2 78.8 78.8 0 0122-27.8c8-7 18.8-16.5 36-24.4 5.5-2.5 27.5-12 58-12 27 .1 46 7.8 73.1 18.7a428 428 0 0169.6 36.8 553.2 553.2 0 0175.4 55.2l10.4 12.8 19.1 35.8c4.1 8.5 5.6 10.3 6.2 10 .7-.2-.1-2.8-.5-8.9-.4-7 .1-14 .1-14 .7-3 1.2-6.7 1.2-10.8 0-15.4-7.6-26.8-11.5-32l-6-2.4c-8.3-3.7-13.9-7.6-15.7-8.8-11.5-7.6-17-6.5-38-17.9-8.3-4.4-16.1-9.3-24-14.2-20.2-12.5-26.2-17.3-35.8-23-5-3-24-14-49.5-23.9-27.2-10.5-47.6-18.3-75.2-18.4-10.6 0-36 .1-64 14.2 0 0-41.2 20.6-56.8 60-2.6 6.7-4 13-2.9 20a40.2 40.2 0 0010.3 19.4 71.8 71.8 0 0020.3 17.1c2.6 4 5.3 7.8 7.9 11.6.3-12.8 2.2-23.3 4-30.7 1.9-8 4-16.5 9.6-26.6a64.8 64.8 0 0118-22.2c3.6-2.7 7.3-4.8 16.4-8.5 14.6-6 24.9-10.3 40-13.3 11.1-2.2 25.6-5.1 44-2.9 17.6 2.1 35.2 8.4 43.2 11.2a373 373 0 0137.2 16.2c13.2 6.3 29.7 15 49.3 25.2" />
        </g>
        <g id="tshirt">
          <path d="M307.31,668.06c-17,3.75-47.22-53.5-47.23-53.5a92.42,92.42,0,0,0,67.24-.72S322.36,664.75,307.31,668.06Z" />
        </g>
        <g id="shirt">
          <path d="M301.7,652.87c6.77-17.79,13.09-32.08,17.83-42.28,6.28-13.48,16.44-34.05,16.44-34.05s11.23-2.53,19.72-4.84c0,0,6.41-1.74,32.32-10.87,4-2.43,11.14-6.87,19.82-12.77,39.09-26.62,71.11-57.25,71.11-57.25h4.85c18.82.05,43.77,7.66,43.77,7.66a263.93,263.93,0,0,1,62.05,28.58A219.27,219.27,0,0,1,647,582.3a197.32,197.32,0,0,1,23.5,45s5.79,15.75,6.87,39.18c.28,6.14.21,12.89-2.43,13.79-2.08.7-4.35-2.71-10.08-8.13a122.89,122.89,0,0,0-17.58-13.35c-6-3.68-10.55-5.31-19.75-8.57a206.49,206.49,0,0,0-28.42-7.73c-5-1-15-3-28-4.38h0s-21.21-1.84-41.91-1.45C486.38,637.51,431,652,431,652c-57,15-59.75,23.52-109,36a497.45,497.45,0,0,1-84.64,14.08c-29.3,2.13-95.94,6.25-170.75-23.62a344.19,344.19,0,0,1-53.38-26.9c4.59-29.32,5.8-34,5.8-34a119.38,119.38,0,0,1,17.11-36.86c11.92-18,25.08-28.49,33.11-34.77,13.44-10.53,24.82-16.19,36.46-21.89,0,0,39.15-18.76,80.83-23.36,4.12-.46,26.64-2.8,26.64-2.8s.35,9.71,1,27.74c-2.54,22.72,4,36.44,7.63,42.59,8.46,14.21,25.85,28.34,28.37,30.4.24.2,4.91,4.11,10.51,9.22,1.51,1.38,3.21,3,5.35,5.31,6.41,6.83,7.79,9.65,11.91,14.87,2.07,2.63,3.64,4.39,5.92,6.93C290.54,642.47,297.79,649.28,301.7,652.87Z" />
        </g>
        <g id="left-collar-shadow">
          <path d="M375.51,681.93h0c-.14-.28-21.35-27.52-21.85-52.4-.13-6.55-1-13.06-1.43-19.6-.42-6.8-.47-9.07-2.31-11.56-4.09-5.52-13.52-7.44-13.87-7.59-26.87,43.51-26.94,43.47-26.94,43.47l0,0c.49-1.12,9.37-21.22,20.16-42.94,7.81-15.72,10-19,13.79-19.58,8.21-1.33,17.49,9.92,21.8,19.32,4,8.63,3.12,14.38,3.52,28.51A404.31,404.31,0,0,0,375.51,681.93Z" />
        </g>
        <g id="right-collar-shadow">
          <path d="M176.7,660.74c-5.21-7.47,5-18.36,14-41.56,8.56-22,8.87-36.36,18.5-42.28,1.51-.93,8.47-5.2,15.85-3.3,5.8,1.49,6.11,5.34,15.2,15.19,8.42,9.14,16.69,15.08,24.9,23.55,2.31,2.37,3.83,4.14,4.82,5.33,1.55,1.87,2.32,3,4.67,6.06,1.56,2.06,3.74,4.91,5,6.53a126.26,126.26,0,0,0,9.33,10.3c6.27,6.45,12.68,12.31,12.68,12.31l2.39,35.37-5-32.73s-6.4-6.73-11.67-12.55c-2.24-2.47-3.78-4.22-4.93-5.56-2.53-2.94-4.26-4.9-4.54-5.23-5.59-6.44-20-11.47-30.61-18.06-13.9-8.63-14.63-15.82-19.59-14.75-6.22,1.35-5.17,12.63-15.86,38.09,0,0-11.63,27.72-21.56,27.73l-4.53.24C182.66,665,178.84,663.82,176.7,660.74Z" />
        </g>
        <g id="right-collar">
          <path d="M191.87,503.11c-7,11.75-33.53,57.69-30.07,93.57.6,6.28,2.72,18.35,3,19.82,4.75,27.15,7.72,44.16,13.54,44.92,5.46.71,11.38-13.21,21.8-37,13.5-30.8,17.78-50,23.78-49.54,2.64.19,3.11,4,7.27,11.22,10.91,19,30.09,31.8,33.69,29.07,1.83-1.39-1.33-9.91-1.33-9.91S251.86,596,250.31,594.7c-15.44-12.53-21-27.79-25.32-36.55A419.31,419.31,0,0,0,191.87,503.11Z" />
        </g>
        <g id="left-collar">
          <path d="M375.35,681.11h0s-8.16-21.81-12-41.51c-6.32-32.47,1.51-46.5-9.91-56.81-7.31-6.59-16.74-6.32-16.51-9.24.26-3.41,13-3.42,29.06-8.59,13.26-4.27,22.16-9.94,30.39-15.19,24.26-15.49,36.54-32.56,51.52-53.51,7.13-10,13.08-19.73,9.9-28.79a18.13,18.13,0,0,0-5.51-7.7c5.95-5.21,7.05-5.29,7.05-5.29,3.61-.26,7,6,9.25,11,5.46,12.17,6.79,22.67,7.7,29.51,1.93,14.38,3.9,26.27,4.85,31.48a238.92,238.92,0,0,0,9,34.57c-32.43,42.62-58.53,68.58-76.61,84.5l-1,.88S391.85,664.68,375.35,681.11Z" />
        </g>
      </defs>
    </svg>
  )
}

const hide = css`
  display: none;
`
