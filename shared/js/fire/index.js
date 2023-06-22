import lottie from 'lottie-web'

const animation = lottie.loadAnimation({
    container: document.getElementById('fire'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/data/01_Fire_really_small.json'
})
animation.addEventListener('complete', () => {
    console.log('animation complete')
    chrome.runtime.sendMessage({
        messageType: 'fireAnimationComplete'
    })
})
