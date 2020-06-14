import { css } from 'linaria'
import React from 'react'
import { PartsDepot } from './parts-depot'

export const Avatar = () => (
  <>
    <PartsDepot />
    <svg
      className={avatar}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 686 705"
    >
      <use href="#head-outline" x="0" y="0" />
      <use href="#neck" x="0" y="0" />
      <g className="shirt">
        <use href="#tshirt" x="0" y="0" />
        <use href="#shirt" x="0" y="0" />
        <use href="#left-collar-shadow" x="0" y="0" />
        <use href="#right-collar-shadow" x="0" y="0" />
        <use href="#left-collar" x="0" y="0" />
        <use href="#right-collar" x="0" y="0" />
      </g>
      <use href="#face-fill" x="0" y="0" />
      <use href="#hair" x="0" y="0" />
      <use href="#face-outline" x="0" y="0" />
      <use href="#beard" x="0" y="0" />
      <use href="#left-lid" x="0" y="0" />
      <use href="#right-lid" x="0" y="0" />
      <use href="#left-eye" x="0" y="0" />
      <use href="#right-eye" x="0" y="0" />
      <use href="#forehead-wrinkles" x="0" y="0" />
      <use href="#ear-shadow" x="0" y="0" />
      <use href="#ear-outline" x="0" y="0" />
      <use href="#lower-lip" x="0" y="0" />
      <use href="#teeth" x="0" y="0" />
      <use href="#crinkles" x="0" y="0" />
      <use href="#nose-outline" x="0" y="0" />
      <use href="#nose-shadow" x="0" y="0" />
      <use href="#left-brow-shadow" x="0" y="0" />
      <use href="#left-brow" x="0" y="0" />
      <use href="#right-brow-shadow" x="0" y="0" />
      <use href="#right-brow" x="0" y="0" />
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
    </svg>
  </>
)

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
  }
  use[href='#face-fill'] {
    fill: #edd8cc;
  }
  use[href='#hair'],
  use[href='#ear-shadow'],
  use[href='#lower-lip'],
  use[href='#nose-shadow'],
  use[href='#left-brow-shadow'],
  use[href='#right-brow-shadow'],
  use[href='#cap-face-shadow'] {
    fill: #d6beb2;
  }
  use[href='#face-outline'] {
    stroke: #706255;
  }
  use[href='#beard'],
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
  }
  use[href='#left-eye'],
  use[href='#right-eye'] {
    fill: #d3e6ef;
    stroke: #165982;
    stroke-width: 3;
  }
  use[href='#forehead-wrinkles'] {
    opacity: 0;
    stroke: #e0cbc1;
    stroke-width: 2;
  }
  use[href='#teeth'] {
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
    fill: #dfd7fa;
  }
  use[href='#left-collar-shadow'],
  use[href='#right-collar-shadow'] {
    fill: #5b8647;
  }
  [data-mode='dark'] & use[href='#left-collar-shadow'],
  [data-mode='dark'] & use[href='#right-collar-shadow'] {
    fill: #9487c1;
  }
  use[href='#left-collar'],
  use[href='#right-collar'] {
    fill: #9cc989;
    stroke: #5b8647;
  }
  [data-mode='dark'] & use[href='#left-collar'],
  [data-mode='dark'] & use[href='#right-collar'] {
    fill: #c5b8ef;
    stroke: #9487c1;
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
