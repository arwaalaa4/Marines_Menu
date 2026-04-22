
  items=[]
categories=[]
window.addEventListener("load",function(){
   
loadData();
var offcanvasElement = document.getElementById('offcanvasExample');
var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

document.getElementById('openButton').addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  bsOffcanvas.toggle();
});






})//End of load

async function loadData() {
    try {
        const response = await fetch('./items.json');

        if (!response.ok) {
            throw new Error("Failed to load data");
        }
        else{
            console.log(response)
        }

        const data = await response.json();

        console.log(data); // البيانات كلها
        items=data['items']
        categories=data['categories']
        menuSection=this.document.getElementById("menu_items_display");
        CategorizeItems();
       displayItems(categorized_items[1])
       selcted_cat_id=document.querySelector(['.cat_activ']).dataset.catid
       cats_sel=document.getElementsByClassName("cat")
     
     for(let i=0;i<cats_sel.length;i++){
        cats_sel[i].addEventListener('click',function(){
            console.log((cats_sel[i]).dataset.catid)
            displayItems(categorized_items[Number((cats_sel[i]).dataset.catid)])
            document.querySelector(['.cat_activ']).classList.remove('cat_activ')
            cats_sel[i].classList.add('cat_activ')
        
        
        })
     }

    } catch (error) {
      console.log(error)
      console.log(error.Error)
    }
}
categorized_items={}

function CategorizeItems(){
for (cat in categories){console.log(categories[cat].id); categorized_items[categories[cat].id]=[]}
for(i=0;i<items.length;i++){categorized_items[[items[i].category_id]].push(items[i])}
}

function displayItems(items){
    menuSection.innerHTML="";
    HTML=""
    for(i=0;i<items.length;i++){
        HTML=HTML+`<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class=" text-white text-center p-3">
            <img src="${items[i].image}" alt="" class="item_img">
            <p class="item_info my-1">${items[i].name}</p>
             <p style="text-align: center; font-weight: 500;" class="item_info">${items[i].description}</p>
                <p style="text-align: center;" class="item_info d"> ${items[i].price_egp} EGP </p>
        </div>
    </div>`
    }
    menuSection.innerHTML=HTML;}

     selcted_cat_id=document.querySelector(['.cat_activ']).dataset.catid
     cats_sel=document.getElementsByClassName("cat")
     
     for(let i=0;i<cats_sel.length;i++){
        cats_sel[i].addEventListener('click',function(){
            console.log((cats_sel[i]).dataset.catid)
            displayItems(categorized_items[Number((cats_sel[i]).dataset.catid)])
            document.querySelector(['.cat_activ']).classList.remove('cat_activ')
            cats_sel[i].classList.add('cat_activ')
        
        
        })
     }

  



