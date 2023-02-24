import { IMenuItem } from "@/common/menus";
import { useStore, useStoreSelector } from "@/store";
import { useNavigate } from "react-router-dom";

export function useTab() {
  const navigate = useNavigate();
  const { addTabAction, changeTabAction, closeTabAction } = useStore();

  const current = useStoreSelector.useCurrent(),
    tabList = useStoreSelector.useTabList();

  function toRoute({ path }: IMenuItem) {
    path && navigate(path);
  }

  // 添加tab
  function addTab(menu: IMenuItem) {
    toRoute(menu);
    addTabAction(menu);
  }

  // 选择tab
  function changeTab(index: number) {
    if (current === index) return;
    toRoute(tabList[index]);
    changeTabAction(index);
  }

  // 根据index关闭tab
  function closeTab(index: number) {
    closeTabAction(index);
    const activeIndex = index === 0 ? -1 : index >= current ? index - 1 : index;
    toRoute(tabList[activeIndex]);
  }

  // 关闭其他tab
  function closeOtherTab() {}

  return {
    tabList,
    current,
    addTab,
    changeTab,
    closeTab,
    closeOtherTab,
  };
}
