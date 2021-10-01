

  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");


    let query = new Moralis.Query('ITEM');
    let subscription =  await query.subscribe(); 

    subscription.on('create', onItemCreated)

    const onItemCreated = (item) => {
        console.log(item);
    }


export const items = [

]