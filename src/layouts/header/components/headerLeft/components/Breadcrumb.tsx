import React, { useMemo } from "react";
import { Breadcrumb as ABreadcrumb, MenuProps } from "antd";
import { useStore } from "@/store";
import { toTree } from "@/utils/tree";
import { IMenuItem } from "@/common/menus";

function getItem(menus?: IMenuItem[]): MenuProps | undefined {
  if (!menus) return;
  return { items: menus.map(({ id, title }) => ({ key: id, label: title })) };
}

function Breadcrumb() {
  const { flatMenus, tabList, current } = useStore();

  const menus = useMemo(() => {
    if (!flatMenus[current]) return [];
    const item = flatMenus.find((item) => item.id === tabList[current].id)!;
    return toTree(flatMenus, item.id);
  }, [current]);

  return (
    <ABreadcrumb className="mx-10">
      {menus.map((item) => {
        return (
          <ABreadcrumb.Item key={item.id} menu={getItem(item.children)}>
            {item.title}
          </ABreadcrumb.Item>
        );
      })}
    </ABreadcrumb>
  );
}

export default Breadcrumb;

/**
 * 哈希查找算法Typescript实现
 * @param arr 查找的数组
 * @param target 目标查找元素
 * @returns 返回目标查找元素的下标,如果不存在则返回-1
 */
function hashSearch<T extends number | bigint>(arr: T[], target: T) {
  let hashTable: any[] = [],
    hashKey;
  for (let i = 0, len = arr.length; i < len; i++) {
    // 计算哈希键
    hashKey = arr[i] % 11;
    // 如果哈希表中没有该哈希键,则将当前值存入
    if (!hashTable[hashKey]) {
      hashTable[hashKey] = arr[i];
    } else {
      // 如果哈希表中已存在该哈希键,则将当前值存入一个数组
      if (hashTable[hashKey].constructor !== Array) {
        hashTable[hashKey] = [hashTable[hashKey], arr[i]];
      } else {
        hashTable[hashKey].push(arr[i]);
      }
    }
  }

  // 计算目标值的哈希键
  hashKey = target % 11;
  // 如果哈希表中没有该哈希键,则返回-1
  if (!hashTable[hashKey]) {
    return -1;
  } else if (hashTable[hashKey].constructor !== Array) {
    // 如果哈希表中只有一个值,则直接返回
    return hashTable[hashKey];
  } else {
    // 如果哈希表中存在一个数组,则遍历数组进行查找
    for (var i = 0; i < hashTable[hashKey].length; i++) {
      if (hashTable[hashKey][i] === target) {
        return target;
      }
    }
    // 如果没有找到,则返回-1
    return -1;
  }
}
