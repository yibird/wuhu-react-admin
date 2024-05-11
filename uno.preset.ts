import { Rule } from 'unocss';

function createSizeShortcut(count: number) {
  return Array.from({ length: count + 1 }).reduce((acc: object, _, i) => {
    acc[`size-${i}`] = `w-${i} h-${i}`;
    return acc;
  }, {});
}
export const shortcuts = {
  full: 'w-full h-full',
  'flex-center': 'flex justify-center items-center',
  'flex-x-center': 'flex justify-center',
  'flex-y-center': 'flex items-center',
  'flex-between': 'flex justify-between',
  'flex-between-center': 'flex justify-between items-center',
  'flex-center-between': 'flex justify-center items-stretch',
  'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  'absolute-x-center': 'absolute left-1/2 transform -translate-x-1/2',
  'absolute-y-center': 'absolute top-1/2 transform -translate-y-1/2',
  'fixed-center': 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  'fixed-x-center': 'fixed left-1/2 transform -translate-x-1/2',
  'fixed-y-center': 'fixed top-1/2 transform -translate-y-1/2',
  ...createSizeShortcut(1000),
};

export interface ShadowOption {
  value: number;
  blur: number;
  spread: number;
  color: string;
}
export interface ColorOption {
  name: string;
  color: string;
}
const shadowPositions = ['up', 'down', 'left', 'right'];
const shadowOptions: ShadowOption[] = [
  {
    value: 2,
    blur: 4,
    spread: -2,
    color: 'rgba(0, 0, 0, 0.16)',
  },
  {
    value: 3,
    blur: 6,
    spread: 0,
    color: 'rgba(0, 0, 0, 0.12)',
  },
  {
    value: 5,
    blur: 12,
    spread: 4,
    color: 'rgba(0, 0, 0, 0.09)',
  },
];

function createShadows(options: ShadowOption[], pisitions: string[]) {
  return options.reduce((acc, item, i) => {
    return pisitions.reduce((_, position) => {
      const x = ['up', 'down'].includes(position)
        ? 0
        : position === 'right'
          ? item.value
          : -item.value;
      const y = ['left', 'right'].includes(position)
        ? 0
        : position === 'down'
          ? item.value
          : -item.value;
      acc[`${position}${i === 0 ? '' : '-' + i}`] = {
        'box-shadow': `${x}px ${y}px ${item.blur}px ${item.spread}px ${item.color}`,
      };
      return acc;
    }, {});
  }, {});
}

const borderOptions = [
  {
    name: 'e8',
    color: '#e8e8e8',
  },
  {
    name: 'eee',
    color: '#eee',
  },
  {
    name: 'ef',
    color: '#efefef',
  },
  {
    name: 'f2',
    color: '#f2f2f2',
  },
  {
    name: 'f5',
    color: '#f5f5f5',
  },
];
const borderPositions = ['', 'x', 'y', 't', 'b', 'l', 'r'];
function createBorders(colors: ColorOption[], pisitions: string[]) {
  const positionMap = {
    x: 'border-inline',
    y: 'border-block',
    t: 'border-top',
    b: 'border-bottom',
    l: 'border-left',
    r: 'border-right',
  };
  return colors.reduce((acc, item, i) => {
    return pisitions.reduce((_, position) => {
      const name = position ? `b-${position}` : 'b';
      const key = positionMap[position] || 'border';
      acc[`${name}-${item.name}`] = { [key]: `1px solid ${item.color}` };
      return acc;
    }, {});
  }, {});
}

