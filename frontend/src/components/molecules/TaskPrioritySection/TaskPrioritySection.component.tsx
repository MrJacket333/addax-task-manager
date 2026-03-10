import type { TaskPriority } from "@/types/global.types"
import { PriorityBlock, PrioritySectionContainer, PrioritySectionTitle, PrioritySectionWrapper } from "./TaskPrioritySection.styles";
import { PRIORITIES_LIST } from "@/config/constants";

type TaskPrioritySectionProps = {
  selectedValue?: TaskPriority | null;
  onSelect: (newSelectedValue: TaskPriority) => void;
  title?: string;
}

export const TaskPrioritySection = ({ selectedValue, onSelect, title }: TaskPrioritySectionProps) => {
  const selectedPriorityIndex = selectedValue ? PRIORITIES_LIST.indexOf(selectedValue) : -1;

  return <PrioritySectionWrapper>
    {title && <PrioritySectionTitle>{title}</PrioritySectionTitle>}
    <PrioritySectionContainer>
      {PRIORITIES_LIST.map((priority: TaskPriority) => {
        return <PriorityBlock
          key={priority}
          $priority={priority}
          $selected={selectedValue ? PRIORITIES_LIST.indexOf(priority) <= selectedPriorityIndex : false}
          $highlighted
          onClick={() => onSelect(priority)}
        />
      })}
    </PrioritySectionContainer>
  </PrioritySectionWrapper>
}