# cryptoCoin - A digital wallet mockup for crypto coins. 


## About

cryptCoin is a digital wallet mockup for crypto coins. 

Built for educational purposes using Vue.js and vuex.
Currently the data stored in local storage with future plans to connect a backend using express and MongoDB. 

The initial intention was to to built this project to only to learn the Vue.js framwork.
Later I have decided to also focus on the design aspect, and chose to go for the neon look and the shape of a cellphone display. 

In order to give the look of a cellphone display the components and pages are all childrens of the Home component and that it the reason they are all placed inside the oval shape. 

For the live data I used Binance.com websocket.
For the chart I used vue-chartjs (which retrieving data from the Binance websocket).
For the news I used Rapid api. 



## Main goals for cryptoCoin are: 
1. Adding more features to the app
   - Serving more the one coin ( currntly only bitcoin).
   - Chart data filtered by type of coin. 
   - Adding live candle chart. 
   - Adding dashboard view. 
2. Keep working on the design (especially the logo)
3. Adding the backend side of it using Node.js, express and MongoDB.
4. Uploading it to Heroku.


<h2>Application Features</h2>

- Openning screen with live data and live account balance. 
- Openning screen with latest transactions.
- Send coins to recipients.  
- Creating, editing and removing of recipients.  
- Getting live data through line chart.   
- Getting latest news about crypto coins. 
 
  
<h2> Technology stack </h2>

- Vue.js with vuex. 


 <h3> How to clone? </h3>

 ```
 git clone https://github.com/dkatorza/cryptocoin.git
 ```

<h2>Showcase</h2>

<h3>Live presentation</h3>



<!-- <h3>Login</h3>
<img src="https://i.im.ge/2021/12/06/oWDe1Y.png" alt="oWDe1Y.png"/>

<h3>Signup</h3>
<img src="https://i.im.ge/2021/12/06/oWIoXC.png" alt="oWIoXC.png"/>

<h3>Greeting</h3>
<img src="https://i.im.ge/2021/12/06/oWIQZ4.png" alt="oWIQZ4.png"/>

<h3>Contacts list</h3>
<img src="https://i.im.ge/2021/12/06/oWI1pm.png" alt="oWI1pm.png"/>

<h3>Contact details</h3>
<img src="https://i.im.ge/2021/12/06/oWIMwD.png" alt="oWIMwD.png"/>

<h3>Contact edit</h3>
<img src="https://i.im.ge/2021/12/06/oWDBpM.png" alt="oWDBpM.png"/>

<h3>Contact add</h3>
<img src="https://i.im.ge/2021/12/06/oWIlbp.png" alt="oWIlbp.png"/>

<h3>Live chart</h3>
<img src="https://i.im.ge/2021/12/06/oWIXiq.png" alt="oWIXiq.png"/> -->

<!-- <h3>Live News</h3>
<img src="https://i.im.ge/2021/12/06/oWIXiq.png" alt="oWIXiq.png"/> --> -->


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


