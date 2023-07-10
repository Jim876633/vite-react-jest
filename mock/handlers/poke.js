import { rest } from 'msw'

export default [
  // Handles a POST /login request
  rest.post('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        text: 'hello World'
      }),
    )
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      results: [
        { name: 'test1', url: 'https://pokeapi.co/api/v2/pokemon/1' },
      ]
    }))
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/test1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      sprites: {
        front_shiny: 'https://fakeimg.pl/300/'
      }
    }))
  })
]