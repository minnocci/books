import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { handleReceiveCategories } from '../actions/category'
import {
  handleFilterCategory,
  handleResetFilters
} from '../actions/shared'

export class Categories extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleReceiveCategories())
  }

  handleAllCategoriesClick = (ev) => {
    ev.preventDefault()
    const { dispatch } = this.props
    dispatch(handleResetFilters())
  }

  handleCategoryClick = (ev, categoryId) => {
    ev.preventDefault()
    const { dispatch } = this.props
    dispatch(handleFilterCategory({ categoryId }))
  }

  render() {

    const { categories, activeCategoryId } = this.props.category

    const allCategoriesListItem = (
      <ListItem
        className='navCategoriesItem'
        button
        divider={true}
        selected={!activeCategoryId }
        onClick={(ev) => this.handleAllCategoriesClick(ev)}>
        <ListItemText primary='All Categories' />
      </ListItem>
    )

    return (
      <List component='nav' className='navCategories'>
        {allCategoriesListItem}
        {categories && Object.keys(categories).map((key) => {
          return (
            <ListItem
              key={`category-${categories[key].id}`}
              className='navCategoriesItem'
              button
              divider={true}
              selected={activeCategoryId && activeCategoryId === categories[key].id}
              onClick={(ev) => this.handleCategoryClick(ev, categories[key].id)}>
              <ListItemText primary={categories[key].title} />
            </ListItem>
          )
        })}
      </List>
    )

  }
}

function mapStateToProps ({ category }) {
  return {
    category
  }
}

export default connect(mapStateToProps)(Categories)