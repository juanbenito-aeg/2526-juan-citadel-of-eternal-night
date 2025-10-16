interface Defenses {
  walls: Walls;
  towers: Tower[];
}

interface Walls {
  material: string;
  height: number;
  enchantments: Enchantment[];
}

interface Enchantment {
  name: string;
  level: number;
}

interface Tower {
  name: string;
  height: number;
  armament: Armament;
  guards: Guard[];
}

interface Armament {
  weaponType: string;
  ammunitionType: string;
  ammunitionCount: number;
}

interface Guard {
  name: string;
  rank: string;
}

interface EnchantmentsProps {
  enchantments: Enchantment[];
}

interface TowersProps {
  towers: Tower[];
}

interface GuardsProps {
  guards: Guard[];
}

export type {
  Defenses,
  Enchantment,
  Tower,
  Armament,
  EnchantmentsProps,
  TowersProps,
  GuardsProps,
};
