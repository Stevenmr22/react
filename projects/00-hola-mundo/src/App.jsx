import './App.css'

export function App () {
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
            src="https://unavatar.io/midudev" alt="El avatar de midudev" />
            <div className='tw-followCard-info'>
                <strong>Miguel Angel Duran</strong>
                <span className='tw-followCard-inforUserName'    
                >@midudev</span>
            </div>
        </header>
    
        <aside>
            <button className='tw-followCard-button'>
                seguir
            </button>
        </aside>
    </article>
  )
}