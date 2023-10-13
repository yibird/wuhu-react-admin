export interface Project {
  avatar?: string;
  name?: string;
  describe?: string;
  master?: string;
  createAt?: string;
}

export interface QuickActions {
  id: number;
  name?: string;
  icon?: string;
}

export interface Team {
  id: number;
  name?: string;
  icon?: string;
}

export interface WorkbenchData {
  projects?: Project[];
  quickActions?: QuickActions[];
  teams?: Team[];
}
