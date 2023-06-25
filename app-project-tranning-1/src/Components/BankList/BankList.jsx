import React from 'react'
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import KeyboardArrowDownIcon from
    "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
    "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import BankItem from '../BankItem/BankItem'
import { useState } from 'react';
import { CollapseContainer } from './BankList.style';


const BankList = ({ dataCountryBank }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CardHeader
                sx={{ width: "200px", fontSize: '10px', color: '#007bff' }}
                title="Bank name"
                action={
                    <IconButton
                        onClick={() => setOpen(!open)}
                        aria-label="expand"
                        size="small"
                    >
                        {open ? <KeyboardArrowUpIcon />
                            : <KeyboardArrowDownIcon />}
                    </IconButton>
                }
            > </CardHeader>
            <CollapseContainer >
                <Collapse in={open} timeout="auto"
                    unmountOnExit>
                    <BankItem dataCountryBank={dataCountryBank} />
                </Collapse>
            </CollapseContainer>
        </>
    )
}

export default BankList