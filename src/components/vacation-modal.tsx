import React from 'react'
import { Typography } from '@material-ui/core'
// import { EmployeeInfo } from '../../../modules/main/routes/current-employee/components/info/employee-info'
import { Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add'
import { TableContainer } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { SharedHeadingTable } from './shared-header';
import { DaysManagement } from './days-management'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Avatar } from '@material-ui/core';
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({

    main: {
        margin: '0 auto',
        width: '1262px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F6F7FA',
    },
    table: {
        // minWidth: 650,
        // width: "1044px",
        // display:'flex',


    },

    tables: {
        marginBottom: '100px'
    },

    wrapper: {
        width: '1044px'
    },

    typography: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '30px',
        // position: 'absolute',
        width: '225px',
        height: '39px',
        // marginLeft: '164px'
    },
    button: {
        // position: 'absolute',
        width: '1044px',
        height: '42px',
        // left: '166px',
        // top: '403px',
        background: '#FFF5F5',
        opacity: '0.6',
        marginBottom: '22px'
    },
    buttonLabel: {
        display: 'flex',
        justifyContent: 'space-evenly',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        // lineHeight: '50px',
        textTransform: 'none'
    },
    subtitleRow: {
        backgroundColor: '#F6F7FA',
        opacity: '0.4',
        height: "50px",
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',

        lineHeight: '30px'

    },
    subtitleRowLabel: {
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '50px',
        color: '#0E2561',
        height: "51px",
    },
    subtitleRowLabelHighlighted: {
        width: '342px',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '50px',
        color: '#0E2561',
        height: "51px",
    },
    subtitleRowLabelHighlightedRed: {
        width: '342px',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '50px',
        // color: '#0E2561',
        color: '#FF3D3D',
        height: "51px",
    },

    minorRow: {
        height: '56px',
        background: '#FFFFFF',
        borderRadius: '5px',
        border: '1px solid #F6F7FA'

    },
    minorRowLabel: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '30px'
    },

    closeIcon: {
        display: 'flex',
        justifyContent: "flex-end"
    }
    // spanText: {
    //     fontFamily: 'Montserrat',
    //     fontStyle: 'italic',
    //     fontWeight: '300',
    //     fontSize: '14px',
    //     lineHeight: '50px'
    // }
});



// export interface VacationModalModel {
//     open: boolean,

//     onClose(): void;
// }

// export type PropTypes =
//     & VacationModalModel

export const VacationModal = (
    // { open, onClose }: PropTypes
) => {
    const classes = useStyles();

    return (
        <Paper className={classes.main}>
            
            <div className={classes.wrapper}>
                <DaysManagement />
                <Typography className={classes.typography}
                    variant="h2" component="h2"
                >
                    Vacations
            </Typography>
                <Button
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                >
                    <div className={classes.buttonLabel}>
                        <AddIcon style={{ marginRight: '10px' }} />
                        Add New Vacation
                </div>
                </Button>
                <div className={classes.tables}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <SharedHeadingTable />
                            <TableBody>
                                <TableRow
                                    className={classes.subtitleRow}
                                    classes={{
                                        head: classes.subtitleRow
                                    }}

                                >
                                    <TableCell
                                        className={classes.subtitleRowLabelHighlighted}
                                    >01 Jan 2020 - 01 Jun 2020</TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                </TableRow>
                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>21.09.2019-26.09.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>5 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>5 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <SharedHeadingTable />
                            <TableBody>
                                <TableRow className={classes.subtitleRow}>
                                    <TableCell className={classes.subtitleRowLabelHighlightedRed}>
                                        <span
                                        // className={classes.spanText}
                                        >
                                            Current cycle: </span>
                                        01 Jun 2019 - 01 Jan 2020
                                </TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                </TableRow>

                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>21.09.2019-26.09.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>0 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}></TableCell>
                                    <TableCell className={classes.minorRowLabel}></TableCell>
                                    <TableCell>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>16.08.2019-18.08.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <SharedHeadingTable />
                            <TableBody>
                                <TableRow className={classes.subtitleRow}>
                                    <TableCell className={classes.subtitleRowLabelHighlighted}>01 Jun 2019 - 01 Jan 2019</TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                    <TableCell className={classes.subtitleRowLabel}></TableCell>
                                </TableRow>
                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>21.05.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>4 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>4 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>10.03.2019-13.03.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>6 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>2 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>6 days</TableCell>
                                    <TableCell>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.minorRow}>
                                    <TableCell className={classes.minorRowLabel}>16.01.2019-20.01.2019</TableCell>
                                    <TableCell className={classes.minorRowLabel}>10 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>4 days</TableCell>
                                    <TableCell className={classes.minorRowLabel}>4 days</TableCell>
                                    <TableCell>
                                        <Avatar style={{ background: '#F6F7FA' }}>
                                            <BorderColorIcon style={{ color: '#FF3D3D' }} />
                                        </Avatar>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </TableContainer>

                </div>
            </div>
            <div className={classes.closeIcon}>
                <Close />
            </div>
        </Paper >
    )
}