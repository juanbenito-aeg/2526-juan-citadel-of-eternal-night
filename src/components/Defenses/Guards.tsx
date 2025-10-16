import { GuardsProps } from "../../interfaces/Defenses";

function Guards({ guards }: GuardsProps) {
  return (
    <>
      <h5>Guards</h5>

      <ul>
        {guards.map((guard, index) => {
          return (
            <li key={index}>
              <p>
                {guard.name} — <span className="italic">{guard.rank}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Guards;
