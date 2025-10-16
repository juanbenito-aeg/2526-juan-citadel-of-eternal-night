import { Inhabitants as InhabitantsProps } from "../interfaces/Inhabitants";
import { InhabitantRole } from "../constants";

export default function Inhabitants({ roles }: InhabitantsProps) {
  const totalPopulation: number = getTotalPopulation();

  function getTotalPopulation(): number {
    let totalPopulation: number = 0;

    roles.forEach((role) => {
      const currentRole = role.role;

      if (currentRole === InhabitantRole.VILLAGER) {
        const professions = role.professions!;

        professions.forEach((profession) => {
          totalPopulation += profession.count;
        });
      } else {
        totalPopulation += role.count!;
      }
    });

    return totalPopulation;
  }

  return (
    <>
      <h2>Inhabitants</h2>

      <p>Total Population: {totalPopulation}</p>
    </>
  );
}
