 const redMode = () =>{
    if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#0e1e35';
        showAlert("Dark mode is enabled","success");
  }
   else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled","success");
   }
  }