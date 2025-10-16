import { Storage as StorageProps } from "../../interfaces/Resources";

function Storage({ food, water }: StorageProps) {
  return (
    <>
      <h3>Storage</h3>

      <div className="flex">
        <div className="w-1/2">
          <h4>Food</h4>
          <p>Type: {food.type}</p>
          <p>
            Quantity: {food.quantity} {food.unit}
          </p>
        </div>

        <div className="w-1/2">
          <h4>Water</h4>
          <p>Source: {water.source}</p>
          <p>
            Capacity: {water.capacity} {water.unit}
          </p>
        </div>
      </div>
    </>
  );
}

export default Storage;
