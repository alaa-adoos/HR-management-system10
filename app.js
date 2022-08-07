const body = document.getElementsByTagName(`body`);
const div= document.getElementsByClassName(`card`);
const div2= document.getElementsByClassName(`container`);
let Id=999;
function managementSystem(employeeId,fullName,departmentHr,levelHr,imageUrl,salaryHr){
    this.id=employeeId;
    this.id=++Id;
    this.name=fullName;
    this.department=departmentHr;
    this.level=levelHr;
    this.image=imageUrl;
    this.salary=salaryHr;
}
managementSystem.prototype.uniqueId=function(){
console.log(Id);
}
managementSystem.prototype.gitRandomSalary=function(max,min){
    let salary=Math.floor(Math.random()*(max-min)+min);
    let netSalary=salary-(salary*0.075);
   document.write(salary);
   // console.log("the netTax is "+netSalary);
}
managementSystem.prototype.print=function () {
   const imgv=document.createElement('img');
   imgv.className="card";
  imgv.src=this.image;
  imgv.alt=this.name;
body[0].appendChild(imgv);
   //body[0].appendChild(imgv);
   const BB=document.createElement(`span`);
 BB.textContent=`name : ${this.name}`;
 BB.className="container";
body[0].appendChild(BB);
 const cc=document.createElement(`span`);
 cc.textContent=`id- : ${this.id}`;
 cc.className="container";
body[0].appendChild(cc);
 


}


let  Ghazi=new managementSystem("","Ghazi Samer","Administration","Senior","./images/Ghazi.jpg")
const Lana=new managementSystem("","Lana Ali","Finance","Senior","./images/Hadi.jpg")
const Tamara=new managementSystem("","Tamara Ayoub","Marketing","Senior","./images/Lana.jpg")
const Safi=new managementSystem("","Safi Walid","Administration","Mid-Senior","./images/Omar.jpg")
const Omar=new managementSystem("","Omar Zaid","Development","Senior","./images/Rana.jpg")
const Rana=new managementSystem("","Rana Saleh","Development","Junior","./images/Safi.jpg")
const Hadi=new managementSystem("","Hadi Ahmad","Finance","Mid-Senior","./images/Tamara.jpg")

Ghazi.print();
Ghazi.gitRandomSalary(2000,1500);
document.write("</br></br>");
Lana.print();
Lana.gitRandomSalary(2000,1500);
document.write("</br></br>");
Tamara.print();
Tamara.gitRandomSalary(2000,1500);
document.write("</br></br>");
Safi.print();
Safi.gitRandomSalary(1500,1000);
document.write("</br></br>");
Omar.print();
Omar.gitRandomSalary(2000,1500);
document.write("</br></br>");
Rana.print();
Rana.gitRandomSalary(1000,500);
document.write("</br></br>");
Hadi.print();
Hadi.gitRandomSalary(1500,1000);

