import { motion } from 'framer-motion'
import { css, cx } from 'linaria'
import React from 'react'
import { PartsDepot } from './parts-depot'

export const Avatar = ({ centerRef, x, y, isDizzy }) => {
  const anim = {
    // used for transition of mouth, lip and beard between dizzy and non-dizzy
    pathTransition: { ease: 'easeInOut', duration: 0.4 },

    // head follows mouse
    headFollowInit: { translateX: 0, translateY: 0, rotate: 0 },
    headFollow: {
      translateX: 0,
      translateY: isDizzy ? 0 : y * (y < 0 ? 1 : 3),
      rotate: isDizzy ? 0 : x * y * (x < 0 && y < 0 ? 6 : 4),
      transition: { duration: 0.3, easing: 'ease-in-out' },
    },

    // head makes dizzy movements
    headDizzyInit: { translateY: 0, rotate: 0 },
    headDizzy: {
      translateY: [-2, 4, -2, 4, -2],
      rotate: [-3, 3, -2, 4, 2, -3],
      transition: { duration: 5 },
    },

    // eye follows mouse
    eyeFollowInit: { translateX: 0, translateY: 0 },
    eyeFollow: {
      translateX: isDizzy ? 0 : x * (x > 0 ? 8 : 15),
      translateY: isDizzy ? 0 : y * (y < 0 ? 4 : 7),
      transition: { duration: 0.2, easing: 'linear' },
    },

    // brows react to mouse movements
    browFollowInit: { translateY: 0 },
    leftBrowFollow: {
      translateY: isDizzy ? 0 : y * 3.5 + (x < 0 ? 3 : -5),
      transition: { duration: 0.3, easing: 'ease-in-out' },
    },
    rightBrowFollow: {
      translateY: isDizzy ? 0 : y * 3.5 + (x > 0 ? 3 : -5),
      transition: { duration: 0.3, easing: 'ease-in-out' },
    },

    // brows make dizzy movements
    browDizzyInit: { translateY: 0, rotate: 0 },
    leftBrowDizzy: {
      translateY: [-14, -3, -11, -5],
      rotate: 6,
      transition: { duration: 5 },
    },
    rightBrowDizzy: {
      translateY: [-4, -15, -2, -12],
      rotate: -5,
      transition: { duration: 5 },
    },

    // tech icon animation
    icons: [
      { from: { x: 300, y: 175 }, to: { x: 40, y: -55 } },
      { from: { x: 300, y: 175 }, to: { x: 120, y: -150 } },
      { from: { x: 300, y: 175 }, to: { x: 250, y: -110 } },
      { from: { x: 300, y: 175 }, to: { x: 355, y: -180 } },
      { from: { x: 300, y: 175 }, to: { x: 435, y: -80 } },
      { from: { x: 300, y: 175 }, to: { x: 555, y: -135 } },
    ],
  }

  return (
    <>
      <PartsDepot />
      <motion.svg
        className={cx(avatar, isDizzy && dizzyAvatar)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 686 705"
        animate={isDizzy ? 'dizzy' : 'normal'}
      >
        <circle ref={centerRef} cx="245" cy="247" r="1" />
        <motion.g initial={anim.headFollowInit} animate={anim.headFollow}>
          <motion.g
            initial={anim.headDizzyInit}
            variants={{
              dizzy: anim.headDizzy,
              normal: anim.headDizzyInit,
            }}
          >
            <use href="#head-outline" x="0" y="0" />
          </motion.g>
        </motion.g>
        <use href="#neck" x="0" y="0" />
        <g className="shirt">
          <use href="#tshirt" x="0" y="0" />
          <use href="#shirt" x="0" y="0" />
          <use href="#left-collar-shadow" x="0" y="0" />
          <use href="#right-collar-shadow" x="0" y="0" />
          <use href="#left-collar" x="0" y="0" />
          <use href="#right-collar" x="0" y="0" />
        </g>
        <motion.g initial={anim.headFollowInit} animate={anim.headFollow}>
          <motion.g
            initial={anim.headDizzyInit}
            variants={{
              dizzy: anim.headDizzy,
              normal: anim.headDizzyInit,
            }}
          >
            <use href="#face-fill" x="0" y="0" />
            <use href="#hair" x="0" y="0" />
            <use href="#face-outline" x="0" y="0" />
            <motion.path
              className="beard"
              variants={{
                dizzy: {
                  d:
                    'M 487 208.2 C 485.6 208.8 483.6 210 481.8 211.9 C 473.5 220.5 475.4 237.7 475.4 237.7 C 478.3 271.4 481.2 305.1 484.1 338.8 C 484.9 349.4 485.2 363.2 483.6 379.2 C 482.6 389 480.7 406.9 473.7 426.8 C 459.6 466.8 430.8 498.4 430.8 498.4 C 430.8 498.4 388.9 561.2 322.2 573 C 280.8 580.3 262.1 577.1 251.3 572.9 C 244 570 238.8 567.1 237.2 566.1 C 222.9 557.4 208.1 549.5 185.3 491.5 C 178 472.9 173 460.1 167.5 440.4 C 160.4 415 154 383.1 151.9 345.6 C 151.9 345.6 151.9 345.6 151.9 345.6 C 157.2 373.1 191.4 428.3 191.4 428.3 C 193.7 429.5 195.4 429.7 196.5 429.1 C 199.8 427.2 198.6 417.7 193 400.8 C 184.7 375.9 184 368.5 185.2 366.6 C 188.2 361.9 190.2 362.5 192.7 361.4 C 200.1 358.2 208.1 360.4 214.5 362.7 C 222.5 365.6 226.9 366.2 229.8 367.9 C 237.4 372.4 251.3 377.3 278.8 363.7 C 290.4 359.9 307.6 356.1 328.2 358.1 C 330.2 358.3 363 357.6 373.4 371.1 C 377 375.8 378 380.9 378 380.9 C 375.6 408.6 373.1 422.4 370.4 422.4 C 369.6 422.4 368.8 421.2 368 418.8 C 363.2 405.8 357.4 399.5 353.2 397.4 C 353 397.3 350.1 395.9 346.1 394.3 C 345 393.8 343.6 393.4 341.9 392.9 C 335.8 391.1 331.1 390.8 324.7 390.4 C 318.1 390 312.1 389.6 304.3 390.9 C 299 391.8 295.2 393 289.8 394.8 C 288.1 395.4 284.7 396.7 279.9 397.3 C 279 397.4 278 397.5 275.7 397.7 C 271.8 398 267.8 398.2 263.1 398 C 256 397.7 249 397.4 242.1 394.2 C 240.8 393.6 239 392.6 236.2 391.8 C 233.5 391 231.1 390.8 227.2 390.3 C 222.2 389.6 216.5 390.4 215 390.6 C 212.1 391 209.7 391.3 208.1 392 C 200 395.6 197.6 413.8 204.3 431.1 C 209.5 444.7 221.5 452.8 230.1 450.8 C 234.2 449.8 236.7 445.3 237.6 443.9 C 241.7 436.8 239.2 429.5 238.8 428.2 C 242.6 430.9 248.8 434.6 257.1 436.5 C 259.2 437 264.4 438 275.9 437.3 C 283 436.8 292.9 435.7 304.7 432.5 C 301.3 441.8 301.9 450.5 306.6 454.4 C 310.9 458 317.3 456.4 325.4 453.9 C 332.8 451.7 358.6 450.9 366.1 428.1 C 367.4 424 367.8 420.6 368 418.5 C 397.6 409.4 440.2 390.4 452.3 353.3 C 455.6 343.1 454.7 325.6 452.2 290.8 C 449.3 250 441.8 207.6 441.8 207.6 C 441.8 207.6 444 207.2 448.4 206.3 C 465.4 202.9 468.7 201.5 474.2 202.3 C 477.2 202.9 481.7 204.1 487 208.2 Z',
                },
                normal: {
                  d:
                    'M 487 208.2 C 485.6 208.8 483.6 210 481.8 211.9 C 473.5 220.5 475.4 237.7 475.4 237.7 C 478.3 271.4 481.2 305.1 484.1 338.8 C 484.9 349.4 485.2 363.2 483.6 379.2 C 482.6 389 480.7 406.9 473.7 426.8 C 459.6 466.8 430.8 498.4 430.8 498.4 C 430.8 498.4 388.9 568.2 322.2 580 C 280.8 587.3 262.1 584.1 251.3 579.9 C 244 577 238.8 574.1 237.2 573.1 C 222.9 564.4 208.1 549.5 185.3 491.5 C 178 472.9 173 460.1 167.5 440.4 C 160.4 415 154 383.1 151.9 345.6 C 151.9 345.6 151.9 345.6 151.9 345.6 C 157.2 373.1 191.4 428.3 191.4 428.3 C 193.7 429.5 195.4 429.7 196.5 429.1 C 199.8 427.2 198.6 417.7 193 400.8 C 184.7 375.9 184 368.5 185.2 366.6 C 188.2 361.9 190.2 359.5 192.7 358.4 C 200.1 355.2 208.1 357.4 214.5 359.7 C 222.5 362.6 226.9 366.2 229.8 367.9 C 237.4 372.4 251.3 374.3 278.8 360.7 C 290.4 356.9 307.6 353.1 328.2 355.1 C 330.2 355.3 363 357.6 373.4 371.1 C 377 375.8 378 380.9 378 380.9 C 375.6 408.6 373.1 422.4 370.4 422.4 C 369.6 422.4 368.8 421.2 368 418.8 C 363.2 405.8 357.4 396.5 353.2 394.4 C 353 394.3 350.1 392.9 346.1 391.3 C 345 390.8 343.6 390.4 341.9 389.9 C 335.8 388.1 331.1 387.8 324.7 387.4 C 318.1 387 312.1 386.6 304.3 387.9 C 299 388.8 295.2 390 289.8 391.8 C 284.05 393.7 281.3 394.975 279.3 395.938 C 277.3 396.9 276.05 397.55 273.3 398.2 C 265.6 400.1 257.975 399.225 252.188 397.825 C 246.4 396.425 242.45 394.5 242.1 394.3 C 239.05 392.8 236.95 391.3 234.8 390.063 C 232.65 388.825 230.45 387.85 227.2 387.4 C 222.2 386.7 216.5 387.5 215 387.7 C 212.1 388.1 209.7 388.4 208.1 389.1 C 200 392.7 197.6 413.9 204.3 431.2 C 209.5 444.8 221.5 459.9 230.1 457.9 C 234.2 456.9 236.7 452.4 237.6 451 C 241.7 443.9 239.2 436.6 238.8 435.3 C 242.6 438 248.8 441.7 257.1 443.6 C 259.2 444.1 264.4 445.1 275.9 444.4 C 283 443.9 292.9 442.8 304.7 439.6 C 301.3 448.9 301.9 457.6 306.6 461.5 C 310.9 465.1 317.3 463.5 325.4 461 C 332.8 458.8 358.6 451 366.1 428.2 C 367.4 424.1 367.8 420.7 368 418.6 C 397.6 409.5 440.2 390.5 452.3 353.4 C 455.6 343.2 454.7 325.7 452.2 290.9 C 449.3 250.1 441.8 207.7 441.8 207.7 C 441.8 207.7 444 207.3 448.4 206.4 C 465.4 203 468.7 201.6 474.2 202.4 C 477.2 202.9 481.7 204.1 487 208.2 Z',
                },
              }}
              transition={anim.pathTransition}
              d="M 487 208.2 C 485.6 208.8 483.6 210 481.8 211.9 C 473.5 220.5 475.4 237.7 475.4 237.7 C 478.3 271.4 481.2 305.1 484.1 338.8 C 484.9 349.4 485.2 363.2 483.6 379.2 C 482.6 389 480.7 406.9 473.7 426.8 C 459.6 466.8 430.8 498.4 430.8 498.4 C 430.8 498.4 388.9 568.2 322.2 580 C 280.8 587.3 262.1 584.1 251.3 579.9 C 244 577 238.8 574.1 237.2 573.1 C 222.9 564.4 208.1 549.5 185.3 491.5 C 178 472.9 173 460.1 167.5 440.4 C 160.4 415 154 383.1 151.9 345.6 C 151.9 345.6 151.9 345.6 151.9 345.6 C 157.2 373.1 191.4 428.3 191.4 428.3 C 193.7 429.5 195.4 429.7 196.5 429.1 C 199.8 427.2 198.6 417.7 193 400.8 C 184.7 375.9 184 368.5 185.2 366.6 C 188.2 361.9 190.2 359.5 192.7 358.4 C 200.1 355.2 208.1 357.4 214.5 359.7 C 222.5 362.6 226.9 366.2 229.8 367.9 C 237.4 372.4 251.3 374.3 278.8 360.7 C 290.4 356.9 307.6 353.1 328.2 355.1 C 330.2 355.3 363 357.6 373.4 371.1 C 377 375.8 378 380.9 378 380.9 C 375.6 408.6 373.1 422.4 370.4 422.4 C 369.6 422.4 368.8 421.2 368 418.8 C 363.2 405.8 357.4 396.5 353.2 394.4 C 353 394.3 350.1 392.9 346.1 391.3 C 345 390.8 343.6 390.4 341.9 389.9 C 335.8 388.1 331.1 387.8 324.7 387.4 C 318.1 387 312.1 386.6 304.3 387.9 C 299 388.8 295.2 390 289.8 391.8 C 284.05 393.7 281.3 394.975 279.3 395.938 C 277.3 396.9 276.05 397.55 273.3 398.2 C 265.6 400.1 257.975 399.225 252.188 397.825 C 246.4 396.425 242.45 394.5 242.1 394.3 C 239.05 392.8 236.95 391.3 234.8 390.063 C 232.65 388.825 230.45 387.85 227.2 387.4 C 222.2 386.7 216.5 387.5 215 387.7 C 212.1 388.1 209.7 388.4 208.1 389.1 C 200 392.7 197.6 413.9 204.3 431.2 C 209.5 444.8 221.5 459.9 230.1 457.9 C 234.2 456.9 236.7 452.4 237.6 451 C 241.7 443.9 239.2 436.6 238.8 435.3 C 242.6 438 248.8 441.7 257.1 443.6 C 259.2 444.1 264.4 445.1 275.9 444.4 C 283 443.9 292.9 442.8 304.7 439.6 C 301.3 448.9 301.9 457.6 306.6 461.5 C 310.9 465.1 317.3 463.5 325.4 461 C 332.8 458.8 358.6 451 366.1 428.2 C 367.4 424.1 367.8 420.7 368 418.6 C 397.6 409.5 440.2 390.5 452.3 353.4 C 455.6 343.2 454.7 325.7 452.2 290.9 C 449.3 250.1 441.8 207.7 441.8 207.7 C 441.8 207.7 444 207.3 448.4 206.4 C 465.4 203 468.7 201.6 474.2 202.4 C 477.2 202.9 481.7 204.1 487 208.2 Z"
            />
            <use href="#left-lid" x="0" y="0" />
            <use href="#right-lid" x="0" y="0" />
            <motion.g
              initial={{ scale: 1, translateX: 0, translateY: 0 }}
              variants={{
                dizzy: {
                  scale: [1, 0.97, 1.02, 0.97, 1],
                  translateX: [2, -2, 2, -2],
                  translateY: [-2, 2, -2, 2],
                  transition: { duration: 5 },
                },
                normal: { scale: 1, translateX: 0, translateY: 0 },
              }}
            >
              <motion.use
                href="#left-eye"
                x="0"
                y="0"
                initial={anim.eyeFollowInit}
                animate={anim.eyeFollow}
              />
            </motion.g>
            <motion.g
              initial={{ scale: 1, translateX: 0, translateY: 0 }}
              variants={{
                dizzy: {
                  scale: [1, 1.02, 0.97, 1.02, 1],
                  translateX: [-2, 2, -2, 2],
                  translateY: [2, -2, 2, -2],
                  transition: { duration: 5 },
                },
                normal: { scale: 1, translateX: 0, translateY: 0 },
              }}
            >
              <motion.use
                href="#right-eye"
                x="0"
                y="0"
                initial={anim.eyeFollowInit}
                animate={anim.eyeFollow}
              />
            </motion.g>
            <use href="#forehead-wrinkles" x="0" y="0" />
            <use href="#ear-shadow" x="0" y="0" />
            <use href="#ear-outline" x="0" y="0" />
            <motion.path
              className="lower-lip"
              variants={{
                dizzy: {
                  d:
                    'M219.9,396.3c0.3,1.7,0.8,4.1,2,6.8c2,4.7,4.7,7.7,6.5,9.7c1.4,1.6,3.3,3.6,6.3,5.6c2.9,1.9,5.1,2.7,9.6,4.3c11.4,4.1,10.2,4,12.6,4.6c7.2,2,12.8,1.8,22.1,1.3c5.5-0.3,13.3-0.7,23.1-3.3c10.4-2.8,16.9-6.4,18.5-7.3c8.3-4.6,11.5-8.7,12.7-10.4c2.5-3.4,5.9-9.5,4.2-11.1c-1.5-1.5-5.6,2.1-15.3,5.6c-7.2,2.6-13.1,3.5-20.3,4.6c-6.4,1-11.9,1.4-15.8,1.6c-3.9,0.2-7,0.2-9.1,0.2c-2.6,0-5.7-0.1-9.1-0.4c-3.3-0.2-7.3-0.6-11.7-1.3c-3.3-0.5-7.6-1.3-12.8-2.5c-3.8-0.9-7.1-1.9-9.8-2.8',
                },
                normal: {
                  d:
                    'M209.1,387.3c3.3,6.1,5.7,11.1,7.2,14.5c3,6.7,3.8,9.3,6.7,14.4c1.7,3,3.7,6.6,7,10.5c2.3,2.7,7,8.3,15.1,12.5c9.2,4.9,17.7,5.3,22.1,5.4c3.1,0.1,5.5-0.1,10.1-0.5c8.5-0.7,16-1.3,24.4-3.7c11.9-3.4,20.1-8.5,25.6-12c8.5-5.4,16.2-10.3,22.2-19.8c3.5-5.4,7.1-13.5,5.4-14.9c-2-1.6-8.9,7.6-25.4,17.6c-10.5,6.3-19.5,9.7-23.2,11c-6.8,2.4-12.7,3.7-16.1,4.5c-6.8,1.5-11.1,2.1-12.4,2.2c-3.9,0.5-6.9,0.8-11.1,0.6c-2.2-0.1-6.5-0.4-11.6-2c-6.1-2-10.1-4.9-12.7-6.7c-10.4-7.6-16.9-17.9-19.9-23.4',
                },
              }}
              transition={anim.pathTransition}
              d="M219.9,396.3c0.3,1.7,0.8,4.1,2,6.8c2,4.7,4.7,7.7,6.5,9.7c1.4,1.6,3.3,3.6,6.3,5.6c2.9,1.9,5.1,2.7,9.6,4.3c11.4,4.1,10.2,4,12.6,4.6c7.2,2,12.8,1.8,22.1,1.3c5.5-0.3,13.3-0.7,23.1-3.3c10.4-2.8,16.9-6.4,18.5-7.3c8.3-4.6,11.5-8.7,12.7-10.4c2.5-3.4,5.9-9.5,4.2-11.1c-1.5-1.5-5.6,2.1-15.3,5.6c-7.2,2.6-13.1,3.5-20.3,4.6c-6.4,1-11.9,1.4-15.8,1.6c-3.9,0.2-7,0.2-9.1,0.2c-2.6,0-5.7-0.1-9.1-0.4c-3.3-0.2-7.3-0.6-11.7-1.3c-3.3-0.5-7.6-1.3-12.8-2.5c-3.8-0.9-7.1-1.9-9.8-2.8"
            />
            <motion.path
              className="teeth"
              transform="translate(-10 0)"
              variants={{
                dizzy: {
                  d:
                    'M 231.8 396.4 C 231.8 396.4 231.8 396.4 231.8 396.4 C 234.1 397.8 237.6 399.7 242.2 401.3 C 245.5 402.5 248 403.1 252.8 404.2 C 259.6 405.8 264.8 406.6 265.9 406.8 C 268.7 407.2 274.9 408.1 282.6 408.4 C 288 408.6 298.7 408.9 312.3 406.6 C 320.5 405.2 331.5 402.4 343.8 396.8 C 340.8 396.2 336.7 395.6 331.8 395.6 C 326 395.6 321.5 396.4 313.6 397.9 C 306.7 399.2 307.3 399.4 301.4 400.5 C 292.9 402 287.2 402.2 285.7 402.3 C 281.2 402.5 277.7 402.4 275.8 402.3 C 270 402.1 265.7 401.5 264.2 401.3 C 260.1 400.7 257.1 400.1 255.4 399.7 C 253.5 399.3 252.1 398.9 251.5 398.7 C 249.5 398.1 248.4 397.7 247.4 397.4 C 246 397 241.1 395.4 235.3 395.9 C 234.55 395.95 233.875 396.025 233.287 396.113 C 232.7 396.2 232.2 396.3 231.8 396.4',
                },
                normal: {
                  d:
                    'M 220.9 388.1 C 224.7 390.7 229.5 394.6 234.3 400 C 237.45 403.6 239.075 406.225 240.713 408.725 C 242.35 411.225 244 413.6 247.2 416.7 C 249.8 419.3 254.7 423.9 262.1 426.9 C 265.4 428.2 270.7 429.4 280.7 429.6 C 286.4 429.7 296.3 428.5 312.2 423.7 C 325.5 419.7 342 411.8 362.8 394.4 C 357 392 348.7 389.2 338.4 387.9 C 326 386.3 316.5 387.6 313.9 388 C 307.3 388.967 302.744 390.456 299.015 392.026 C 295.285 393.596 292.381 395.248 289.085 396.541 C 285.789 397.833 282.1 398.767 276.8 398.9 C 274.7 398.95 271.7 399.1 268.15 398.837 C 264.6 398.575 260.5 397.9 256.2 396.3 C 254.3 395.6 253.625 395.175 252.625 394.587 C 251.625 394 250.3 393.25 247.1 391.9 C 241.2 389.4 237.7 387.9 232.9 387.3 C 230.2 386.8 226 386.7 220.9 388.1 C 220.9 388.1 220.9 388.1 220.9 388.1',
                },
              }}
              transition={anim.pathTransition}
              d="M 220.9 388.1 C 224.7 390.7 229.5 394.6 234.3 400 C 237.45 403.6 239.075 406.225 240.713 408.725 C 242.35 411.225 244 413.6 247.2 416.7 C 249.8 419.3 254.7 423.9 262.1 426.9 C 265.4 428.2 270.7 429.4 280.7 429.6 C 286.4 429.7 296.3 428.5 312.2 423.7 C 325.5 419.7 342 411.8 362.8 394.4 C 357 392 348.7 389.2 338.4 387.9 C 326 386.3 316.5 387.6 313.9 388 C 307.3 388.967 302.744 390.456 299.015 392.026 C 295.285 393.596 292.381 395.248 289.085 396.541 C 285.789 397.833 282.1 398.767 276.8 398.9 C 274.7 398.95 271.7 399.1 268.15 398.837 C 264.6 398.575 260.5 397.9 256.2 396.3 C 254.3 395.6 253.625 395.175 252.625 394.587 C 251.625 394 250.3 393.25 247.1 391.9 C 241.2 389.4 237.7 387.9 232.9 387.3 C 230.2 386.8 226 386.7 220.9 388.1 C 220.9 388.1 220.9 388.1 220.9 388.1"
            />{' '}
            <use href="#crinkles" x="0" y="0" />
            <use href="#nose-outline" x="0" y="0" />
            <use href="#nose-shadow" x="0" y="0" />
            <motion.g
              initial={anim.browFollowInit}
              animate={anim.leftBrowFollow}
            >
              <motion.g
                initial={anim.browDizzyInit}
                variants={{
                  dizzy: anim.leftBrowDizzy,
                  normal: anim.browDizzyInit,
                }}
              >
                <use href="#left-brow-shadow" x="0" y="0" />
                <use href="#left-brow" x="0" y="0" />
              </motion.g>
            </motion.g>
            <motion.g
              initial={anim.browFollowInit}
              animate={anim.rightBrowFollow}
            >
              <motion.g
                initial={anim.browDizzyInit}
                variants={{
                  dizzy: anim.rightBrowDizzy,
                  normal: anim.browDizzyInit,
                }}
              >
                <use href="#right-brow-shadow" x="0" y="0" />
                <use href="#right-brow" x="0" y="0" />
              </motion.g>
            </motion.g>
            <g className="mask">
              <use href="#mask-base" x="0" y="0" />
              <use href="#mask-shadow" x="0" y="0" />
              <use href="#mask-airflow-shadow" x="0" y="0" />
              <use href="#mask-airflow" x="0" y="0" />
              <use href="#mask-breather" x="0" y="0" />
              <use href="#mask-nose-clamp" x="0" y="0" />
              <use href="#mask-band-left" x="0" y="0" />
              <use href="#mask-band-right" x="0" y="0" />
            </g>
            <use href="#glasses" x="0" y="0" />
            <g className="cap">
              <use href="#cap-face-shadow" x="0" y="0" />
              <use href="#cap-base" x="0" y="0" />
              <use href="#cap-shadow" x="0" y="0" />
            </g>
          </motion.g>
        </motion.g>
      </motion.svg>
    </>
  )
}

const avatar = css`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;

  use {
    stroke: transparent;
    fill: transparent;
  }
  [data-mode='light'] & g.mask {
    display: none;
  }

  use[href='#head-outline'] {
    fill: var(--color-bg);
  }
  use[href='#neck'] {
    fill: #edd8cc;
    stroke: #706255;
    stroke-width: 3;
  }
  use[href='#face-fill'] {
    fill: #edd8cc;
  }
  use[href='#hair'],
  use[href='#ear-shadow'],
  .lower-lip,
  use[href='#nose-shadow'],
  use[href='#left-brow-shadow'],
  use[href='#right-brow-shadow'],
  use[href='#cap-face-shadow'] {
    fill: #d6beb2;
  }
  use[href='#face-outline'] {
    stroke: #706255;
    stroke-width: 3;
  }
  .beard,
  use[href='#left-brow'],
  use[href='#right-brow'] {
    fill: #a87858;
  }
  use[href='#left-lid'],
  use[href='#right-lid'],
  use[href='#ear-outline'],
  use[href='#crinkles'],
  use[href='#nose-outline'] {
    stroke: #706255;
    stroke-width: 2;
  }
  use[href='#left-eye'],
  use[href='#right-eye'] {
    fill: #d3e6ef;
    stroke: #165982;
    stroke-width: 3;
  }
  use[href='#forehead-wrinkles'] {
    stroke: #e0cbc1;
    stroke-width: 0;
    transition: stroke-width 0.5s ease-in-out;
    will-change: stroke-width;
  }
  .teeth {
    fill: #f9f9f4;
    stroke: #706255;
  }
  use[href='#glasses'] {
    fill: #666;
    stroke: #000;
  }
  use[href='#cap-base'] {
    fill: #2f3f50;
    stroke: #000;
    stroke-width: 2;
  }
  use[href='#cap-shadow'] {
    fill: #162430;
  }
  use[href='#tshirt'] {
    fill: #272a2b;
  }
  use[href='#shirt'] {
    fill: #c7e0bd;
  }
  [data-mode='dark'] & use[href='#shirt'] {
    fill: #835bb3;
  }
  use[href='#left-collar-shadow'],
  use[href='#right-collar-shadow'] {
    fill: #5b8647;
  }
  [data-mode='dark'] & use[href='#left-collar-shadow'],
  [data-mode='dark'] & use[href='#right-collar-shadow'] {
    fill: #4c2b73;
  }
  use[href='#left-collar'],
  use[href='#right-collar'] {
    fill: #9cc989;
    stroke: #5b8647;
  }
  [data-mode='dark'] & use[href='#left-collar'],
  [data-mode='dark'] & use[href='#right-collar'] {
    fill: #af8dd6;
    stroke: #4c2b73;
  }
  use[href='#mask-base'] {
    fill: #b6e4f6;
  }
  use[href='#mask-band-left'],
  use[href='#mask-band-right'] {
    fill: #fff;
  }
  use[href='#mask-airflow'],
  use[href='#mask-shadow'] {
    fill: #95cde4;
  }
  use[href='#mask-airflow-shadow'] {
    fill: #2e8db2;
  }
  use[href='#mask-nose-clamp'] {
    fill: #9b9b9b;
  }
  use[href='#mask-breather'] {
    fill: #162a32;
  }
`

const dizzyAvatar = css`
  use[href='#forehead-wrinkles'] {
    stroke-width: 2;
  }
`
