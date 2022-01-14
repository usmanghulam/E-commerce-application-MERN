import { FC } from "react";
import { css } from "styled-components";

interface Props {
  display?: string | undefined;
  fontSize?: string | undefined;
  marginLeft?:string | undefined;
  flex?: number | string | undefined;
  justifyContent?: string | undefined;
  width?: string | number | undefined;
  padding?: string | undefined;
  height?: string | undefined;
  flexDirection?: any;
  textAlign?: number | string | any;
  backgroundColor?: string;
  marginRight?:string;
  margin?:string;
  marginBottom?: string;
}
export const mobile = (props: Props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${{...props}}
    }
  `;
};