// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.

async function getData() {

    try {
       await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
        .then((response) => response.json())
        .then(data => {data.filter((post) =>post.userId === 1)});
        console.log(data)




    }
    catch
    (error)
    {console.log(error)}
    
}

getData();

// Din kod här
