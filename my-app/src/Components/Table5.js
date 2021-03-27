import React, {useState, useRef,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday,sunday) {
  return { name, monday, tuesday, wednesday,thursday, friday, saturday, sunday };
}

const rows = [
  createData('Michael', "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00","OFF","OFF","9:00 -"),
  createData('Bebe', "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00","OFF","OFF"),

];

export default function Table5() {
  const classes = useStyles();
    const[valuest, setValuest] = useState("");
    const[isInEditMode, setEditMode] = useState(false);

    const textInput = useRef(null);

    const changeEditMode = () =>{
        setEditMode(true);
    }

    const updateComponentValue = ()=> {
        setEditMode(false);
    }

    const renderEditView = () => {
        return <div>
        <input 
        type="text" 
        defaultValue = {valuest}
        ref={textInput}
        ></input>
        <button onClick={updateComponentValue}>OK</button>
        <button onClick={changeEditMode}>X</button>
      </div> 
    }

    const renderDefaultView = () => {
        <div onDoubleClick={changeEditMode}>{valuest}</div>
    }

    useEffect(() => {
        // Update the document title using the browser API
        setValuest("aaaa")
      });


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right" >{row.monday}

          {
               isInEditMode ? renderEditView() : renderDefaultView()
                  
          }       
              

              
                
              </TableCell>
              <TableCell align="right">{row.tuesday}</TableCell>
              <TableCell align="right">{row.wednesday}</TableCell>
              <TableCell align="right">{row.thursday}</TableCell>
              <TableCell align="right">{row.friday}</TableCell>
              <TableCell align="right">{row.saturday}</TableCell>
              <TableCell align="right">{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
