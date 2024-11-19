import { createError, eventHandler, readBody } from 'h3'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  try {
    return await $fetch(`http://172.18.0.1:8082/auth/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    // const accessToken = (response.token as any).bearer // sign({ ...user, scope: ['test', 'user'] }, SECRET, { expiresIn })
    // const refreshToken = response.timestamp // sign({ username, refreshToken }, SECRET, { expiresIn: 60 * 60 * 24 * 30 }) // 30 days
    // const data = {
    //   token: {
    //     bearer: accessToken,
    //     refreshToken
    //   }
    // }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw createError({ statusCode: 403, message: 'Erro de conexão com o servidor' })
  }
})
