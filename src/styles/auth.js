import React from "react";
import { styled } from "styled-components";

export const SigninLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #212121;
`;

export const SigninFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 917px;
  height: 569px;
  border-radius: 14px;
  background: #fff;
  > form {
    > input {
      display: flex;
      justify-content: center;
      padding: 28px;
      width: 694px;
      height: 98px;
      border-radius: 8px;
      border: 1px solid #e3e3e3;
      background: #fff;
      color: #212121;
      font-family: var(--font-family);
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
      line-height: 100%;
      &::placeholder {
        color: #d5d5d7;
        font-family: var(--font-family);
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        text-align: left;
        line-height: 100%;
      }
    }
  }
  > form:nth-child(2) {
    > input {
      margin-top: 20px;
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 694px;
    height: 98px;
    border-radius: 8px;
    background: #212121;
    color: #fff;
    text-align: center;
    font-family: var(--font-family);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 20px 0;
    border: none;
  }
  > div {
    display: flex;
    align-items: center;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      width: 54px;
      height: 54px;
      background-color: #212121;
      border: none;
      margin-right: 30px;
    }
    > button:last-child {
      margin-right: 0;
    }
  }
`;

export const KakaoIcon = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0681 0C5.40982 0 0 4.37647 0 9.74118C0 13.1294 2.21941 16.0941 5.40982 17.9294L4.57754 22.5882L9.70993 19.2C10.4035 19.3412 11.2358 19.3412 11.9293 19.3412C18.5876 19.3412 23.9974 14.9647 23.9974 9.6C24.1361 4.37647 18.7263 0 12.0681 0Z"
        fill="white"
      />
    </svg>
  );
};

export const GoogleIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7873 10.036C23.93 10.8577 24.0012 11.6902 24 12.5241C24 16.2487 22.6687 19.3979 20.3519 21.5295H20.355C18.329 23.4009 15.544 24.4843 12.2418 24.4843C8.99505 24.4843 5.88131 23.1946 3.58553 20.8988C1.28975 18.603 0 15.4893 0 12.2426C0 8.99586 1.28975 5.88212 3.58553 3.58634C5.88131 1.29056 8.99505 0.000807783 12.2418 0.000807783C15.2807 -0.0347826 18.2155 1.1069 20.4315 3.18673L16.9365 6.68175C15.6731 5.47743 13.987 4.81793 12.2418 4.84549C9.0482 4.84549 6.33511 7.00004 5.36802 9.90134C4.85525 11.4216 4.85525 13.0681 5.36802 14.5884H5.37261C6.3443 17.4851 9.05279 19.6397 12.2464 19.6397C13.8959 19.6397 15.3129 19.2173 16.4116 18.4706H16.407C17.045 18.0479 17.5907 17.5004 18.0112 16.8611C18.4318 16.2217 18.7184 15.5038 18.8539 14.7506H12.2418V10.0375L23.7873 10.036Z"
        fill="white"
      />
    </svg>
  );
};

export const NaverIcon = () => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.814 0V10.8475L8.18605 0H0V21.3333H8.18605V10.6667L15.814 21.3333H24V0H15.814Z"
        fill="white"
      />
    </svg>
  );
};