const colorOptions: ColorOption[] = [
  {
    name: 'red-1',
    color: '#FFECE8',
  },
  {
    name: 'red-2',
    color: '#FDCDC5',
  },
  {
    name: 'red-3',
    color: '#FBACA3',
  },
  {
    name: 'red-4',
    color: '#F98981',
  },
  {
    name: 'red-5',
    color: '#F76560',
  },
  {
    name: 'red-6',
    color: '#F53F3F',
  },
  {
    name: 'red-7',
    color: '#CB272D',
  },
  {
    name: 'red-8',
    color: '#A1151E',
  },
  {
    name: 'red-9',
    color: '#770813',
  },
  {
    name: 'red-10',
    color: '#4D000A',
  },
  {
    name: 'orangered-1',
    color: '#FFF3E8',
  },
  {
    name: 'orangered-2',
    color: '#FDDDC3',
  },
  {
    name: 'orangered-3',
    color: '#FCC59F',
  },
  {
    name: 'orangered-4',
    color: '#FAAC7B',
  },
  {
    name: 'orangered-5',
    color: '#F99057',
  },
  {
    name: 'orangered-6',
    color: '#F77234',
  },
  {
    name: 'orangered-7',
    color: '#CC5120',
  },
  {
    name: 'orangered-8',
    color: '#A23511',
  },
  {
    name: 'orangered-9',
    color: '#771F06',
  },
  {
    name: 'orangered-10',
    color: '#4D0E00',
  },
  {
    name: 'orange-1',
    color: '#FFF7E8',
  },
  {
    name: 'orange-2',
    color: '#FFE4BA',
  },
  {
    name: 'orange-3',
    color: '#FFCF8B',
  },
  {
    name: 'orange-4',
    color: '#FFB65D',
  },
  {
    name: 'orange-5',
    color: '#FF9A2E',
  },
  {
    name: 'orange-6',
    color: '#FF7D00',
  },
  {
    name: 'orange-7',
    color: '#D25F00',
  },
  {
    name: 'orange-8',
    color: '#A64500',
  },
  {
    name: 'orange-9',
    color: '#792E00',
  },
  {
    name: 'orange-10',
    color: '#4D1B00',
  },
  {
    name: 'gold-1',
    color: '#FFFCE8',
  },
  {
    name: 'gold-2',
    color: '#FDF4BF',
  },
  {
    name: 'gold-3',
    color: '#FCE996',
  },
  {
    name: 'gold-4',
    color: '#FADC6D',
  },
  {
    name: 'gold-5',
    color: '#F9CC45',
  },
  {
    name: 'gold-6',
    color: '#F7BA1E',
  },
  {
    name: 'gold-7',
    color: '#CC9213',
  },
  {
    name: 'gold-8',
    color: '#A26D0A',
  },
  {
    name: 'gold-9',
    color: '#774B04',
  },
  {
    name: 'gold-10',
    color: '#4D2D00',
  },
  {
    name: 'yellow-1',
    color: '#FEFFE8',
  },
  {
    name: 'yellow-2',
    color: '#FEFEBE',
  },
  {
    name: 'yellow-3',
    color: '#FDFA94',
  },
  {
    name: 'yellow-4',
    color: '#FCF26B',
  },
  {
    name: 'yellow-5',
    color: '#FBE842',
  },
  {
    name: 'yellow-6',
    color: '#FADC19',
  },
  {
    name: 'yellow-7',
    color: '#CFAF0F',
  },
  {
    name: 'yellow-8',
    color: '#A38408',
  },
  {
    name: 'yellow-9',
    color: '#785D03',
  },
  {
    name: 'yellow-10',
    color: '#4D3800',
  },
  {
    name: 'lime-1',
    color: '#FCFFE8',
  },
  {
    name: 'lime-2',
    color: '#EDF8BB',
  },
  {
    name: 'lime-3',
    color: '#DCF190',
  },
  {
    name: 'lime-4',
    color: '#C9E968',
  },
  {
    name: 'lime-5',
    color: '#B5E241',
  },
  {
    name: 'lime-6',
    color: '#9FDB1D',
  },
  {
    name: 'lime-7',
    color: '#7EB712',
  },
  {
    name: 'lime-8',
    color: '#5F940A',
  },
  {
    name: 'lime-9',
    color: '#437004',
  },
  {
    name: 'lime-10',
    color: '#2A4D00',
  },
  {
    name: 'green-1',
    color: '#E8FFEA',
  },
  {
    name: 'green-2',
    color: '#AFF0B5',
  },
  {
    name: 'green-3',
    color: '#7BE188',
  },
  {
    name: 'green-4',
    color: '#4CD263',
  },
  {
    name: 'green-5',
    color: '#23C343',
  },
  {
    name: 'green-6',
    color: '#00B42A',
  },
  {
    name: 'green-7',
    color: '#009A29',
  },
  {
    name: 'green-8',
    color: '#008026',
  },
  {
    name: 'green-9',
    color: '#006622',
  },
  {
    name: 'green-10',
    color: '#004D1C',
  },
  {
    name: 'cyan-1',
    color: '#E8FFFB',
  },
  {
    name: 'cyan-2',
    color: '#B7F4EC',
  },
  {
    name: 'cyan-3',
    color: '#89E9E0',
  },
  {
    name: 'cyan-4',
    color: '#5EDFD6',
  },
  {
    name: 'cyan-5',
    color: '#37D4CF',
  },
  {
    name: 'cyan-6',
    color: '#14C9C9',
  },
  {
    name: 'cyan-7',
    color: '#0DA5AA',
  },
  {
    name: 'cyan-8',
    color: '#07828B',
  },
  {
    name: 'cyan-9',
    color: '#03616C',
  },
  {
    name: 'cyan-10',
    color: '#00424D',
  },
  {
    name: 'blue-1',
    color: '#E8F7FF',
  },
  {
    name: 'blue-2',
    color: '#C3E7FE',
  },
  {
    name: 'blue-3',
    color: '#9FD4FD',
  },
  {
    name: 'blue-4',
    color: '#7BC0FC',
  },
  {
    name: 'blue-5',
    color: '#57A9FB',
  },
  {
    name: 'blue-6',
    color: '#3491FA',
  },
  {
    name: 'blue-7',
    color: '#206CCF',
  },
  {
    name: 'blue-8',
    color: '#114BA3',
  },
  {
    name: 'blue-9',
    color: '#063078',
  },
  {
    name: 'blue-10',
    color: '#001A4D',
  },
  {
    name: 'arcoblue-1',
    color: '#E8F3FF',
  },
  {
    name: 'arcoblue-2',
    color: '#BEDAFF',
  },
  {
    name: 'arcoblue-3',
    color: '#94BFFF',
  },
  {
    name: 'arcoblue-4',
    color: '#6AA1FF',
  },
  {
    name: 'arcoblue-5',
    color: '#4080FF',
  },
  {
    name: 'arcoblue-6',
    color: '#165DFF',
  },
  {
    name: 'arcoblue-7',
    color: '#0E42D2',
  },
  {
    name: 'arcoblue-8',
    color: '#072CA6',
  },
  {
    name: 'arcoblue-9',
    color: '#031A79',
  },
  {
    name: 'arcoblue-10',
    color: '#000D4D',
  },
  {
    name: 'purple-1',
    color: '#F5E8FF',
  },
  {
    name: 'purple-2',
    color: '#DDBEF6',
  },
  {
    name: 'purple-3',
    color: '#C396ED',
  },
  {
    name: 'purple-4',
    color: '#A871E3',
  },
  {
    name: 'purple-5',
    color: '#8D4EDA',
  },
  {
    name: 'purple-6',
    color: '#722ED1',
  },
  {
    name: 'purple-7',
    color: '#551DB0',
  },
  {
    name: 'purple-8',
    color: '#3C108F',
  },
  {
    name: 'purple-9',
    color: '#27066E',
  },
  {
    name: 'purple-10',
    color: '#16004D',
  },
  {
    name: 'pinkpurple-1',
    color: '#FFE8FB',
  },
  {
    name: 'pinkpurple-2',
    color: '#F7BAEF',
  },
  {
    name: 'pinkpurple-3',
    color: '#F08EE6',
  },
  {
    name: 'pinkpurple-4',
    color: '#E865DF',
  },
  {
    name: 'pinkpurple-5',
    color: '#E13EDB',
  },
  {
    name: 'pinkpurple-6',
    color: '#D91AD9',
  },
  {
    name: 'pinkpurple-7',
    color: '#B010B6',
  },
  {
    name: 'pinkpurple-8',
    color: '#8A0993',
  },
  {
    name: 'pinkpurple-9',
    color: '#650370',
  },
  {
    name: 'pinkpurple-10',
    color: '#42004D',
  },
  {
    name: 'magenta-1',
    color: '#FFE8F1',
  },
  {
    name: 'magenta-2',
    color: '#FDC2DB',
  },
  {
    name: 'magenta-3',
    color: '#FB9DC7',
  },
  {
    name: 'magenta-4',
    color: '#F979B7',
  },
  {
    name: 'magenta-5',
    color: '#F754A8',
  },
  {
    name: 'magenta-6',
    color: '#F5319D',
  },
  {
    name: 'magenta-7',
    color: '#CB1E83',
  },
  {
    name: 'magenta-8',
    color: '#A11069',
  },
  {
    name: 'magenta-9',
    color: '#77064F',
  },
  {
    name: 'magenta-10',
    color: '#4D0034',
  },
  {
    name: 'gray-1',
    color: '#F7F8FA',
  },
  {
    name: 'gray-2',
    color: '#F2F3F5',
  },
  {
    name: 'gray-3',
    color: '#E5E6EB',
  },
  {
    name: 'gray-4',
    color: '#C9CDD4',
  },
  {
    name: 'gray-5',
    color: '#A9AEB8',
  },
  {
    name: 'gray-6',
    color: '#86909C',
  },
  {
    name: 'gray-7',
    color: '#6B7785',
  },
  {
    name: 'gray-8',
    color: '#4E5969',
  },
  {
    name: 'gray-9',
    color: '#272E3B',
  },
  {
    name: 'gray-10',
    color: '#1D2129',
  },
];
function createColors(options: ColorOption[]) {
  return options.reduce((acc, item, i) => {
    acc[`text-${item.name}`] = {
      color: item.color,
    };
    acc[`bg-${item.name}`] = {
      'background-color': item.color,
    };
    return acc;
  }, {});
}

