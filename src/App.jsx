import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = ({ results }) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url.match(/\/(\d+)\//)[1])
  }))

const PokemonPageWrapper = ({ pokemonList }) => {
  const { name } = useParams()

  const sorted = [...pokemonList].sort((a, b) => a.id - b.id)

  const index = sorted.findIndex(p => p.name === name)

  const previous = index > 0 ? sorted[index - 1] : null
  const next =
    index !== -1 && index < sorted.length - 1
      ? sorted[index + 1]
      : null

  return (
    <PokemonPage
      pokemonList={pokemonList}
      previous={previous}
      next={next}
    />
  )
}

const App = () => {
  const {
    data: pokemonList,
    error,
    isLoading
  } = useApi(
    'https://pokeapi.co/api/v2/pokemon/?limit=50',
    mapResults
  )

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />

  return (
    <Routes>
      <Route
        path="/"
        element={<PokemonList pokemonList={pokemonList} />}
      />

      <Route
        path="/pokemon/:name"
        element={<PokemonPageWrapper pokemonList={pokemonList} />}
      />
    </Routes>
  )
}

export default App