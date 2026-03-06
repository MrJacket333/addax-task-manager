import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 2rem repeat(6, 1fr);
  gap: 2px;
  background-color: #ccc;
  height: 100%;
`;

export const CalendarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: #f0f0f0;
`;

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CurrentDateLabel = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1rem;
`;
