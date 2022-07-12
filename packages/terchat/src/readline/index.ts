import readLine from 'readline'
import type Ws from 'ws'

export class Rl {
  public rl: readLine.Interface

  constructor(
    public ws: Ws,
  ) {
    this.init()
  }

  init() {
    this.rl = readLine.createInterface(process.stdin, process.stdout)
    this.rl.prompt()

    this.rl.on('line', (line) => {
      if (line === ':wq')
        this.rl.close()
      this.ws.send(line)
      console.log(`这是用户输入的内容：${line}`)
    })

    this.rl.on('close', () => {
      console.log('关闭输入流...')
      process.exit(0)
    })
  }

  close() {
    this.rl.close()
  }
}
