import { useState } from "react";

const Tasks = () => {
const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors APointment',
        day: 'feb 5th at 230pm',
        reminder: true,
    }, 
    {
      id: 2,
      text: 'Go to they gym',
      day: 'feb 6th at 130pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shoppingt',
      day: 'feb 5th at 230pm',
      reminder: false,
    },
  ]
  )

    return ( 
      <>
       {tasks.map((task) => (
           <h3 key={task.id}>{task.text}</h3>
       ))}  
      </>
     );
}
 
export default Tasks;