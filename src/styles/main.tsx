import React from "react";
import { styled } from "styled-components";
export const LayoutFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

export const MainLayout = styled(LayoutFrame)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;

export const StartPageLayout = styled(LayoutFrame)`
  background-color: #ffffff;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: fit-content;
  margin: auto;
  border-right: 3px solid #d3d3d3;
  > div {
    width: 360px;
    height: 360px;
    position: relative;
    > img {
      object-fit: contain;
    }
  }
  > a {
    color: #fff;
    font-family: var(--font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 32px;
    border-radius: 20px;
    background: #212121;
    border: none;
    white-space: nowrap;
    margin-top: 60px;
    text-decoration: none;
  }
`;

export const CreatePageLayout = styled(LayoutFrame)`
  width: 100%;
  min-width: 100vw;
  align-items: center;
  justify-content: center;
`;

interface CreateCutBoxProps {
  mode: string;
  columns: number;
  rows: number;
}

export const CreateCutBox = styled.div<CreateCutBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div.create_box__photo_grid {
    display: grid;
    grid-template-columns: ${(props) =>
      props.columns && "repeat(" + props.columns + ",1fr)"};
    grid-template-rows: ${(props) =>
      props.rows && "repeat(" + props.rows + ",1fr)"};
    padding: ${(props) =>
      props.mode === "cut4x2"
        ? "70px 10px"
        : props.mode === "cut4x1"
        ? "10px 10px 80px 10px"
        : "10px"};
    width: ${(props) =>
      props.mode === "cut4x2"
        ? "360px"
        : props.mode === "cut3x1"
        ? "200px"
        : "220px"};
    height: fit-content;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
    gap: 10px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
      aspect-ratio: ${(props) =>
        props.mode === "cut4x2"
          ? "256 / 345"
          : props.mode === "cut3x1"
          ? "1 / 1"
          : "7 / 4"};
      background-color: #d9d9d9;
      > label {
        cursor: pointer;
      }
      > input {
        display: none;
      }
    }
  }
`;

export const CreateCustomBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  > button {
    width: 186px;
    height: 40px;
    border-radius: 20px;
    background: #212121;
    color: #fff;
    font-family: var(--font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 16px;
    border: none;
    cursor: pointer;
  }
  > label#select-color {
    display: flex;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    position: relative;
    margin-right: 16px;
    > img {
      object-fit: contain;
    }
  }
  > input#select-color {
    display: none;
  }
  > label#frame-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    background-color: #d9d9d9;
  }
  > input#frame-image {
    display: none;
  }
`;
