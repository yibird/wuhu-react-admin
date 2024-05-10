export interface Message {
  name: string;
  avatar: string;
  content: string;
  datetime: string;
}

export interface MessageListRef {
  scrollToBottom: () => void;
}

export interface MessageListProps {
  data?: Message[];
}

export interface MessageItemProps extends Message {
  direction?: 'left' | 'right';
}

export interface TextareaProps {
  onEnter?: (value: string) => void;
}

export interface MessageTextarea extends TextareaProps {}
