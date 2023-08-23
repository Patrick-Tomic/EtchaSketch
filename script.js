const inputs = document.querySelectorAll('.controls input');
const eraser = document.querySelector("#eraser")
const reset = document.querySelector("#reset")
const base = document.querySelector("#base");
const container = document.querySelector(".container");
const sketch = document.querySelector("#sketch")

let flag = false;
window.onmouseup = ()=>{
    flag = false;
    }
    const gridSize = document.querySelector("#gridSize");
    const scale = document.querySelector("#scale");
    scale.value = 16;
    gridSize.textContent = scale.value;
    scale.addEventListener("mouseup", (event)=>{
        scale.value = event.target.value;
        gridSize.textContent = scale.value;  
        removeGrid();
        });
       
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
     
        const size = row.style.width;
        createGrid(scale.value);
       
    
        console.log(size);
     
      
        
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