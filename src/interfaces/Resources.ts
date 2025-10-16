interface Resources {
  storage: Storage;
  armory: Armory;
}

interface Storage {
  food: Food;
  water: Water;
}

interface Food {
  type: string;
  quantity: number;
  unit: string;
}

interface Water {
  source: string;
  capacity: number;
  unit: string;
}

interface Armory {
  weapons: Equipment[];
  shields: Equipment[];
}

interface Equipment {
  type: string;
  quantity: number;
}

interface ArmoryProps {
  armory: Armory;
}

interface EquipmentProps {
  type: string;
  list: Equipment[];
}

export type { Resources, Storage, ArmoryProps, EquipmentProps };
