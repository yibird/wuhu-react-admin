import type { PaginationProps } from 'antd';
import React, { useEffect, useState } from 'react';
type Callback = () => void;

const defaultPagination: PaginationProps = {
  size: 'default',
  showQuickJumper: true,
  pageSizeOptions: [10, 20, 50, 100, 200],
  defaultPageSize: 10,
  showTotal(total: number) {
    return React.createElement('div', null, [
      React.createElement('span', null, '共'),
      React.createElement('span', { className: 'font-bold mx-4' }, total),
      React.createElement('span', null, '条数据'),
    ]);
  },
};

export function usePagination(options: boolean | PaginationProps = true, callback?: Callback) {
  options = typeof options === 'boolean' ? defaultPagination : { ...defaultPagination, ...options };
  const [pagination, setPagination] = useState(options);
  const { current, pageSize, total } = pagination;

  const setCurrent = (current: number) => setPagination({ ...pagination, current });
  const setPageSize = (pageSize: number) => setPagination({ ...pagination, pageSize });
  const setTotal = (total: number) => setPagination({ ...pagination, total });

  useEffect(() => {
    callback && callback();
  }, [current, pageSize]);

  return {
    current,
    pageSize,
    total,
    pagination,
    setCurrent,
    setPageSize,
    setTotal,
  };
}
