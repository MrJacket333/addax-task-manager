import type { TaskPriority } from "@/types/global.types";
import styled from "styled-components";
import { PRIORITY_COLORS } from "./TaskPrioritySection.constants";

export const PriorityBlock = styled.div<{ $priority: TaskPriority, $selected?: boolean, $highlighted?: boolean}>`
  height: 8px;
  border-radius: 3px;
  background-color: ${({ $priority, $selected }) => $selected ? PRIORITY_COLORS[$priority] : 'white'};
  border: ${({ $highlighted }) => $highlighted ? '1px solid gray' : 'none'};
  width: 100%;
`;

export const PrioritySectionTitle = styled.span`
  display: inline-block;
  font-size: 1em;
  margin-bottom: 0.5rem;
`;

export const PrioritySectionContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const PrioritySectionWrapper = styled.div`
  margin: 1rem 0;
`