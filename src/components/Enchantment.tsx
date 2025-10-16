import { Enchantment as EnchantmentProps } from "../interfaces/Defenses";

function Enchantment({ name, level }: EnchantmentProps) {
  return (
    <li>
      <p>
        {name} (Level {level})
      </p>
    </li>
  );
}

export default Enchantment;
