import { EquipmentProps } from "../../interfaces/Resources";
import { capitalize } from "../../utils";

function Equipment({ type, list }: EquipmentProps) {
  const capitalizedType = capitalize(type);

  return (
    <div className="w-1/2">
      <h4>{capitalizedType}</h4>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <p>
                {item.type} — {item.quantity}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Equipment;
