const redMode = () =>{
    if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#3e050b';
        showAlert("Dark mode is enabled","success");
  }
   else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled","success");
   }
  }
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input"  onClick={props.redMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Red mode is enable</label>
          </div>


  redMode={redMode} 
  