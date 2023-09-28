import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Tracker from './Tracker';

const Locations = [
    "E1: Grotto Entrance",
    "E2: Kelp Tangle",
    "E3: Cavern Fork",
    "E4: Ghostgrass Patch",
    "E5: Landslide",
    "E6: Quipper Den",
    "E7: Octopus’s Garden",
    "E8: Riptide Tunnel",
    "E9: Dead End?",
    "E10: Moonshark Lair",
    "E11: Moon Weaver’s Gateway",
    "E12: Prayer Site of Sehanine",
];

export default function GroveTable() {

    return (
        <>

            <TableContainer component={Card}>
                <CardContent>
                    <Typography variant='h5'>
                        Race Progression
                    </Typography>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Location </TableCell>
                                <TableCell align="right">Cubic Order</TableCell>
                                <TableCell align="right">Rivals</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                Locations.map((location, index) => (
                                    <TableRow
                                        key={location}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {location}
                                        </TableCell>
                                        <Tracker identifier={location + '.CubicOrder'} />
                                        <Tracker identifier={location + '.Rivals'} />
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </TableContainer>
        </>
    );
}

