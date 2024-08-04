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

				if(targetElement!=draggedElement){
	                let tempId = targetElement.id;
					targetElement.id = draggedElement.id;
					draggedElement.id = tempId;
	
					let tempText = targetElement.innerText;
					targetElement.innerText = draggedElement.innerText;
					draggedElement.innerText = tempText;
				}
				
			}
		})
	}

	
	
})


describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://course.acciojob.com/open-web-editor?question=bd6d3416-91a7-4ece-878c-2d643c773d4f'); // Replace with your actual URL
    });

    it('All div exists', () => {
        cy.get('#drag1').should('exist');
        cy.get('#drag2').should('exist');
        cy.get('#drag3').should('exist');
        cy.get('#drag4').should('exist');
        cy.get('#drag5').should('exist');
        cy.get('#drag6').should('exist');
    });

    it('Drag and drop 3rd image on 6th', () => {
        cy.get('#drag3').trigger('dragstart');
        cy.get('#drag6').trigger('drop');
        cy.get('#drag6').should('contain', 'Image 3');
    });

    it('Drag and drop 1st image on 5th', () => {
        cy.get('#drag1').trigger('dragstart');
        cy.get('#drag5').trigger('drop');
        cy.get('#drag5').should('contain', 'Image 1');
    });

    it('Drag and drop 4th image on 2nd', () => {
        cy.get('#drag4').trigger('dragstart');
        cy.get('#drag2').trigger('drop');
        cy.get('#drag2').should('contain', 'Image 4');
    });

    it('Drag and drop 2nd image on 3rd', () => {
        cy.get('#drag2').trigger('dragstart');
        cy.get('#drag3').trigger('drop');
        cy.get('#drag3').should('contain', 'Image 2');
    });

    it('Drag and drop 5th image on 3rd', () => {
        cy.get('#drag5').trigger('dragstart');
        cy.get('#drag3').trigger('drop');
        cy.get('#drag3').should('contain', 'Image 5');
    });

    it('Drag and drop 6th image on 1st', () => {
        cy.get('#drag6').trigger('dragstart');
        cy.get('#drag1').trigger('drop');
        cy.get('#drag1').should('contain', 'Image 6');
    });
});
