import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}))

export default function TodoLists() {
  const classes = useStyles()

  const [lists, setLists] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/list', {
        method: 'GET',
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      }).then((data) => {
        return data.json()
      })
      setLists(response)
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_info')
    window.location.href = '/'
  }

  const card = (
    <React.Fragment>
      {lists.map((list) => (
        <Card className={classes.root} variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {list.title}
            </Typography>
            <Typography variant="h6" component="div">
              {list.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Todo Lists
          </Typography>
          <div>
            <IconButton onClick={handleLogout} color="inherit">
              Logout
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ minWidth: 275 }}>
        <Card>{card}</Card>
      </Box>
    </div>
  )
}
