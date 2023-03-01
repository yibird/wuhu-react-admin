import { IMenuItem } from "@/common/menus";
import { useStoreSelector } from "@/store";
import { useNavigate } from "react-router-dom";

export function useTab() {
  console.log("useTab");

  const navigate = useNavigate();
  const { current, list, setCurrentAction, addTabAction, closeTabAction } =
    useStoreSelector.useTab();

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
    toRoute(list[index]);
    setCurrentAction(index);
  }

  // 根据index关闭tab
  function closeTab(index: number) {
    closeTabAction(index);
    const activeIndex = index === 0 ? -1 : index >= current ? index - 1 : index;
    toRoute(list[activeIndex]);
  }

  // 关闭其他tab
  function closeOtherTab() {}

  return {
    tabList: list,
    current,
    addTab,
    changeTab,
    closeTab,
    closeOtherTab,
  };
}
