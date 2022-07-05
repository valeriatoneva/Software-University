function solve(input){
  
    let movies = [] ;
    
   input.forEach((item) => {
       if(item.includes(`addMovie`)){
          let movie = item.replace(`addMovie `, "");
          movies.push({name:movie})
       } else if(item.includes(`directedBy`)){
          let movieInfo = item.split(" directedBy ");
          let name = movieInfo[0];
          let director = movieInfo[1];
          movies.forEach((movie) => {
              if(movie.name === name){
                  movie.director = director; 
              }
          })
       } else if (item.includes(`onDate`)){
           let [name,date] = item.split(` onDate `);
           movies.forEach((movie) => {
              if(movie.name === name){
                  movie.date = date; 
              }
       })
   
   }
  
  })
   
   movies.forEach((movie) => {
       if(movie.name && movie.director && movie.date){
           console.log(JSON.stringify(movie))
       }
   })
     
   
   
   
   
   
   }