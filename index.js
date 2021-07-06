const filerows={};
const dept1=[]
var h;

Papa.parse('/data.csv', {
    header:true,
    download:true,
    skipEmptyLines:true,
	complete: function(results) {
     filerows.data=results.data
	//	console.log("Finished:", filerows.data);

        createOptions(filerows.data);
   
        parseData(filerows.data)//able to get array of objects 

	}
});
//console.log('file rows data',filerows)
//functions to create options dynamically
const createOptions=(data)=>{
    var sel=document.getElementById("box1");
    data.map(dpt=>{
        let opt= document.createElement('option');
        opt.value=dpt.Grant_No;
        opt.text=dpt.Dep_Name;
        sel.add(opt,null);
    })
}

// function myNewFun(){
//     var sel=document.getElementById("box1");
//     var opt= sel.options[sel.selectedIndex].value;
//     h= sel.options[sel.selectedIndex].value;
//  console.log( h);
//  return opt;
// }

// console.log(h);


//function declaration for fetching the data of 1st row in csv file
const parseData=(data)=>{
// console.log(myNewFun())
var sel=document.getElementById("box1");

sel.addEventListener("change",()=>{var h=sel.options[sel.selectedIndex].value;
  let dept= data.find(dpt=>dpt.Grant_No===h);
dept1.unshift(dept.Total_Budget,dept.Prg_Sanction,dept.Prg_Allotment,dept.Expenditure_May);
console.log('new data',dept1);

if(dept1.length>4){
  dept1.splice(-4);
}

creChart();

})



}









const creChart=()=>{
var bgcolor=[ 'rgba(23, 46, 255, 0.678)', 'rgba(28, 1, 148, 0.836)','rgba(106, 81, 219, 0.507)','rgba(255, 221, 4, 0.432)'];
var borderColor=[ 'rgba(23, 46, 255, 0.678)', 'rgba(28, 1, 148, 0.836)','rgba(106, 81, 219, 0.507)','rgba(255, 221, 4, 0.432)']
var ctx= document.getElementById('canvas').getContext('2d');
var ctx1=document.getElementById('canvas1');
var ctx2=document.getElementById('canvas2');

	


console.log('end')
var myChart = new Chart(ctx, {
    type: 'pie',
    
    maintainAspectRatio:false,
    data: {
        labels: ['Total_Budget', 'Prg_Sanction', 'Prg_Allotment', 'Expenditure_May'],
        datasets: [{
            
            data: dept1,
            backgroundColor:bgcolor ,
            borderColor:borderColor,
            borderWidth: 1,
            hoverOffset: 4,
        }]
      },
        options: {
          // aspectRatio:1,
          responsive:true,
 maintainAspectRatio: false,/*resizing the chart js is a difficult job */
//             tooltips: {
//               enabled: false
//             },
            legend: { position:'bottom',
              display:true// <- the important part
            }
        
        
        
        }
    
});
var doug=new Chart(ctx1, {
  type: 'doughnut',
  
  maintainAspectRatio:false,
  data: {
      labels: ['Total_Budget', 'Prg_Sanction', 'Prg_Allotment', 'Expenditure_May'],
      datasets: [{
          
          data: dept1,
          backgroundColor:bgcolor ,
          borderColor:borderColor,
          borderWidth: 1,
          hoverOffset: 6,
      }]
    },
      options: {
    
        responsive:true,
        maintainAspectRatio: false,/*resizing the chart js is a difficult job */
        legend: {
           position:'bottom',
            display:true// <- the important part
          }
        }
  
});
var bar2=new Chart(ctx2, {
  type: 'bar',
  
  maintainAspectRatio:false,
  data: {
      labels: ['Total_Budget', 'Prg_Sanction', 'Prg_Allotment', 'Expenditure_May'],
      datasets: [{
          label:"Bar",
          data: dept1,
          backgroundColor:bgcolor ,
          borderColor:borderColor,
          borderWidth: 1,
          hoverOffset: 6,
      }]
    },
      options: {
    
        responsive:true,
        maintainAspectRatio: false,/*resizing the chart js is a difficult job */
        legend: {
           position:'bottom',
            display:true// <- the important part
          }
        }
  
});
}  