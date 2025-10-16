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

export default Defenses;
