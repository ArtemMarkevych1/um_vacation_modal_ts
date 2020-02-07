
import React from 'react'
import { Avatar, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export interface DaysManagementModel {
    noneDays?: number;
    usedDays?: number;
    title?: string;
    iconKey?: string;

    onClick?(): void

    onClickInfo?(): void;
}

export type PropTypes =
    & DaysManagementModel;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userDaysManagement: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        daysManagement: {
            borderRadius: '5px',
            boxShadow: '20px 20px 60px rgba(218, 228, 244, 0.25)',
            marginBottom: '20px',
            marginTop: '45px'
        },
        avatarContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '20px 20px 60px rgba(218, 228, 244, 0.25)'
        },
        daysWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '85px',
            marginLeft: '85px'

        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        icons: {
            display: "flex",
            justifyContent: 'flex-end'
        },
        avatarTitle: {
            marginBottom: 0,
            color: '#0E2561',
        },
        avatarBox: {
            display: 'flex'
        },
        titleResponsible: {
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#0E2561',
            margin: '3px'
        },
        subInfo: {
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '14px',
            color: '#0E2561',
            opacity: 0.7,
            fontStyle: 'italic'
        },
        subInfoBolder: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '14px',
            color: '#0E2561',
            opacity: 0.7,
            fontStyle: 'italic'
        },
        redIconWrapper: {
            width: theme.spacing(6),
            height: theme.spacing(6),
            boxShadow: '5px 4px 20px rgba(255, 61, 61, 0.3)',
            backgroundColor: '#FF3D3D',
            marginRight: '20px',
            borderRadius: '50%'
        },
        daysCounter: {
            backgroundColor: '#ffffff',
            display: 'flex',
            paddingTop: '20px',
            paddingBottom: '40px',
            justifyContent: 'flex-start'
        },
        noneDays: {
            width: '64px',
            height: '64px',
            background: '#FFFFFF',
            boxShadow: ' 5px 4px 30px rgba(68, 87, 154, 0.25)',
            color: '#9FA8C0',
            fontWeight: 600,
            fontSize: '30px',

        },
        usedDays: {
            width: '64px',
            height: '64px',
            background: '#FFFFFF',
            boxShadow: ' 5px 4px 10px rgba(70, 87, 176, 0.25)',
            color: '#0E2561',
            fontWeight: 600,
            fontSize: '30px',
            boxSizing: 'border-box',
            border: '5px solid #0E2561'
        },
        noneDaysTitle: {
            color: '#9FA8C0',
            paddingTop: '20px',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            opacity: '0.6'
        },
        usedDaysTitle: {
            fontSize: '14px',
            fontWeight: 600,
            color: '#0E2561',
            paddingTop: '20px',
            background: '#FFFFFF',
            boxShadow: '5px 4px 10px rgba(111, 203, 115, 0.1)',
            borderRadius: '200px',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            lineHeight: '17px',
            textAlign: 'center',

        },
        beachAccessIcon: {
            // color: '#F6F7FA',
            // background: '#F6F7FA',
            // boxShadow: '0px 4px 40px rgba(227, 240, 255, 0.3)',
            // borderRadius: '5px',
        },
        umbrellaTitle: {
            paddingLeft: '20px'
        }

    })
)

export const DaysManagement = ({
    noneDays,
    usedDays,
    title,
    iconKey,
    onClickInfo
}: PropTypes) => {

    const classes = useStyles()

    // const onClickInfoHandler = () => {
    //     onClickInfo && onClickInfo();
    // };

    return (
        <Paper className={classes.daysManagement}>
            <div className={classes.avatarContainer}>

                <div className={classes.userDaysManagement}>
                    <Avatar >
                        <BeachAccessIcon className={classes.beachAccessIcon} />
                    </Avatar>
                    <div className={classes.umbrellaTitle}>
                        <Typography className={classes.titleResponsible}>
                            {/* {title} */}
                            {'Vacation Days'}
                        </Typography>
                        <div className={classes.subInfo}>
                            Current cycle: <span className={classes.subInfoBolder}>01 Jun 2017 - 01 Jan 2018</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.daysCounter}>
                {/* {noneDays && */}

                <div className={classes.daysWrapper}>
                    <Avatar className={classes.noneDays}>
                        {/* {noneDays} */}
                        {'20'}
                    </Avatar>
                    <span className={classes.noneDaysTitle}>
                        Days Available
                        </span>
                </div>

                {/* } */}
                <div className={classes.daysWrapper}>
                    <Avatar className={classes.usedDays}>
                        {/* {usedDays} */}
                        {'10'}
                    </Avatar>
                    <span className={classes.usedDaysTitle}>
                        Days Used
                    </span>
                </div>
            </div>
        </Paper>
    )
}
