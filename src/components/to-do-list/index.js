/*
  Description: Add and Delete task.
  Validation: Unique and Compulsory Task.
  Author: Trisha Patel
*/
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: '15px',
    textAlign: 'left',
  },
  container:{
    width:'400px',
    // direction:'flex',
    // display:'inline-block',
  }
}));
export default function ToDoList() {
  const [task, setTask] = React.useState('');
  const [tasklist, setTasklist] = React.useState([]);
  const [error, setError] = React.useState('');
  let tableList = React.createRef();
  const [list, setList] = React.useState('');
  const classes = useStyles();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(task!==''){
      if(tasklist.findIndex(taskl => taskl.toLowerCase()===task.toLowerCase())<0){
        setTasklist(tasklist.concat(task));
        setTask('');
        setError('');
      }
      else{
        setError('Task Already Exist');
      }
    }
    else{
      setError('Field Required');
    }
  }

  const handleChange = (e) =>{
    setTask(e.target.value);
  }

  const handleDelete = index =>{
    let temp_tasklist= tasklist;
    temp_tasklist.splice(index, 1);
    setList(temp_tasklist.length);
    setTasklist(temp_tasklist);
  }

  return (
    <Grid container className={classes.container} justify="center">
    <form  onSubmit={handleSubmit}>
      <Grid item xs={12} className={classes.item}>
        <TextField error={error? true: false} helperText={error? error: ''}
         id="task" label="Task" name='task' value={task} onChange={e => handleChange(e)} />
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <Button variant="contained" color="primary" type="submit">
               Add Task
        </Button>
      </Grid>
        </form>
      <Grid item xs={12} >
      <TableContainer >
        <Table aria-label="simple table" ref={tableList} >
          <TableHead>
            <TableRow>
              <TableCell>Task(s)</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasklist.map((task,index) => (
              <TableRow key={index + tasklist.length}>
                <TableCell component="th" scope="row">
                  {task}
                </TableCell>
                <TableCell component="th" scope="row">
                <Button  color="secondary" onClick={() =>handleDelete(index)}>
                   <DeleteIcon/>
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
    </Grid>
  );
}
