const Header = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects : [{id: 1, img: icon1}, {id: 2, img: icon2}],
    active : "active"
  });


  function toggleActive(index){
    changeState({...appState, activeObject: appState.objects[index]})
  }

  function toggleActiveStyles(index){
    if (appState.objects[index] === appState.activeObject){
      return "active";
    }
    
  }
  

  return (
    <header>
      <h1>Semantix</h1>
      <nav>
        <ul>
          {appState.objects.map((element, index) => (
            <li 
              key={index} 
                >
              <a className={toggleActiveStyles(index)} onClick={() => {toggleActive(index)}} href="#">{`Page ${index}`}<img src={element.img} alt=""/></a>
            </li>
          )) }
        </ul>
        
      </nav>
    </header>
  );
};
