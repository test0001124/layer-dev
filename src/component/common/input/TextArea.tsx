import { css } from "@emotion/react";
import { forwardRef, useContext } from "react";

import { InputContext } from "./InputLabelContainer";

import { Typography } from "@/component/common/typography";

type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
  height?: string;
  count?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef(function ({ id, width = "100%", height = "8.4rem", count, ...props }: TextAreaProps) {
  const { maxLength, value } = props;
  const textareaContext = useContext(InputContext);
  return (
    <div>
      <div
        css={css`
          width: ${width};
          border: 1px solid ${"#e3e6ea"}; // FIXME: 디자인 토큰 적용하기
          border-radius: 0.8rem;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          height: ${height};
        `}
      >
        <textarea
          id={id || textareaContext?.id}
          css={css`
            width: 100%;
            height: 100%;
          `}
          {...props}
        />
        {count && maxLength && (
          <div
            css={css`
              align-self: flex-end;
            `}
          >
            <Typography variant="CAPTION" color={"lightGrey"}>{`${value.length}/${maxLength}`}</Typography>
          </div>
        )}
      </div>
    </div>
  );
});

TextArea.displayName = "TextArea";
