import React, { useEffect, useState, useContext } from 'react';
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
import { DnDAppContext } from '../App';

export default function Tracker({ identifier }) {
    const { progression, setProgression } = useContext(DnDAppContext);

    const [value, setValue] = useState(progression?.get(identifier) || 0)

    function incrementValue() {
        const newVal = value + 1;

        setValue(newVal);
        setProgression(progression?.set(identifier, newVal));
    }

    function decrementValue() {
        const newVal = Math.max(value - 1, 0);

        setValue(newVal);
        setProgression(progression?.set(identifier, newVal));
    }

    useEffect(() => {
        progression?.has(identifier) && setValue(progression.get(identifier));
    }, [progression])

    return (
        <TableCell align="right">
            {value}{' '}
            <ButtonGroup variant="text" color="error" aria-label="outlined primary button group">
                <Button onClick={incrementValue} >+</Button>
                <Button onClick={decrementValue} >-</Button>
            </ButtonGroup>
        </TableCell>
    );
}