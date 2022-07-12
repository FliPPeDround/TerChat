import Ws from 'ws'

export const sock = new Ws('ws://localhost:8080/')

// 监听连接服务器
sock.on('open', () => {
  console.log('connect success !!!!')
  sock.send('HelloWorld')
})

// 监听错误事件
sock.on('error', (err) => {
  console.log('error: ', err)
})

// 监听关闭事件
sock.on('close', () => {
  console.log('close')
})

// 监听信息发送
sock.on('message', (data) => {
  console.log(data)
})
