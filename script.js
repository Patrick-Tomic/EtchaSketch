/*const inputs = document.querySelectorAll('.controls input');
const eraser = document.querySelector("#eraser")
const reset = document.querySelector("#reset")
const base = document.querySelector("#base");
const container = document.querySelector(".container");
const sketch = document.querySelector("#sketch")
const controls = document.querySelectorAll(".controls input");
const gridSize = document.querySelector("#gridSize");
const scale = document.querySelector("#scale");
scale.value= 16;




gridSize.textContent = scale.value;  
scale.addEventListener("mouseup", (event)=>{
    scale.value = event.target.value;
    gridSize.textContent = scale.value;  
    removeGrid();
    });
  
    


let flag = false;
window.onmouseup = ()=>{
    flag = false;
    }
   
        function removeGrid(){
            while(sketch.firstChild){
            sketch.removeChild(sketch.firstChild);
            }
            createGrid(scale.value);


        };
 
  
  function createGrid(Size){
      
        let column =Size;
        let row = Size;
        const grid = document.createElement("div");
        grid.className = 'grid';
        for(let i=0;i<column;i++){
            const column = document.createElement('div');
            column.className = "column";
            for(let j = 0;j<row;j++){
                let row = document.createElement("div");
                row.id = 'row';
               
                
                column.appendChild(row);
            }
            grid.appendChild(column);
        }
        sketch.appendChild(grid);
        container.append(sketch);

        }
        const row = document.querySelector("#row")
        const grid = document.querySelector(".grid");
        const rows = document.querySelectorAll("#row");
     
        
        createGrid(scale.value);
       
        
        
     
      
        
        rows.forEach((row)=>{
            row.addEventListener("mouseover",()=>{
                if(flag ==true) row.style.backgroundColor = base.value;
                row.onmousedown = ()=>{
                    row.style.backgroundColor = base.value;
                    flag = true;
                }
            });
        });
        function eraserClick(){
            let lastValue = base.value;
            base.value = "#FFFFFF";
            return;
        } 
        reset.addEventListener("click",()=>location.reload())
        */
       const controls = document.querySelectorAll(".controls input");
       function handleUpdate(){
        const suffix = this.dataset.sizing ||"";
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    }
    controls.forEach(control =>control.addEventListener("change",handleUpdate));
        const scaleSize = document.querySelector("#scale-size");
        const scale =document.querySelector(".scale");
scale.value = 16;        
scaleSize.textContent = scale.value;  
scale.addEventListener("mouseup", (event)=>{
    scale.value = event.target.value;
    scaleSize.textContent = scale.value;  
    
    });
   
                    const container = document.querySelector(".gridContainer");
let bgColor = '#ffffff';
    

                    function createGrid(){
                        removeGrid();
                        let gridSize = scale.value;
                        //calculates width of each row
                        let gridWidth = container.offsetWidth/gridSize;
                        //Assigns how many items to create and at what width
                        container.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
                        container.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
                        if (gridSize < 4) {
                        container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
                        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
                        }

                                for(let i = 0;i<gridSize**2;i++){
                                    const item = document.createElement("div");
                                    item.classList.add("gridItem");
                                    item.style.backgroundColor = bgColor;
                                  
                                    container.appendChild(item);
                                }
                    }
                createGrid();
                draw();
    //resets grid once size scale is changed
                        function removeGrid(){
                            while(container.firstChild){
                            container.removeChild(container.firstChild);
                            }
                        }

    const reset = document.querySelector("#reset");
    reset.addEventListener("click",draw);
    const base = document.querySelector(".base");
                        //allows user to draw
                        function draw(){
                            let flag = false;
                        window.onmouseup = ()=>{
                            flag = false;
                            }
                            const gridItems = document.querySelectorAll(".gridItem");
                           
                            gridItems.forEach(item=>item.addEventListener("mouseover",()=>{
                                if(flag ==true) item.style.backgroundColor = base.value;
                                        item.onmousedown = ()=>{
                                            item.style.backgroundColor = base.value;
                                            flag = true;
                                        };
                            }));
                        }

                        function Eraser(){
                          
                                base.value = "#FFFFFF";
                       
                           
                        }


