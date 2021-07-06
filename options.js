getData();

const deptName=[];
var deptNo=[];

async function getData(){
    const res= await fetch('data.csv');
    const data = await res.text();
    console.log('hello there it is inside options.js')
    const table= data.split('\n').slice(1);
   
    table.forEach(row=>{
        var col=row.split(',');
       
    deptName.push(col[1]);
    deptNo.push(col[0]);
       

    })
   
}

    console.log('this is opetions build fucnito')
    console.log('helloe this is true',deptNo[9])
    for (var i=0;i<3;i++){
        console.log('e',deptNo[deptNo.length-i])
    }
  console.log(deptName[0])


  

