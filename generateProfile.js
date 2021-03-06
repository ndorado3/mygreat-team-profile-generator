function generateProfileHTML(team) {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Great Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
        <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Great Team Profile</h1>
        </div>
            </div>
            </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                ${team}
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
}

//Renders the team cards
function generateTeamCards(ans) {
  let role;
  if (ans.title === "Manager") {
    role = `Office Number: ${ans.officeNumber}`;
  } else if (ans.title === "Engineer") {
    role = `Github Username: ${ans.github}`;
  } else if (ans.title === "Intern") {
    role = `School: ${ans.school}`;
  }
  return `
  <div class="card">
<div class="card-header">
    <h2>${ans.name}</h2>  
    <h2><i class="far fa-user"></i> ${ans.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${ans.id}</li>
        <li>Email: ${ans.email}</li>
        <li>${role} </li>
    </ul>
</div>
</div>`;
}

// module.exports = generateProfileHTML;
// module.exports = generateTeamCards;

exports.generateProfileHTML = generateProfileHTML;
exports.generateTeamCards = generateTeamCards;
