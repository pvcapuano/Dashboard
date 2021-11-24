import React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

export const Card2 = () => {

    return (
        <Card sx={{marginBottom: '20px'}}>
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="overline"
              >
                TOTAL ADESÃO
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                1,8k
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: 'success.main',
                  height: 56,
                  width: 56
                }}
              >
                =
              </Avatar>
            </Grid>
          </Grid>
          <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Desde o último mês
        </Typography>
      </Box>
        </CardContent>
      </Card>
    )
  
}