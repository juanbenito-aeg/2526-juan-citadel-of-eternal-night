import { History as HistoryProps } from "../../interfaces/History";

export default function History({ founded, majorEvents }: HistoryProps) {
  return (
    <>
      <h2>History</h2>

      <p>
        Founded in {founded.year} by {founded.by}
      </p>
    </>
  );
}
