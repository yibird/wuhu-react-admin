export interface Message {
  name: string;
  avatar?: string;
  describe: string;
  time: string;
}

export interface ListPops {
  list: Message[];
  onDel?: (index: number) => void;
}
export interface ItemProps {
  item: Message;
  index: number;
  isLast?: boolean;
  onDel?: (index: number) => void;
}
