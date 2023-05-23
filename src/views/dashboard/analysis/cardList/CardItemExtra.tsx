import { Card, Space, Button } from "antd";

interface CardItemExtraProps {
  type: number;
  onChange: (type: number) => void;
}

export default function CardItemExtra({ type }: CardItemExtraProps) {
  return (
    <Space.Compact block size="small">
      {["年", "月", "日"].map((item, index) => {
        return (
          <Button type={type === index + 1 ? "primary" : "default"} key={item}>
            {item}
          </Button>
        );
      })}
    </Space.Compact>
  );
}
