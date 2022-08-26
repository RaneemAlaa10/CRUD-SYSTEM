var ProductName=document.getElementById("ProductName")
var ProductCategory=document.getElementById("ProductCategory")
var ProductPrice=document.getElementById("ProductPrice")
var ProductDescription=document.getElementById("ProductDescription")
var products=[]
var namePattern=/^[A-Z]{1}[a-z|A-z]{1,10}$/
var pricePattern=/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
var valid;

if (localStorage.getItem('x') == null) {
    products = []
} else {
    products = JSON.parse(localStorage.getItem('x'))
    Display()

}
/*---------- START OF CRUD MAIN FUNCTIONS----------*/
//Get data from inputs and store it
function getData()
{
    var product = {
        ProductName: ProductName.value,
        ProductCategory: ProductCategory.value,
        ProductPrice: ProductPrice.value,
        ProductDescription: ProductDescription.value
    }
    products.push(product)
    console.log(products);
    Display()
    clear()
    localStorage.setItem('x', JSON.stringify(products))
}

//Display Data
function Display()
{
    var box = ``
    for (var i = 0; i < products.length; i++) {
        box += `
    <tr>
    <td>${i+1}</td>
    <td>${products[i].ProductName}</td>
    <td>${products[i].ProductCategory}</td>
    <td>${products[i].ProductPrice}</td>
    <td>${products[i].ProductDescription}</td>
    <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="update(${i})" class="btn btn-warning">Update</button></td>
    </tr>`
    }
    document.getElementById('data').innerHTML = box
}

//Delete record
function Delete(index)
{
    console.log(index);
    products.splice(index, 1)
    console.log(products);
    Display()
    localStorage.setItem('x', JSON.stringify(products))

}

//clear text from inputs
function clear()
{
    ProductName.value = ""
    ProductCategory.value = ""
    ProductPrice.value = ""
    ProductDescription.value = ""
    reset()
}


//search with any key
function Search(searchInput)
{
    
    var box2 = ``
    for (var i = 0; i < products.length; i++) 
    {
        sproducts=products[i]
        for(const[key,value] of Object.entries(sproducts))
        {
            if (value.toLowerCase().includes(searchInput.toLowerCase())) 
            {
                box2 += `
            <tr>
            <td>${i+1}</td>
            <td>${sproducts.ProductName.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
            <td>${sproducts.ProductCategory.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
            <td>${sproducts.ProductPrice.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
            <td>${sproducts.ProductDescription.replace(searchInput,'<span>'+searchInput+'</span>')}</td>
            <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
            <td><button onclick="update(${i})" class="btn btn-warning">Update</button></td>
            </tr>`
            break
            }
            
        }
    }
    document.getElementById('data').innerHTML = box2
}

//update any record
function update(index)
{
    if(ProductName.value!="")
    {
        products[index].ProductName=ProductName.value
    }
    if(ProductCategory.value!="")
    {
        products[index].ProductCategory=ProductCategory.value
    }
    if(ProductPrice.value!="")
    {
        products[index].ProductPrice=ProductPrice.value
    }
    if(ProductDescription.value!="")
    {
        products[index].ProductDescription=ProductDescription.value
    }
    Display()
    localStorage.setItem('x', JSON.stringify(products))
    clear()
    console.log("done")
}
/*---------- END OF CRUD MAIN FUNCTIONS----------*/

/************VALIDATION FUNCTIONS************/
function validateName(data)
{
    if(namePattern.test(data)==true)
    {
        console.log("Valid")
        document.getElementById("nameAlert").style.display="none"
        document.getElementById("wrong-name").style.display="none"
        document.getElementById("correct-name").style.display="block"
        document.getElementById("ProductName").style.borderColor="#50C878"
        valid = true;
        console.log(valid)
    }
    else{
        document.getElementById("correct-name").style.display="none"
        document.getElementById("nameAlert").style.display="block"
        document.getElementById("wrong-name").style.display="block"
        document.getElementById("ProductName").style.borderColor="rgb(196, 0, 0)"
        valid=false
        console.log(valid)
    }
    if(data=="")
    {
        document.getElementById("wrong-name").style.display="none"
        document.getElementById("nameAlert").style.display="none"
        document.getElementById("ProductName").style.borderColor="#ced4da"
        valid=false
        console.log(valid)
    }
}


function validatePrice(price)
{
    if(pricePattern.test(price)==true)
    {
        console.log("Valid")
        document.getElementById("priceAlert").style.display="none"
        document.getElementById("wrong-price").style.display="none"
        document.getElementById("correct-price").style.display="block"
        document.getElementById("ProductPrice").style.borderColor="#50C878"
        valid=true
        console.log(valid)
    }
    else{
        console.log("invalid")
        document.getElementById("correct-price").style.display="none"
        document.getElementById("priceAlert").style.display="block"
        document.getElementById("wrong-price").style.display="block"
        document.getElementById("ProductPrice").style.borderColor="rgb(196, 0, 0)"
        valid=false
        console.log(valid)
    }
    if(price=="")
    {
        document.getElementById("wrong-price").style.display="none"
        document.getElementById("priceAlert").style.display="none"
        document.getElementById("ProductPrice").style.borderColor="#ced4da"
        valid=false
        console.log(valid)
    }
}
function ValidateCate(cate)
{
    if(cate!="")
    {
        console.log("Valid")
        document.getElementById("cateAlert").style.display="none"
        document.getElementById("wrong-cate").style.display="none"
        document.getElementById("correct-cate").style.display="block"
        document.getElementById("ProductCategory").style.borderColor="#50C878"
        valid=true
        console.log(valid)
    }
    else
    {
        console.log("invalid")
        document.getElementById("correct-cate").style.display="none"
        document.getElementById("cateAlert").style.display="block"
        document.getElementById("wrong-cate").style.display="block"
        document.getElementById("ProductCategory").style.borderColor="rgb(196, 0, 0)"
        valid=false
        console.log(valid)
    }
}

function reset()
{
    document.getElementById("correct-cate").style.display="none"
    document.getElementById("ProductCategory").style.borderColor="#ced4da"
    document.getElementById("correct-name").style.display="none"
    document.getElementById("ProductName").style.borderColor="#ced4da"
    document.getElementById("correct-price").style.display="none"
    document.getElementById("ProductPrice").style.borderColor="#ced4da"
}

function validation() 
{
    if (valid == true) 
    {
        document.getElementById("btn").disabled = false;
    }
    else
    {
        document.getElementById("btn").disabled = true;
    }

}

