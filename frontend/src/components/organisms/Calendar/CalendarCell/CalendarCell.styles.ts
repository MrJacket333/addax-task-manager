import styled from 'styled-components';

export const CalendarCellWrapper = styled.div<{ isCurrentMonth: boolean}>`
  background-color: ${props => props.isCurrentMonth ? '#fff' : '#ececec'};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
`;

export const DayInMonthLabel = styled.span<{ isCurrentDay: boolean }>`
  font-size: 1rem;
  color: ${({ isCurrentDay }) => (isCurrentDay ? '#ccc' : '')};
`;

export const CellHeader = styled.div<{ isCurrentDay: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const CellBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const DayOfMonthLabel = styled.span<{ isCurrentDay: boolean }>`
  font-size: 1rem;
  color: #71717A;
`;

export const TaskCountLabel = styled.span<{ isCurrentDay: boolean }>`
  font-size: 0.875rem;
  color: #71717A;
`;