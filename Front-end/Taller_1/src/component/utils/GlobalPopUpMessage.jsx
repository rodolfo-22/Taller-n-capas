import '../../style/popup.css'

export function Popup ({message}) {
  return(
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  )
    
};

