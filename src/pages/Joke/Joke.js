import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { jokeRequest } from 'store/reducers/joke'
import Loading from 'components/Loading'
import Error from 'components/Error'
import Navigation from 'components/Navigation'
import { Wrapper, JokeWrapper, Joke, Button } from './Joke.style'

export default () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const {
    isFetching,
    isSuccess,
    isError,
    data: { value }
  } = useSelector(state => state.joke)

  const handleJokeRequest = useCallback(() => dispatch(jokeRequest(category)), [dispatch, category])
  useEffect(() => {
    handleJokeRequest()
  }, [handleJokeRequest])

  return (
    <>
      {!isError ? (
        <Wrapper>
          {isFetching && <Loading data-testid="loader" />}
          {value && isSuccess && (
            <>
              <Navigation category={category} />
              <JokeWrapper>
                {isFetching ? (
                  <Loading data-testid="reroll-loader" />
                ) : (
                  <>
                    <Joke>{value}</Joke>
                    <Button onClick={handleJokeRequest} outline>
                      Roll another
                    </Button>
                  </>
                )}
              </JokeWrapper>
            </>
          )}
        </Wrapper>
      ) : (
        <Error
          buttonText="Try again"
          errorMessage="Cannot get joke. Pleas try again later"
          handleError={handleJokeRequest}
        />
      )}
    </>
  )
}
