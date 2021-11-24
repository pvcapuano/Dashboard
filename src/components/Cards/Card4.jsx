import React from 'react'
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core'


export const Card4 = () => {


    return (
        <Card>
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
                TOTAL ESTIMADO
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                R$43k
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  height: 56,
                  width: 56
                }}
              >
                $
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  
}