import { InhabitantRole } from "../constants";

interface Inhabitants {
  roles: Role[];
}

interface Role {
  role: string;
  count?: number;
  equipment?: Equipment;
  professions?: Profession[];
}

interface Equipment {
  weapon?: string;
  armor?: string;
  shield?: string;
  staff?: string;
  robe?: string;
  amulet?: string;
}

interface Profession {
  type: string;
  count: number;
}

type SetActiveRole = (activeRole: InhabitantRole | string) => void;

interface RolesListProps {
  roles: Role[];
  activeRole: InhabitantRole | null;
  setActiveRole: SetActiveRole;
}

interface RoleDataProps {
  isActive: boolean;
  setActiveRole: SetActiveRole;
  data: Role;
}

export type { Inhabitants, RolesListProps, RoleDataProps };
