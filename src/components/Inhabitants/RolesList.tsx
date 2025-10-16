import { RolesListProps } from "../../interfaces/Inhabitants";
import RoleData from "./RoleData";

function RolesList({ roles, activeRole, setActiveRole }: RolesListProps) {
  return (
    <div className="flex flex-col gap-y-1">
      {roles.map((role, index) => {
        const currentRole = role.role;

        const isActive = currentRole === activeRole;

        return (
          <RoleData
            key={index}
            isActive={isActive}
            setActiveRole={setActiveRole}
            data={role}
          />
        );
      })}
    </div>
  );
}

export default RolesList;
