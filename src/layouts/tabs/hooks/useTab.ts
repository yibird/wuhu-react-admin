import { IMenuItem } from "@/common/menus";
import { useStoreSelector } from "@/store";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRollPage } from "./useRollPage";

export function useTab<E extends HTMLElement>() {
  const tabRef = useRef<E>(null);
  const { autoRollPage, autoRollElement, rollPageLeft, rollPageRight } =
    useRollPage(tabRef);
  const navigate = useNavigate();

  const { current, list, setCurrentAction, addTabAction, closeTabAction } =
    useStoreSelector.useTab();

  function toRoute({ path }: IMenuItem) {
    path && navigate(path);
  }

  // 添加tab
  function addTab(menu: IMenuItem, el?: HTMLElement) {
    toRoute(menu);
    addTabAction(menu);
    autoRollPage(current + 1);
  }

  // 选择tab
  function changeTab(index: number) {
    if (current === index) return;
    toRoute(list[index]);
    setCurrentAction(index);
    autoRollPage(index);
  }

  // 根据index关闭tab
  function closeTab(index: number) {
    closeTabAction(index);
    const activeIndex = index === 0 ? -1 : index >= current ? index - 1 : index;
    toRoute(list[activeIndex]);
    autoRollPage(activeIndex);
  }

  // 关闭其他tab
  function closeOtherTab() {}

  return {
    tabRef,
    tabList: list,
    current,
    addTab,
    changeTab,
    closeTab,
    closeOtherTab,
    autoRollPage,
    autoRollElement,
    rollPageLeft,
    rollPageRight,
  };
}
