import React from "react";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
  } from '@material-ui/core'

  export const Tables = () => {

    const orders = [
        {
          ref: 'CTD1049',
          amount: 30.5,
          customer: {
            name: 'Iphone'
          },
        },
        {
          ref: 'CTD1048',
          amount: 25.1,
          customer: {
            name: 'Notebook'
          },
        },
        {
          ref: 'CTD1077',
          amount: 10.99,
          customer: {
            name: 'Samsung Galaxy'
          },
        },
        {
          ref: 'CTD1086',
          amount: 96.43,
          customer: {
            name: 'Imac'
          },
        },
        {
          ref: 'CTD1023',
          amount: 32.54,
          customer: {
            name: 'Ipad'
          },
        },
        {
       
          ref: 'CTD1054',
          amount: 16.76,
          customer: {
            name: 'Outros'
          },
        }
      ];

      return(
        <Card>
        <CardHeader title="Detalhes dos dispositivos" />
          <Box sx={{ minWidth: 600 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Código
                  </TableCell>
                  <TableCell>
                    Dispositivo
                  </TableCell>
                  <TableCell>
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        
                      >
                        Ref
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.ref}
                    </TableCell>
                    <TableCell>
                      {order.customer.name}
                    </TableCell>
                    <TableCell>
                      {order.amount}
                    </TableCell>
                    
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"

            size="small"
            variant="text"
          >
            View all
          </Button>
        </Box>
      </Card>
      )
  }