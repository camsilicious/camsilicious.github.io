<!DOCTYPE html>
  <html lang="EN"/>
   <title>My Homepage</title>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </head>
    <body> 
    <div class="container">
      <div class="row">
         <div class="col-12 text-center">
           <h2>LUXE FRAGRANCES</h2>
           <hr class="hr"/>
         </div>
        <div class="row">
      <div class="col-4 text-center">
        <label id="product1"> Secret Desire </label>
        <img src="secret desire.png" style="width:400px;height:500px;" class="img-thumbnail"/><br>
         <label for="product1" id="price1"> 299.00 </label>
        <input type="number" class="form-control" id="qty1" placeholder="Enter Quantity"/><br>
      </div>
      
        <div class="col-4 text-center">
        <label id="product2"> Sweet Serenity </label>
        <img src="sweet serenity.png" style="width:400px;height:500px;" class="img-thumbnail"/><br>
        <label for="product2" id="price2"> 299.00 </label>
        <input type="number" class="form-control" id="qty2" placeholder="Enter Quantity"/><br>
        </div>

        <div class="col-4 text-center">
        <label id="product3"> Angel's Dust </label>
        <img src="angels dust.png" style="width:400px;height:500px;" class="img-thumbnail"/><br>
        <label for="product3" id="price3"> 199.00 </label>
        <input type="number" class="form-control" id="qty3" placeholder="Enter Quantity"/><br>
        </div>

        <div class="col-4 text-center">
        <label id="product4"> Love Luna </label>
        <img src="love luna.png" style="width:400px;height:500px;" class="img-thumbnail"/><br>
        <label for="product4" id="price4"> 199.00 </label>
        <input type="number" class="form-control" id="qty4" placeholder="Enter Quantity"/><br>
        </div>

        <div class="col-4 text-center">
        <label id="product5"> Floral Musk </label>
        <img src="floral musk.jpg" style="width:400px;height:500px;" class="img-thumbnail"/><br>
        <label for="product5" id="price5"> 199.00 </label>
        <input type="number" class="form-control" id="qty5" placeholder="Enter Quantity"/><br>
        </div>

        <div class="col-4 text-center">
        <label id="product6"> Dreamy Bliss </label>
        <img src="dreamy bliss.png" style="width:400px;height:500px;" class="img-thumbnail"/><br>
        <label for="product6" id="price6"> 299.00 </label>
        <input type="number" class="form-control" id="qty6" placeholder="Enter Quantity"/><br>
        </div>
          
        <div class="col-4"> 
           <label for="carts"> Orders </label><br>
          <textarea class="form-control" rows="29" id="carts" cols="200" readonly style="width:350px;height: 400;font-size: 12px;"> </textarea>"
          <input type="text" class="form-control" border-0 id="total" readonly placeholder="Total"/>
          <input type="number" class="form-control" id="cash" placeholder="Cash Tendered"/>
          <input type="text" class="form-control" border-0 id="change" readonly placeholder="Change"/>
        </div>
      </div>
    </div>
        <script src="app.js"></script>
    </body>
    
</html>
