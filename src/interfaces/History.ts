interface History {
  founded: FoundationData;
  majorEvents: MajorEvent[];
}

interface FoundationData {
  year: number;
  by: string;
}

interface MajorEvent {
  year: number;
  event: string;
  outcome: string;
  description: string;
}

interface EventYearsDropdown {
  majorEvents: MajorEvent[];
}

export type { History, EventYearsDropdown };
