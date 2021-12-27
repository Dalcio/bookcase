import styled from "styled-components";
import { filter_button, filter_button_active } from "../../Assets/filters";

export const AddNewBookBtn = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 99;
  top: 20px;
  right: 30px;

  width: 40px;
  height: 40px;

  background: url(${filter_button});

  color: #633585;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  &:active {
    background: url(${filter_button_active});
  }

  @media screen and (min-width: 522px) {
    bottom: 20px;
    top: unset;
  }
`;

export const AddNewBookCardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  max-width: 300px;
  margin: 20px;

  padding: 16px;

  display: grid;
  grid-template-rows: repeat(5, auto);
  row-gap: 16px;

  h4 {
    grid-column: 1 / -1;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .input {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 130px;
    justify-items: space-between;
    align-items: center;

    input {
      text-align: right;
      font-weight: 700;
      &::-webkit-calendar-picker-indicator {
        margin: 0;
      }
    }
  }

  .books {
    display: grid;
    grid-template-columns: repeat(5, auto);
    row-gap: 15px;

    button {
      cursor: pointer;

      img {
        height: 65px;
        width: 40px;
      }

      &:hover,
      &.selected {
        transform: scale(1.3);
      }
    }
  }

  input,
  button {
    border: none;
    outline: none;
    background: none;
    font-family: "Times New Roman";
  }

  .add-book {
    cursor: pointer;
    background: #38e655;
    border-radius: 5px;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 5px;
    box-shadow: 0px 2px 0px 2px #1bc133;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      box-shadow: 0px -2px 0px 2px #1bc133;
    }
  }
`;
