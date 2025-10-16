import { ReactNode } from "react";
import { InhabitantRole } from "../../constants";
import { RoleDataProps } from "../../interfaces/Inhabitants";
import { capitalize } from "../../utils";

function RoleData({ isActive, setActiveRole, data }: RoleDataProps) {
  const content: ReactNode = getContent();

  function getContent(): ReactNode {
    let heading;
    let listItems;

    if (data.role === InhabitantRole.VILLAGER) {
      heading = "Professions";

      listItems = data.professions!.map((profession, index) => {
        return (
          <li key={index}>
            <p>
              {profession.type}: {profession.count}
            </p>
          </li>
        );
      });
    } else {
      heading = "Equipment";

      const equipmentTypes = Object.keys(data.equipment!);

      listItems = equipmentTypes.map((equipmentType, index) => {
        return (
          <li key={index}>
            <p>
              {capitalize(equipmentType)}:{" "}
              {(data.equipment! as any)[equipmentType]}
            </p>
          </li>
        );
      });
    }

    const content = (
      <>
        <hr />
        <h4>{heading}</h4>
        <ul>{listItems}</ul>
      </>
    );

    return content;
  }

  function handleClick() {
    const activeRole = isActive ? "" : data.role;

    setActiveRole(activeRole);
  }

  return (
    <div className="border hover:cursor-pointer" onClick={handleClick}>
      <h3>{data.role}</h3>

      {isActive && content}
    </div>
  );
}

export default RoleData;