const textSizes = {
  xs: {
    'font-size': '12px',
    'line-height': '16px',
  },
  sm: {
    'font-size': '14px',
    'line-height': '18px',
  },
  base: {
    'font-size': '16px',
    'line-height': '20px',
  },
  md: {
    'font-size': '18px',
    'line-height': '30px',
  },
  lg: {
    'font-size': '24px',
    'line-height': '32px',
  },
  xl: {
    'font-size': '28px',
    'line-height': '36px',
  },
  '2xl': {
    'font-size': '36px',
    'line-height': '44px',
  },
  '3xl': {
    'font-size': '48px',
    'line-height': '56px',
  },
  '4xl': {
    'font-size': '60px',
    'line-height': '68px',
  },
  '5xl': {
    'font-size': '72px',
    'line-height': '80px',
  },
};
const shadows = createShadows(shadowOptions, shadowPositions);
const borders = createBorders(borderOptions, borderPositions);
const colors = createColors(colorOptions);

export const rules: Rule[] = [
  [/^text-(\w+)$/, ([, s]) => textSizes[s]],
  [/^shadow-(\w+(?:-\w+)*)$/, ([_, s]) => shadows[s]],
  [/^b-(\w+(?:-\w+)*)$/, ([_, s]) => borders[`b-${s}`]],

  [/^bg-(\w+)$/, ([_, s]) => colors[`bg-${s}`]],
];
