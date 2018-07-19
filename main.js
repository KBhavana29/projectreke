function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
//  getfile("edit.json",function(text){
  //  var data= JSON.parse(text);
  //  console.log(data);
  //  details(data.basics);
  //  career(data.CareerObjective);
  //  education(data.education);
    //skill(data.skills);
    //  achivements(data.achivements);
//  })

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }  else{
      reject(new Error('error'));
    }
    })
  })
}


var newfile = loadjson("edit.json");
newfile.then(data=>
{
  details(data.basics);
  career(data.CareerObjective);
  education(data.education);
  skill(data.skills);
  achivements(data.achivements);

  //  getfile("edit.json",function(text){
    //  var data= JSON.parse(text);
    //  console.log(data);
    //  details(data.basics);
    //  career(data.CareerObjective);
    //  education(data.education);
      //skill(data.skills);
      //  achivements(data.achivements);
})

    var child= document.querySelector(".childone");


  function details(det) {
    var img=document.createElement("img");
    img.src= det.image;
    child.appendChild(img);

     var name=document.createElement("h3");
     name.textContent=det.name;
     child.appendChild(name);

     var phoneno=document.createElement("h3");
     phoneno.textContent=det.phoneno;
     child.appendChild(phoneno);

     var mail=document.createElement("a");
     mail.href="mailto:kondepatibhavana@gmail.com";
     mail.textContent = det.email;
     child.appendChild(mail);

     var Address=document.createElement("p");
     Address.textContent=det.Address;
     child.appendChild(Address);

     var hr=document.createElement("hr");
     child.appendChild(hr);
}
var child2=document.querySelector(".childtwo");
function career(careerinfo){

  var hd=document.createElement("h1");
  hd.textContent="Career Objective:";
  child2.appendChild(hd);

var info1=document.createElement("h3") ;
info1.textContent=careerinfo.info;
child2.appendChild(info1);

var hr=document.createElement("hr");

child2.appendChild(hr);

}
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent="Education Qualification:";
  child2.appendChild(ed);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h3");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);

    var eduu1=document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent= edu[i].institute;
    eduu1.appendChild(eduli);
    child2.appendChild(eduu1);

        var eduu2=document.createElement("ul");
        var eduli1 = document.createElement("li");
        eduli1.textContent= edu[i].data;
        eduu2.appendChild(eduli1);
        child2.appendChild(eduu2);
  }
}

  function skill(skillinfo){
    var sk=document.createElement("h2");
    sk.textContent="Technical Skills:";
    child2.appendChild(sk);

    var hr=document.createElement("hr");
    child2.appendChild(hr);

    var skilldata =document.createElement("table");
    skilldata.border="1";
    child2.appendChild(skilldata);

    tabledata="";
    for(i=0;i<skillinfo.length;i++)
    {
      tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
    }
    skilldata.innerHTML=tabledata;
  }
  function achivements(ach){
    var arc=document.createElement("h2");
    arc.textContent="Achivements";
    child2.appendChild(arc);

    var hr=document.createElement("hr");
    child2.appendChild(hr);
for(i=0;i<ach.length;i++)
{
    var arch=document.createElement("ul");
    var arch1 = document.createElement("li");
    arch1.textContent= ach[i].data;
    arch.appendChild(arch1);
    child2.appendChild(arch);
  }
  }
