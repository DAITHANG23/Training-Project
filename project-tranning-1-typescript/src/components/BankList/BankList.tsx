

import BankDetail from '../BankDetail/BankDetail';
import { useState } from 'react';
import { Table, TableBody, TableContainer, TableRow, Collapse, Box, } from '@mui/material';
import TableHeader from '../TableHeader/TableHeader';
import { ActiveCard } from './BankList.Style';
import { Inactive } from './BankList.Style';
import { TableCell } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TableCellNameStyle, TableCellIconStyle, TableCellBankDetail } from './BankList.Style';
import theme from '../../theme/theme';

type Order = 'asc' | 'desc';
interface IbankListProps {
    dataCountryBank: []

}

const BankList = ({ dataCountryBank }: IbankListProps) => {
    const [idBank, setIdBank] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false);
    const [cardIDOpen, setCardIDOpen] = useState<number>(0)
    const [oneOderDirection, setOneOderDirection] = useState<Order>('asc')
    const [valueToOrderBy, setvalueToOrderBy] = useState('name')


    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (a[orderBy] < b[orderBy]) {
            return -1
        }
        if (a[orderBy] > b[orderBy]) {
            return 1
        }
        return 0;
    }


    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
    ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function sortedTableRow<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array?.map((el, index) => [el, index] as [T, number]);
        stabilizedThis?.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis?.map((el) => el[0]);
    }

    const onClickBank = (bankId: any) => {
        setIdBank(bankId);
        setCardIDOpen(bankId)
        setOpen(!open)

    }

    const handleRequestSort = (property: string) => {
        const isAscending = (valueToOrderBy === property && oneOderDirection === 'asc')
        setvalueToOrderBy(property);
        setOneOderDirection(isAscending ? 'desc' : 'asc')
    }

    const bankItem = sortedTableRow(dataCountryBank, getComparator(oneOderDirection, valueToOrderBy))?.map((bank: any) => {
        const { id, name, isActive } = bank;

        return <>
            <TableRow key={id} onClick={() => onClickBank(id)} aria-label="expand row" sx={{ cursor: "pointer", backgroundColor: `${theme.backGroundColor.card}` }}>

                <TableCellNameStyle styleactive={cardIDOpen === id ? "open" : ""} >
                    {name}
                </TableCellNameStyle>
                <TableCell width={'100px'} align='right' sx={{ borderBottom: `3px solid ${theme.backGroundColor.main}` }}>
                    {isActive ?
                        (<ActiveCard styleActive={cardIDOpen === id ? open : undefined}>
                            Active
                        </ActiveCard>)
                        : (<Inactive styleActive={cardIDOpen === id ? open : undefined}>
                            Inactive
                        </Inactive>)}
                </TableCell>
                <TableCellIconStyle width={'50px'} align='right'  >
                    <IconButton>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCellIconStyle>
            </TableRow>
            <TableRow aria-label="purchases" sx={{ backgroundColor: "#FFF", }}>
                <TableCellBankDetail component="th" colSpan={6}>
                    <Collapse key={id} in={cardIDOpen === id ? open : undefined} timeout="auto" unmountOnExit>
                        <Box sx={{ marginTop: '30px' }}>
                            <BankDetail idBank={idBank} />
                        </Box>
                    </Collapse>
                </TableCellBankDetail>
            </TableRow>
        </>
    }
    )
    return (
        <>
            {
                dataCountryBank && <TableContainer sx={{ marginBottom: "50px" }}>
                    <Table aria-label="collapsible table">
                        <TableHeader
                            valueToOrderBy={valueToOrderBy}
                            oneOderDirection={oneOderDirection}
                            handleRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {bankItem}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

        </>
    )
}

export default BankList



