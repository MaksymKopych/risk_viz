import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";


interface EnhancedTableProps {
    onRequestSort: (event: any, newOrderBy: any) => void;
    order: "asc" | "desc" | undefined;
    orderBy: string;
    headCells: string[]
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { order, orderBy, headCells, onRequestSort } =
        props;
    const createSortHandler =
        (newOrderBy: any) => (event: any) => {
            onRequestSort(event, newOrderBy);
        };
    const direction = order ? order : 'asc'
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
                            direction={direction}
                            onClick={createSortHandler(headCell)}
                        >
                            {headCell}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default EnhancedTableHead