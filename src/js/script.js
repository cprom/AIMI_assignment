
const picArray = [
'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg'

]

function addPictureContainers() {
    const container = document.getElementById("pic1-container"); // Replace "target-container" with the actual ID of your target element
  
    for (let i = 1; i <= 5; i++) {
      const picContainer = document.createElement("div");
      picContainer.classList.add("picContainer")

      const row = document.createElement("div");
      row.classList.add("row","image-gallery", "row-cols-2","row-cols-md-3", "row-cols-lg-4", "g-0");  // Bootstrap 5 grid classes for 4 columns
  
      for (let j = 1; j <= 4; j++) {  // Loop to create 5 columns within each row
        const col = document.createElement("div");
        col.classList.add("column")
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("btn-check", "g-0");
        checkbox.id = `btncheck${i}-${j}`;  // Unique IDs for checkboxes with row and column identifiers
        checkbox.setAttribute("autocomplete", "off");
  
        const label = document.createElement("label");
        label.classList.add("ratio", "ratio-1x1","btn", "btn-outline-danger" );
        label.setAttribute("for", `btncheck${i}-${j}`);
  
        const img = document.createElement("img");
        img.classList.add( "img-fluid","g-0")
        img.src = picArray[Math.floor(Math.random() * 6)];  //randomize picture url
  
        label.appendChild(img);
        col.appendChild(checkbox);
        col.appendChild(label);
        row.appendChild(col);
      }
  
      picContainer.appendChild(row);
      container.appendChild(picContainer);
    }
  }
  
  // Call the function to add the elements
  addPictureContainers(); 