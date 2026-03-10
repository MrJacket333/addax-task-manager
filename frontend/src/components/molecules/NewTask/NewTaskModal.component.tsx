import ReactModal from 'react-modal';
import { useCallback, useRef, useState } from "react";
import { TextInput } from '@atoms/TextInput/TextInput.component';
import { useAddNewTask } from './NewTask.state';
import { TaskPrioritySection } from '@molecules/TaskPrioritySection/TaskPrioritySection.component';
import { NewTaskBody, NewTaskButton, NewTaskButtonLabel, NewTaskHeader, NewTaskInputWrapper, NewTaskTitle } from './NewTaskModal.styles';
import { type TaskPriority } from '@/types/global.types';
import { IconButton } from '@atoms/IconButton/IconButton.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const NewTaskModal = () => {
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const isOpen = useAddNewTask((state) => state.modalOpen);
  const closeModal = useAddNewTask((state) => state.closeAddNewTaskModal);

  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | null>(null);
  
  const handleSubmit = useCallback(() => {
    if (!descriptionRef?.current) {
      return;
    }

    const description = descriptionRef.current.value.trim();
    
    console.log('SHOULD SAVE NEW TASK!!!', description, selectedPriority);
    closeModal();
  }, [closeModal, selectedPriority]);

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={{
      content: {
        width: 300,
        height: 200,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      }
    }}>
      <NewTaskHeader>
        <NewTaskTitle>New Task</NewTaskTitle>
        <IconButton icon={faXmark} onClick={closeModal} $noBorder/>
      </NewTaskHeader>
      <NewTaskBody>
        <NewTaskInputWrapper>
          <TextInput name="description" ref={descriptionRef} label="Task description" />
        </NewTaskInputWrapper>
        <TaskPrioritySection 
          title="Priority"
          selectedValue={selectedPriority}
          onSelect={(priority) => setSelectedPriority(priority)}
        />
        <NewTaskButton onClick={handleSubmit}>
          <NewTaskButtonLabel>Create new task</NewTaskButtonLabel>
        </NewTaskButton>
      </NewTaskBody>      
    </ReactModal>
  )
}