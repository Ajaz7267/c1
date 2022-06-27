// store the products array in localstorage as "data"


let products=JSON.parse(localStorage.getItem("data"))||[];

function Product(b,n,p,i){
    this.brand =b;
    this.name  =n;
    this.price =p;
    this.image =i;
}

function dataUser(e){
    e.preventDefault();
    let form = document.getElementById("product_form");
    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let p = new Product(brand,name,price,image)
    products.push(p);
    localStorage.setItem("data",JSON.stringify("products"));
    window.location.href="inventory.html";

}
