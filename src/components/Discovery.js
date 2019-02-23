import React, { Fragment } from 'react'

import Grid from '@material-ui/core/Grid'

import Nav from './Nav'
import Categories from './Categories'
import Books from './Books'

export default function Discovery () {

  return (
    <Fragment>
      <Nav />
      <main>
        <Grid container spacing={24}>
          <Grid
            item xs={12} sm={4} md={3} lg={2}
            className='categoriesContainer'>
            <Categories />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}
            className='booksContainer'>
            <Books />
          </Grid>
        </Grid>
      </main>
    </Fragment>
  )

}