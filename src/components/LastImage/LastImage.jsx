import './LastImage.css'


const LastImage = () => {
    const src = "https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"
    return (
        <div className='LastImage'>
            <img width="1200" height="460" src={src} alt="LastImage"/>
        </div>
    )
}

export default LastImage