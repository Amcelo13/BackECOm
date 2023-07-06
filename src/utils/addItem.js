import axios from "axios";
const addItem =async(values, mode) => {

  // if (!localStorage.getItem(mode)) {
  //   const myDATA = [values];
  //   localStorage.setItem(mode, JSON.stringify(myDATA));
  // } else {
  //   let DATA = JSON.parse(localStorage.getItem(mode));
  //   localStorage.setItem(mode, JSON.stringify([...DATA, values]));
  // }
if (mode === 'realStore'){ 
  //Pushing product data to MongoDB
  try{
    await axios.post('http://localhost:4000/products', values).
    then((response)=>{
        if(response.status === 200){
            console.log('Data Sent')
        }
    })
    .catch((error) => {
        console.log(error)
    })
  }
  catch(err){
      console.log(err)
  }
}
if (mode === 'draft'){ 
  //Pushing product data to MongoDB
  try{
    await axios.post('http://localhost:4000/products', values).
    then((response)=>{
        if(response.status === 200){
            console.log('Data Sent')
        }
    })
    .catch((error) => {
        console.log(error)
    })
  }
  catch(err){
      console.log(err)
  }
}

};

export default addItem;
