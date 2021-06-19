const renderController = (
    control={
        middleButton:{
            nameButton:''
        } , 
        leftButton:{
            nameButton:''
        },
        rightButton:{
            nameButton:''
        }
}) =>{
    const divControlBar = document.querySelector('.controlBar')

    const createMiddleButton = (middleButton ={}) =>{
        const buttonData = Object.entries(middleButton)
        if (buttonData.length == 1){
            const [buttonName, buttonFunction] = buttonData[0]
            return `
                <div 
                    class="controllerMiddle" 
                    onclick="${buttonFunction}">
                    ${buttonName}
                </div>`
        }
        else{
            return''
        }
    }

    const createButton = (button={})=>{
        const btn = Object.entries(button)
        if(btn.length == 1){
            const [buttonName , buttonFunction] = btn[0]
            return`
                <div  
                    class="controller" 
                    onclick="${buttonFunction}"
                    >${buttonName}
                </div>
            `
        }else{
            return`
                <div class="controllerField"></div>
            `
        } 
    }
    
    const controller = `
        ${createMiddleButton(control.middleButton)}
        <div class="controls">

            ${createButton(control.leftButton)}

            <div class="spacer"></div>

            ${createButton(control.rightButton)}


        </div>
    `

    divControlBar.innerHTML = controller
    
}