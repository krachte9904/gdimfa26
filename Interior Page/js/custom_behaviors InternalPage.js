$(document).ready(function() {
					
	// VARIABLES
	const params = new URLSearchParams(window.location.search);
    let designerID = params.get("id");
    // let designerID = Number(params.get("id"));

    // console.log(params)
    // console.log(params.get("id"))
    // console.log(designerID)
	
	// EVENT HANDLERS
	$(".forth").on("click", function(event){
        event.preventDefault();

        if (designerID < 15) {
            designerID++;
            console.log(designerID)
        } else {}

        params.set("id", designerID);

        window.location.search = params.toString();

        console.log(designerID)
    })

    $(".back").on("click", function(event){
        event.preventDefault();

        if (designerID > 0) {
            designerID--;
            console.log(designerID)
        } else {}

        params.set("id", designerID);

        window.location.search = params.toString();

        console.log(designerID)
    })

    $(".backnforth").on("click", function(event){
        event.preventDefault();
    })
	
	// FUNCTIONS
	
	
	// INITIALIZATION
	// Get designer ID from URL

// Fetch JSON database
fetch("data/designers.json")
    .then(response => response.json())
    .then(data => {

        // Find selected designer
        const designer = data[designerID];

        if (designer) {

            // Insert designer information
            document.getElementById("designerPortrait").src = designer.portrait;

            document.getElementById("designerName").textContent = designer.name;

            document.getElementById("picOne").style.backgroundImage =
                `url(images/${designer.mockups[0]})`;

            document.getElementById("picTwo").style.backgroundImage =
                `url(images/${designer.mockups[1]})`;

            document.getElementById("picThree").style.backgroundImage =
                `url(images/${designer.mockups[2]})`;

            document.getElementById("designerBrand").textContent = designer.brand;

            document.querySelectorAll(".designerBrand").forEach(element => {
                element.textContent = designer.brand;
                console.log(designer.brand)
            });

            document.getElementsByClassName("btn")

            document.getElementsByClassName("designerBrand").textContent = designer.brand;

            document.getElementById("designerBio").textContent = designer.bio;

            document.getElementById("designerProject").textContent = designer.project;

            document.getElementById("designerWebsite").href = designer.website;

            document.getElementById("designerInstagram").href = designer.instagram;

            document.getElementById("designerLinkedin").href = designer.linkedin;

        } else {
            document.querySelector(".designerPage").textContent = "Designer not found.";
        }

    });

    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true
    });
	
});

