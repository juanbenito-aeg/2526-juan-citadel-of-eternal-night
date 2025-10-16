import { Resources as ResourcesProps } from "../interfaces/Resources";
import Armory from "./Armory";
import Storage from "./Storage";

export default function Resources({ storage, armory }: ResourcesProps) {
  return (
    <>
      <h2>Resources</h2>

      <Storage food={storage.food} water={storage.water} />

      <Armory armory={armory} />
    </>
  );
}
