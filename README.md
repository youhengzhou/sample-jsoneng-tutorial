# sample-jsoneng-tutorial

Hello, this is a sample tutorial project for my Jsoneng JSON based database.

In this tutorial project, the jsoneng database interfaces with express and receives information from a user's POST request and creates a new database entry based on the user's data.

![image](https://user-images.githubusercontent.com/60205850/206361952-f1cdd130-739e-4719-a44f-64fa06049c2e.png)

The image above is where the sample database is in the file tree

![image](https://user-images.githubusercontent.com/60205850/206362499-559ab1cb-3e2a-40d5-9659-d7ac3badda3b.png)

Here we import jsoneng and we create a new empty database called SampleDataBase, which will act as the database's name.

![image](https://user-images.githubusercontent.com/60205850/206362209-33508bc1-03f8-48ee-952c-9d40302d532d.png)

Here we use an express app to listen for a post request from the /post url, and uses the bodyparser to take the `name` of the postData and update it against the name key in the SampleDataBase that we created earlier, with the value being the user's post data.

![image](https://user-images.githubusercontent.com/60205850/206362606-d7e10ab5-ef31-495b-8d06-a2497c118894.png)

And this is what the data look like at the end.
