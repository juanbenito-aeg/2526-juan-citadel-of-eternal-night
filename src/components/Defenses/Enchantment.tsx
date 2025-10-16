import { Enchantment as EnchantmentProps } from "../../interfaces/Defenses";

function Enchantment({ name, level }: EnchantmentProps) {
  return (
    <li>
      <p>
        {name} (Level {level})
      </p>

      <div className="h-2.5 w-full rounded-full bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: `${level * 10}%` }}
        ></div>
      </div>
    </li>
  );
}

export default Enchantment;
