import React from "react";

import { Clock } from "neetoicons";
import { Tag, Label, Avatar } from "neetoui/v2";

export const CARD_DATA = {
  headerLabel: "How to claim the warranty?",
  bodyText: `Are you getting my texts???" she texted to him. He glanced at
              it and chuckled under his breath. Of course he was getting them,
              but if he wasn't getting.`,
  footerContent: (
    <>
      <Tag label="Getting Started" className="my-auto" />
      <div className="flex flex-1">
        <Label
          helpIconProps={{
            icon: Clock,
            tooltipProps: {
              content: "Wednessday, 10:30AM",
              position: "bottom",
            },
          }}
          className="ml-auto"
        >
          Created 2 hours ago
        </Label>
        <Avatar
          size="small"
          className="ml-2"
          user={{
            name: "neeto UI",
          }}
        />
      </div>
    </>
  ),
};
