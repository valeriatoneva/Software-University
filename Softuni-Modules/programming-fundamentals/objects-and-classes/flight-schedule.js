function solve(input) {
       let allFligths = {};
       let firstArr = "";
       let secondArr = "";
       let thirdArr = "";
       for(let i = 0; i < input.length; i++){
          let arrays = input[i];
          firstArr = input[0]; // all fligths
          secondArr = input[1]; // newly changed statuses
          thirdArr = input[2]; // flight status
       }
       
       
       for(let el of firstArr){
          let [sector, destination] = el.split(" ");
             newFlights[sector] = {
             Destination: destination,
             Status: flightStatus,
           };
       }
       
       for(let el of secondArr){
          let splitArr = el.split(" ");
          let numberOfFligthOfSecond = splitArr[0];
          let newStatus =  splitArr[1];
       }
       
       
       
       
       // for(let el of thirdArr){
       //   let fligthStatus = el;
       //   if(fligthStatus === `Ready to fly`){
              
       //       fligthStatus === `Ready to fly`
       //   } else {
              
       //   }
       
       
       
           
       }
        solve
        ([['WN269 Delaware','FL2269 Oregon','WN498 Las Vegas','WN3145 Ohio','WN612 Alabama','WN4010 New York','WN1173 California','DL2120 Texas','KL5744 Illinois','WN678 Pennsylvania'],['DL2120 Cancelled','WN612 Cancelled', 'WN1173 Cancelled','SK430 Cancelled'],['Cancelled']]);