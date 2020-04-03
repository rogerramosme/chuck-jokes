import React from 'react'
import Content from 'components/Content'
import {
  ChuckJokesLogo,
  CategoriesTitle,
  CategoriesIntro,
  CategoryList,
  Button
} from './Categories.style'

export default () => {
  const categories = [
    'animal',
    'career',
    'celebrity',
    'dev',
    'explicit',
    'fashion',
    'food',
    'history',
    'money',
    'movie',
    'music',
    'political',
    'religion',
    'science',
    'sport',
    'travel'
  ]

  return (
    <Content>
      <ChuckJokesLogo />
      <CategoriesTitle>Joke Categories</CategoriesTitle>
      <CategoriesIntro>Select a category to start laughting. No pressure.</CategoriesIntro>
      <CategoryList>
        {categories.map(category => (
          <Button key={category} to={`/category/${category}`}>
            {category}
          </Button>
        ))}
      </CategoryList>
    </Content>
  )
}
