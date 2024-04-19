document.querySelector("body").innerHTML = `
<div class="container">
<div class="app">
    <div class="form">
        <form>
            <!-- <label for="location">Location: </label> -->
            <input id="location" type="text" placeholder="location" required>
            <button type="submit">Search</button>
        </form>
    </div>
    <div class="data">
        <div class="loading">
        
        </div>
        <div class="city-country">
        
        </div>
        <div class="temp_c">
        
        </div>
    </div>
</div>
</div>

`   