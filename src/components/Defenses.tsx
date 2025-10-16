import DefensesProps from "../interfaces/Defenses";

export default function Defenses({ walls, towers }: DefensesProps) {
  return (
    <>
      <h2>Citadel Defenses</h2>

      <h3>Walls</h3>

      <p>Material: {walls.material}</p>
      <p>Height: {walls.height} m</p>
    </>
  );
}
