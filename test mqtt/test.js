const db=require('./database');
let id="id";
let cnst="ch1" ;
const query =`SELECT * FROM test.makerlabs INNER JOIN test.robots ON test.makerlabs.id = test.robots.idrobots where id = ? `;
// Connect to the database
 
  
  // Function to select a person by their ID
  function selectPersonById(personId) {
    return new Promise((resolve, reject) => {
      db.query(query, [personId], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results[0]); // Resolve with the first result (assuming personId is unique)
      });
    });
  }
  
  // Function to perform action if person exists, otherwise do another action
  async function performAction(personId,cnst,col) {
    try {
      const person = await selectPersonById(personId);
      if (person) {
        // Person exists, do something
        console.log('Person exists:');
        // Call function1 or perform action1
        function1();
        update(cnst,personId,col);
      } else {
        // Person setInterval(does not exist
        console.log('Person does not exist');
        // Call function2 or perform action
        insert(cnst,personId,col);
      }
    } catch (error) {
      console.error('Error performing action:', error);
    }
  }

  // Example functions
  function function1() {
    console.log('Function 1 called');
    // Your code for function 1
  }
  
 // let col="Score"
  function insert(cnst,id,col) {
    const sql ="INSERT INTO `test`.`makerlabs` (`"+col+"`) VALUES (?, ?);"
    const values = [id,cnst];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting or updating person:', err);
            return;
        }
        console.log('Person inserted or updated successfully');
    });
}

function update(cnst,id,col) {
    const sql ="UPDATE `test`.`makerlabs` SET `"+col+"` = ? WHERE (`id` = ?);"
    const values = [cnst,id];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating person:', err);
            return;
        }
        console.log('Person updated successfully');
    });
}
  function function2() {
    console.log('Function 2 called');
    // Your code for function 2
  } 
 // module.exports = {performAction ,selectPersonById};
 module.exports = {performAction };