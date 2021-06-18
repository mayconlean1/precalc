const renderControllerTeste = (data={buttonAdd:''}) =>{
    const controller = `
    <div class="controlBar">
        <div class="controllerAdd" onclick="${data.buttonAdd}">Add</div>
        <div class="controls">
            <div class="controller" onclick="renderMainDefault()">back</div>
            <div class="spacer"></div>
            <div class="controller">next</div>
        </div>
    </div>
    `
    return controller
}