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

interface RolesListProps {
  roles: Role[];
  activeRole: InhabitantRole | null;
}

interface RoleDataProps {
  isActive: boolean;
  data: Role;
}

export type { Inhabitants, RolesListProps, RoleDataProps };
