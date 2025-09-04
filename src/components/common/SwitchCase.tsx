import type { ReactNode } from 'react';

interface SwitchCaseProps<T extends string | number> {
  value: T | null | undefined;
  caseBy: Partial<Record<T, ReactNode>>;
  defaultComponent?: ReactNode | null;
}

export default function SwitchCase<T extends string | number>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchCaseProps<T>) {
  if (value == null) {
    return defaultComponent;
  }
  return caseBy[value] ?? defaultComponent;
}
