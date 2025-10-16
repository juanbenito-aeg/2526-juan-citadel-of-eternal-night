import { Dispatch, SetStateAction } from "react";
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
  setActiveRole: any;
}

interface RoleDataProps {
  isActive: boolean;
  setActiveRole: Dispatch<SetStateAction<InhabitantRole | null | string>>;
  data: Role;
}

export type { Inhabitants, RolesListProps, RoleDataProps };
