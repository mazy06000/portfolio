// import  { Navigate } from 'react-router-dom'
// import './Iframe.css'
// import BackToPortfolio from '../BackToPortfolio/BackToPortfolio'
// import { projects } from '../../portfolio'



// const Iframe = () => {

//     const currentProject = window.location.pathname
//     let url = null
//     projects.map((project) => {
//         if (project.livePreview === currentProject) {
//             url = `${project.streamlitUrl}?embedded=true`
//         }
//         return <Navigate to='/' />
//     })

//     document.body.style.overflow = "hidden";
    
//     let isSafari = navigator.userAgent.indexOf("Safari") > -1;
//     // Chrome has Safari in the user agent so we need to filter (https://stackoverflow.com/a/7768006/1502448)
//     const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
//     if ((isChrome) && (isSafari)) {isSafari = false;}  
//     if (isSafari) {
//         window.location.href = url;
//     }

//     const div =(
//          <div  className="holder">
//             <div className="bar">
//                 <BackToPortfolio />
//             </div>
//            <iframe src={url}
//                 id="streamlitApp"
//                 frameBorder="0"
//                 marginHeight="0"
//                 marginWidth="0"
//                 width="100%"
//                 height="100%"
//                 scrolling="auto"
//                 title='StreamlitApp'
//                 className="frame" />
//          </div>
//          )
  
//     return div
// }



// export default Iframe
