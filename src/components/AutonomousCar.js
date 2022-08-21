import './AutonomousCar.css'

const AutonomousCar = () => {

    document.body.style.overflow = "hidden";

    const url = "//mazy06000-autonomous-car-app-g72fil.streamlitapp.com/?embedded=true"
  

    return (
        <iframe src={url}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                width="100%"
                height="100%"
                scrolling="auto"
                title='StreamlitApp' />
    )
}

export default AutonomousCar
