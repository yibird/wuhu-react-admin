import { NavigateFunction, useNavigate, redirect } from 'react-router-dom';

export function useGo(_navigate?: NavigateFunction) {
  const navigate = _navigate || useNavigate();
  function go(to: string, isReplace: boolean = false) {
    isReplace ? redirect(to) : navigate(to);
  }
  return go;
}

export function useRedo() {}
