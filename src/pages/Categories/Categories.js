import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { categoriesRequest, categoriesRequestSuccess } from 'store/reducers/categories'
import Content from 'components/Content'
import Loading from 'components/Loading'
import Error from 'components/Error'
import {
  ChuckJokesLogo,
  CategoriesTitle,
  CategoriesIntro,
  CategoryList,
  Button
} from './Categories.style'

const mockCategories = [
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

export default () => {
  const { isFetching, isSuccess, isError, error, data } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoriesRequest())
    setTimeout(() => {
      dispatch(categoriesRequestSuccess(mockCategories))
    }, 2000)
  }, [dispatch])

  return (
    <Content>
      {isFetching && <Loading />}
      {!isFetching && isSuccess && (
        <>
          <ChuckJokesLogo />
          <CategoriesTitle>Joke Categories</CategoriesTitle>
          <CategoriesIntro>Select a category to start laughting. No pressure.</CategoriesIntro>
          <CategoryList>
            {data.map(category => (
              <Link to={`/category/${category}`}>
                <Button key={category}>{category}</Button>
              </Link>
            ))}
          </CategoryList>
        </>
      )}
      {isError && (
        <Error
          buttonText="Try again"
          errorMessage={error}
          handleError={() => console.log('handleError')}
        />
      )}
    </Content>
  )
}
