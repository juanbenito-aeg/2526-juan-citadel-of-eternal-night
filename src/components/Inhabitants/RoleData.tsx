import { RoleDataProps } from "../../interfaces/Inhabitants";

function RoleData({ isActive, data }: RoleDataProps) {
  return (
    <div className="border">
      <h3>{data.role}</h3>
    </div>
  );
}

export default RoleData;
