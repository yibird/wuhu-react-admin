import { useLocation, useNavigate } from 'react-router-dom';
export interface UseRefreshOptions {
  redirectPath?: string;
}

export function useRefresh(options: UseRefreshOptions = {}) {
  options = {
    redirectPath: '/redirect',
    ...options,
  };
  const location = useLocation(),
    navigate = useNavigate();
  const refresh = () => {
    if (options.redirectPath) {
      navigate(options.redirectPath, {
        state: { from: location.pathname },
      });
    }
  };
  return { refresh };
}
