import { css } from "@emotion/react";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import { Icon } from "@/component/common/Icon";
import { Typography } from "@/component/common/typography";
import { TagBox } from "@/component/home";
import { Space } from "@/types/spaceType";

type SpaceOverviewProps = {
  space: Space;
};

const SpaceOverview = forwardRef<HTMLDivElement, SpaceOverviewProps>(
  ({ space: { id, category, bannerUrl, fieldList, name, introduction, memberCount } }, ref) => {
    const navigate = useNavigate();
    return (
      <div
        ref={ref}
        onClick={() => {
          navigate(`/space/${id}`);
        }}
        key={id}
        css={css`
          width: 100%;
          height: auto;
          background-color: #ffffff;
          padding: 1.9rem 1.8rem 1.6rem 1.8rem;
          display: flex;
          gap: 1.6rem;
          border-radius: 1.2rem;
        `}
      >
        <div
          css={css`
            width: 4rem;
            height: 100%;
          `}
        >
          <img
            src={bannerUrl}
            css={css`
              width: 4rem;
              height: 4rem;
              background-color: #eef2f9;
              border-radius: 100%;
            `}
          />
        </div>
        <div
          css={css`
            width: calc(100% - 5.6rem);
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          `}
        >
          <Typography variant="S2">{name}</Typography>
          <Typography variant="B2" color="darkGray">
            {introduction}
          </Typography>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-between;
              margin-top: 1.4rem;
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 0.4rem;
                width: 87%;
                overflow-x: auto;
                white-space: nowrap;
              `}
            >
              <TagBox tagName={category} />
              {fieldList.map((field, idx) => (
                <TagBox key={idx} tagName={field} />
              ))}
            </div>
            <div
              css={css`
                width: auto;
                height: 2rem;
                display: flex;
                align-items: center;
                gap: 0.4rem;
              `}
            >
              <Icon icon="ic_user" size="2rem" />
              <div
                css={css`
                  margin-top: 0.3rem;
                `}
              >
                <Typography>{memberCount}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

SpaceOverview.displayName = "SpaceOverview";

export { SpaceOverview };