import { Rule } from "unocss";

const directions = [
  {
    attr: "top",
    prefix: "t",
  },
  {
    attr: "right",
    prefix: "r",
  },
  {
    attr: "bottom",
    prefix: "b",
  },
  {
    attr: "left",
    prefix: "l",
  },
];

function flexRules(): Rule[] {
  return [
    /** flex */
    [
      "flex-x-center",
      {
        display: "flex",
        "justify-content": "center",
      },
    ],
    [
      "flex-y-center",
      {
        display: "flex",
        "align-items": "center",
      },
    ],
    [
      "flex-center",
      { display: "flex", "justify-content": "center", "align-items": "center" },
    ],
    [
      "flex-between-center",
      { display: "flex", "justify-content": "space-between", "align-items": "center" },
    ],
    [
      "flex-center-between",
      { display: "flex", "justify-content": "center", "align-items": "stretch" },
    ]
  ];
}

const borderColors = [
  "#fff",
  "#fafafa",
  "#f5f5f5",
  "#f6f6f6",
  "#f0f0f0",
  "#d9d9d9",
  "#bfbfbf",
  "#8c8c8c",
  "#595959",
  "#434343",
  "#262626",
  "#1f1f1f",
  "#141414",
  "#000",
];
function borderRules() {
  const rules: Rule[] = [["rounded-half", { "border-radius": "50%" }]];
  borderColors.forEach((item) => {
    rules.push([`border-solid-${item}`, { border: `1px solid ${item}` }]);
    directions.forEach((d) => {
      rules.push([
        `border-solid-${d.prefix}-${item}`,
        { ["border-" + d.attr]: `1px solid ${item}` },
      ]);
    });
  });
  return rules;
}

function textRules(): Rule[] {
  return [["text-inherit", { color: "inherit" }]];
}

function positionRules(): Rule[] {
  return [
    [
      "absolute-center",
      {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      },
    ],
    [
      "absolute-x-center",
      {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },
    ],
    [
      "absolute-y-center",
      {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
    ],
  ];
}

function textSizeRules(): Rule[] {
  return [
    ["text-xs", { "font-size": "10.5px", "line-height": "14px" }],
    ["text-sm", { "font-size": "12.25px", "line-height": "17.5px" }],
    ["text-base", { "font-size": "14px", "line-height": "22px" }],
    ["text-lg", { "font-size": "16px", "line-height": "24.5px" }],
    ["text-xl", { "font-size": "18px", "line-height": "28px" }],
    ["text-2xl", { "font-size": "22px", "line-height": "32px" }],
    ["text-3xl", { "font-size": "26px", "line-height": "36px" }],
    ["text-4xl", { "font-size": "32px", "line-height": "40px" }],
    ["text-5xl", { "font-size": "42px", "line-height": 1 }],
    ["text-6xl", { "font-size": "52px", "line-height": 1 }],
    ["text-7xl", { "font-size": "64px", "line-height": 1 }],
    ["text-8xl", { "font-size": "84px", "line-height": 1 }],
    ["text-9xl", { "font-size": "112px", "line-height": 1 }],
  ];
}

export const rules: Rule[] = [
  ...flexRules(),
  ...borderRules(),
  ...textRules(),
  ...positionRules(),
  ...textSizeRules(),
];
