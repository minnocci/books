import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function BookItem (props) {

  const { book } = props

  return (
    <Link
      to={`/book/${book.id}`}
      className='linkBookItem'>
      <Card>
        <CardMedia
          image={book.image_url}
          title={book.title}
          className='imgBookItem' />
        <CardContent>
          <Typography
            align='center'
            noWrap={true}
            className='titleBookItem'>
            {book.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='outlined'
            fullWidth={true}
            className='btn btnBookItem' >
            Read
          </Button>
        </CardActions>
      </Card>
    </Link>
  )

}