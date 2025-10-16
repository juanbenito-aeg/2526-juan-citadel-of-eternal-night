enum Section {
  LOCATION = "Location",
  DEFENSES = "Defenses",
  INHABITANTS = "Inhabitants",
  RESOURCES = "Resources",
  HISTORY = "History",
}

enum LandmarkType {
  CAVE = "Cave",
  RUINS = "Ruins",
  TOWN = "Town",
}

const MAX_AMMUNITION_COUNT = 1000;

enum InhabitantRole {
  SOLDIER = "Soldier",
  MAGE = "Mage",
  VILLAGER = "Villager",
}

export { Section, LandmarkType, MAX_AMMUNITION_COUNT, InhabitantRole };
