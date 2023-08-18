import { rest } from 'msw'
import { faker } from '@faker-js/faker'
let data = [{ title: 'test1', id: 1 },
{ title: 'test2', id: 2 },
{ title: 'test3', id: 3 },]

export default [
  // Handles a POST /login request
  rest.get('/itemList/content', (req, res, ctx) => {
    const response = faker.helpers.arrayElement([
      res(ctx.status(200), ctx.json({ data: { text: 'Redux-toolkit Query' } })),
      res(ctx.status(500), ctx.json({ code: "0001", message: 'Internal server error' }))
    ])
    return response
  }),
  rest.get('/itemList/list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data }),
    )
  }),
  rest.post('/itemList/add', (req, res, ctx) => {
    data.push(req.body)
    return res(
      ctx.status(200)
    )
  }),
  rest.delete('/itemList/delete', (req, res, ctx) => {
    data = data.filter(item => item.id !== req.body.id)
    return res(
      ctx.status(200),
    )
  }),
]