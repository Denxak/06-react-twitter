import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'
import { TwitterContext } from './utils/context'

function App() {
  const [user, setUser] = useState({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
  })

  const [stats, setStats] = useState({
    followers: 10,
    following: 100
  })

  const changeAvatar = url => {
    setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }))
  }

  const changeName = name => {
    setUser(prevState => ({ ...prevState, name: name || prevState.name }))
  }

  const changeStat = (prop, delta) => {
    setStats(prevState => {
      return { ...prevState, [prop]: Math.max((prevState[prop] + delta), 0) };
    });
  };
  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        user, stats, changeAvatar, changeName, changeStat
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
