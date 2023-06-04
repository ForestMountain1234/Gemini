import { useState } from "react"

function App(): JSX.Element {
  const [leftURL, setLeftURL] = useState("https://twitter.com/home")
  const [rightURL, setRightURL] = useState("https://twitter.com/home")

  const urlAria: React.CSSProperties = {
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const textBox: React.CSSProperties = {
    width: '50%',
    height: '20px',
    margin: '5px 5px 5px 5px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    color: '#666666',
    fontFamily: 'BIZ UDPGothic',
    fontSize: 11,
    textAlign: 'center'
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <div style={urlAria}>
          <input type='text' onChange={(e) => { setLeftURL(e.target.value) }} value={leftURL} style={textBox} />
        </div>
        <webview id="foo" src={leftURL} style={{ width: '100%', height: '95%' }} partition="persist:left"></webview>
      </div>
      <div style={{ width: '50%', height: '100%' }}>
        <div style={urlAria}>
          <input type='text' onChange={(e) => { setRightURL(e.target.value) }} value={rightURL} style={textBox} />
        </div>
        <webview id="foo" src={rightURL} style={{ width: '100%', height: '95%' }} partition="persist:right"></webview>
      </div>

    </div>
  )
}

export default App
