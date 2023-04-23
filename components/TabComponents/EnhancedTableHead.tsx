import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";


interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => void;

    order: string;
    orderBy: string;
    rowCount: number;
    headCells: string[]
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { order, orderBy, rowCount, headCells, onRequestSort } =
        props;
    const createSortHandler =
        (newOrderBy: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, newOrderBy);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells?.map((headCell) => (
                    <TableCell
                        key={headCell}
                        align={"center"}
                        sx={{
                            fontSize: "12px",
                            padding: "5px"
                        }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell}
                            direction={orderBy === headCell ? order : 'asc'}
                            onClick={createSortHandler(headCell)}
                        >
                            {headCell}
                            {orderBy === headCell ? (
                                <Box component="span" >
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default EnhancedTableHead