export interface Message {
  type: number;
  title: string;
  describe: string;
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
