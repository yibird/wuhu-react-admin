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

export const rules: Rule[] = [...flexRules(), ...borderRules(), ...textRules()];
