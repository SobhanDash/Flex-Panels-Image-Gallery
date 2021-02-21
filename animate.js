const panels = document.querySelectorAll('.panel');   //gets each panel

function toggleOpen(){                      
    this.classList.toggle('open');                  //adds open in panel class to the css file 
}

function toggleActive(e){       
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')        //adds open-active in css for bringing the words
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))  //reads for a click
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)) //reads a transition end of above event 