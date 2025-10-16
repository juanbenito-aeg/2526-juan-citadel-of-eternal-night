import { EnchantmentsProps } from "../interfaces/Defenses";
import Enchantment from "./Enchantment";

function Enchantments({ enchantments }: EnchantmentsProps) {
  return (
    <>
      <h4>Enchantments</h4>

      <ul>
        {enchantments.map((enchantment, index) => {
          return (
            <Enchantment
              key={index}
              name={enchantment.name}
              level={enchantment.level}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Enchantments;
