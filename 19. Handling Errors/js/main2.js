const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
        if(i % 2 !== 0){
            throw new Error ("odd number!"); //go to catch and then finally
        }
        console.log("Even number!");; //go to direct finally
    } catch (err) {
        console.error(err.stack);
    } finally {
      console.log("...fianally");
      i++;
    }
  }
};
makeError();