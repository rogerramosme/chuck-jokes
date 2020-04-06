import React, { useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ROUTES } from 'routes'
import { categoriesRequest } from 'store/reducers/categories'
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

export default memo(() => {
  const { isFetching, isSuccess, isError, data } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const handleCategoriesRequest = useCallback(() => dispatch(categoriesRequest()), [dispatch])

  useEffect(() => {
    handleCategoriesRequest()
  }, [handleCategoriesRequest])

  return (
    <>
      {!isError ? (
        <Content>
          {isFetching && <Loading data-testid="loader" />}
          {!isFetching && isSuccess && (
            <>
              <ChuckJokesLogo />
              <CategoriesTitle>Joke Categories</CategoriesTitle>
              <CategoriesIntro>Select a category to start laughting. No pressure.</CategoriesIntro>
              <CategoryList>
                {data.map(category => (
                  <Link key={category} to={`${ROUTES.RAMDOM_JOKE}/${category}`}>
                    <Button>{category}</Button>
                  </Link>
                ))}
              </CategoryList>
            </>
          )}
        </Content>
      ) : (
        <Error
          buttonText="Try again"
          errorMessage="Cannot get joke categories. Pleas try again later"
          handleError={handleCategoriesRequest}
        />
      )}
    </>
  )
})
