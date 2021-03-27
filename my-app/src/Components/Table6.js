import React, { Component} from 'react';
import { createStyles, withStyles, WithStyles, makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';


const StyledPaper = withStyles(theme => ({
    table: {
        minWidth: 650,
      },
    
  }))(Paper);
  
  function createData(name, monday, tuesday, wednesday, thursday, friday, saturday,sunday) {
    return { name, monday, tuesday, wednesday,thursday, friday, saturday, sunday };
  }
  
  const rows = [
    createData('Michael', "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00","OFF","OFF","9:00 -"),
    createData('Bebe', "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00", "9:00 - 2:00","OFF","OFF"),
  
  ];

class Test6 extends Component {
    constructor(props) {
        super(props);
        this.state = {  


        }
    }
    render() { 
    const { classes, theme } = this.props

        return (
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         );
    }
}
 
export default Test6 ;