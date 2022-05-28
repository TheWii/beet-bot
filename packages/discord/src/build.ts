import { PoolRunner } from '@beet-bot/runner'
import { BuildInfo } from './report'

export const invokeBuild = async (runner: PoolRunner, name: string, config: any, input: string, showReport: (info: BuildInfo) => Promise<void>) => {
  if (!config.pipeline) {
    config.pipeline = []
  }

  config.pipeline.unshift('lectern.contrib.messaging')

  if (!config.meta) {
    config.meta = {}
  }

  if (!config.meta.messaging) {
    config.meta.messaging = {}
  }

  config.meta.messaging.input = input

  let result

  try {
    result = await runner(name, config)
  } catch (err) {
    await showReport({
      status: 'error',
      error: {
        message: `${err}`
      }
    })
    return
  }

  await showReport(result)
}
