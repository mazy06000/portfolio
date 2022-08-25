import './AutonomousCar.css'



const AutonomousCar = () => {

    document.body.style.overflow = "hidden";
    
    
    let isSafari = navigator.userAgent.indexOf("Safari") > -1;
    // Chrome has Safari in the user agent so we need to filter (https://stackoverflow.com/a/7768006/1502448)
    const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    if ((isChrome) && (isSafari)) {isSafari = false;}  
    if (isSafari) {
        window.location.href ="https://mazy06000-autonomous-car-app-g72fil.streamlitapp.com/?embedded=true";
    }

    const url = "https://mazy06000-autonomous-car-app-g72fil.streamlitapp.com/?embedded=true"

    const div =(
         <div  className="holder">
            <div className="bar"><a href='/'>X</a></div>
           <iframe src={url}
                id="streamlitApp"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                width="100%"
                height="100%"
                scrolling="auto"
                title='StreamlitApp'
                className="frame" />
         </div>
         )
  
    return div
}



export default AutonomousCar
