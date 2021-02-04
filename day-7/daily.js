function fizzbuzz (){
    let counter = 1;
    while(counter<=100){
        console.log (counter);
       if(counter%3==0 && counter%5!=0){
           console.log ("fizz");
       } else if (counter%5==0 && counter%3!=0){
           console.log ("buzz");
       } else if (counter%3==0 && counter%5==0){
           console.log ("fizzbuzz");
       } else {
           console.log ("na");
       }


    }
}
