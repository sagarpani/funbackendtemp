require('dotenv').config()

const express = require('express');

const app = express();

const githubData = {
  "login": "sagarpani",
  "id": 170869539,
  "node_id": "U_kgDOCi9DIw",
  "avatar_url": "https://avatars.githubusercontent.com/u/170869539?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sagarpani",
  "html_url": "https://github.com/sagarpani",
  "followers_url": "https://api.github.com/users/sagarpani/followers",
  "following_url": "https://api.github.com/users/sagarpani/following{/other_user}",
  "gists_url": "https://api.github.com/users/sagarpani/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sagarpani/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sagarpani/subscriptions",
  "organizations_url": "https://api.github.com/users/sagarpani/orgs",
  "repos_url": "https://api.github.com/users/sagarpani/repos",
  "events_url": "https://api.github.com/users/sagarpani/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sagarpani/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sagar Pani",
  "company": "PCS Global",
  "blog": "https://sagar-evolves-dev.vercel.app/",
  "location": "India",
  "email": null,
  "hireable": true,
  "bio": "Love to build products",
  "twitter_username": "Thedefamed02",
  "public_repos": 15,
  "public_gists": 0,
  "followers": 3,
  "following": 3,
  "created_at": "2024-05-26T13:17:23Z",
  "updated_at": "2026-05-13T18:02:22Z"
}

app.get('/github',(req, res) => {
    res.json(githubData);
})

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('/twitter',(req, res)=>{
    res.send("twittercom")
});

app.get('/login',(req, res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT} `);
    
})