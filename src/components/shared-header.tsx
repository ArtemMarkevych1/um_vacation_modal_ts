import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    headRow: {
        height: '50px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        
    },

    headRowLabel: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
    }

})


export const SharedHeadingTable = () => {
    const classes = useStyles();

    return (
        <TableHead>
            <TableRow className={classes.headRow}>
                <TableCell className={classes.headRowLabel}>Dates</TableCell>
                <TableCell
                    className={classes.headRowLabel}
                //align="left"
                >Days Available</TableCell>
                <TableCell
                    className={classes.headRowLabel}
                //align="center"
                >Duration</TableCell>
                <TableCell
                    className={classes.headRowLabel}
                //align="right"
                >Total Used</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>

    )
}