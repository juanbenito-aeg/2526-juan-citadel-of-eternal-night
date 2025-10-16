import { Defenses as DefensesProps } from "../interfaces/Defenses";
import Enchantments from "./Enchantments";
import Towers from "./Towers";

export default function Defenses({ walls, towers }: DefensesProps) {
  return (
    <>
      <h2>Citadel Defenses</h2>

      <h3>Walls</h3>

      <p>Material: {walls.material}</p>
      <p>Height: {walls.height} m</p>

      <Enchantments enchantments={walls.enchantments} />

      <Towers towers={towers} />
    </>
  );
}
