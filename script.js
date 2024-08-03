let images = document.querySelectorAll(".image");


images.forEach((img) =>{

	img.addEventListener("dragstart", (e)=>{
		img.style.opacity = 0.5;
		e.dataTransfer.setData("text/plain", img.id);
	})

	img.addEventListener("dragend", ()=>{
		img.style.opacity = 1;
	})

 let dragEvents = ["dragover", "dragenter", "drop"];

	for(let drag of dragEvents){
		img.addEventListener(drag, (e) =>{
			e.preventDefault();

			if(drag=="drop"){
				let targetElement = e.target;
                let draggedElementId = e.dataTransfer.getData("text/plain");
                let draggedElement = document.getElementById(draggedElementId);
				
                let tempId = targetElement.id;
				targetElement.id = draggedElement.id;
				draggedElement.id = tempId;

				let tempText = targetElement.innerText;
				targetElement.innerText = draggedElement.innerText;
				draggedElement.innerText = tempText;
				
			}
		})
	}

	
	
})
