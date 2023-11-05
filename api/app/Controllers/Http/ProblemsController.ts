import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Problem from '../../Models/Problem'

export default class ProblemsController {
  public async index({ response }: HttpContextContract) {
    const problems = await Problem.all()
    return response.json(problems)
  }

  public async show({ params, response }: HttpContextContract) {
    const problem = await Problem.find(params.id)
    if (!problem) {
      return response.status(404).json({ error: 'Problem not found' })
    }
    return response.json(problem)
  }

  public async create({ request, response }: HttpContextContract) {
    const data = request.only(['title', 'description'])
    const problem = await Problem.create(data)
    return response.json(problem)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const problem = await Problem.find(params.id)
    if (!problem) {
      return response.status(404).json({ error: 'Problem not found' })
    }
    const data = request.only(['title', 'description'])
    problem.merge(data)
    await problem.save()
    return response.json(problem)
  }
}
