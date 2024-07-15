import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '7f4673bb-ecb4-4a8e-9fb4-581fc3b005b2',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '96cbd7c5-3bf5-46cc-9abf-c8d5ce94d900',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot