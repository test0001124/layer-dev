import { css } from "@emotion/react";

import * as icons from "@/assets/svgs";
import { Icon } from "@/component/common/Icon";
import { ResultContainer } from "@/component/write/template/complete/ResultContainer.tsx";
import { SATISTFACTION_COLOR } from "@/component/write/template/template.const.ts";

type IconType = keyof typeof icons;
type SatisfactionProps = {
  question: string;
  index: number;
};

export function CSatisfactionTemplate({ question = "진행상황에 대해 얼마나 만족하시나요?", index: SatisfactionIdx }: SatisfactionProps) {
  const emotions: IconType[] = ["ic_very_poor", "ic_poor", "ic_commonly", "ic_good", "ic_very_good"];
  return (
    <ResultContainer question={question}>
      {emotions.map((item, index) => {
        return (
          <div key={index}>
            <Icon
              icon={item}
              size={4}
              css={css`
                circle,
                ellipse {
                  fill: ${SatisfactionIdx === index && SATISTFACTION_COLOR[SatisfactionIdx]};
                  transition: 0.4s all;
                }
              `}
            />
          </div>
        );
      })}
    </ResultContainer>
  );
}