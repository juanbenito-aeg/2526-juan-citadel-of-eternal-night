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

export default Inhabitants;
