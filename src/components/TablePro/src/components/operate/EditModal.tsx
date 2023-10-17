import { Space, Modal } from 'antd';

export interface EditModalProps {
  open?: boolean;
  onCancel?: () => void;
}

export function EditModal({ open, onCancel }: EditModalProps) {
  return (
    <Modal title="编辑" open={open} onCancel={onCancel}>
      131313131313
    </Modal>
  );
}
