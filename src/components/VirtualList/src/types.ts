
export interface VirtualListProps {
    /**
     * @desc 列表数据
     * @default []
     */
    data?: any[];
    /**
     * @desc 外部容器长度
     * @default 500
     */
    size?: number;
    /**
     * @desc 列表项的长度
     * @default 50
     */
    itemSize?: number;
    /**
     * @desc 列表项的预估长度
     * @default 50
     */
    estimatedItemSize?: number;

    /**
     * @desc 接收缓冲区数据与可视区数据的比例
     * @default 1
     */
    bufferScale?: number
}