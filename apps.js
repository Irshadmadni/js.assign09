
document.write('Q1 EmptyArray');
document.write('<br>');
var stdNams=[]
stdNams.push('irshad')
console.log(stdNams);
document.write(stdNams);
document.write('<br>');

document.write('Q2 Empty Object');
document.write('<br>');
var obj ={obj1:[]};
console.log(obj);
document.write(obj);
document.write('<br>');

document.write('Q3 String Array');
document.write('<br>');
var stdNams=['Shaban', 'Irshad', 'Imran', 'Irfan', 'Ramzan', 'Usman']
console.log(stdNams);
document.write(stdNams)
document.write('<br>');

document.write('Q4 nmbr Array')
document.write('<br>');
var stdNams=[1,2,3,4,5]
console.log(stdNams);
document.write(stdNams);
document.write('<br>');

document.write('Q5 bolean Array')
document.write('<br>')
var bolen=[true,false,true,true,false]
console.log(bolen[0]);
document.write(bolen[0]);
document.write('<br>');

document.write('Q6 Mix Array');
document.write('<br>');
var mix=[23,'Muhammad',{stdName:['Irshad']},true,false]
console.log(mix);
document.write(mix );
document.write('<br>');

document.write('Q7 Education Degrees in Pakistan' );
document.write('<br>');

var qual=['SSC','HSSC','I.COM','BSC','BCS','B.COM','M.A','MSC','M.COM','MPHIL']
for (var i=0 ; i<=qual.length;i++){
document.write('<ul>')
document.write('<li>'+ qual[i]+'</li>')
document.write('</ul>')
}
document.write('<br>')

document.write('<Q8>')
document.write('<br>')
var stdName=['Shaban','Irshad','Imran','Ramzan','Irfan','Usman'];
var stdScor=[425,447,457,412,460,470];
var stdPr=[];
var tMarks=500;
for(var i=0; i<stdScor.length;i++){
var per=(stdScor[i]/tMarks)*100;
stdPr.push(per)
}
document.write("<table border='1'><tr><th>Name</th><th>Score</th><th>Percentage</th></tr>");
for(var i=0; i<stdName.length;i++){
document.write('<tr>')
document.write('<td>'+stdName[i]+'</td>')
document.write('<td>'+stdScor[i]+'</td>')
document.write('<td>'+stdPr[i].toFixed(2)+'%</td>')
document.write('</tr>')
}
document.write('</table>')
document.write('<br>')
document.write('<br>')

document.write('<b>')
document.write('Q9 colors del and insert')
document.write('<br>')

var colors=['Red','Blue','Black','Purple','Green','Majenda']
document.write(colors)
document.write('</b>')
document.write('<br>')
document.write('<br>')
var a=prompt('Enter Color name which you want at beginig og Array')
colors.unshift(a)
document.write('<b>Colors after Adding color at begining:</b> '+colors)
document.write('<br>')
var b=prompt('Enter color which want at the end of colors')
colors.push(b)
document.write('<b>Colors after Adding color at the End:</b> '+colors)
document.write('<br>')

colors.unshift('yellow')
colors.unshift('Navy')
document.write('<b>colors after adding Two more at begining:</b> '+colors)
document.write('<br>')
colors.shift()
document.write('<b>colors after deleting from Begining:</b> '+colors)
document.write('<br>')
colors.pop()
document.write('<b>colors after deleting from the End:</b> '+colors)
document.write('<br>')
document.write('<br>')
var indx=prompt('Enter a index No. on which you want to add color')
    var clrAdd=prompt('Enter a color which you want to add at your index')
    colors.splice(indx,0,clrAdd)
    document.write('<b>colors after adding color at your index:</b>'+ colors)
    document.write('<br>')
    var ind=prompt('Enter a index No. on which you want to Delete color')
    var clrDel=prompt('Enter how many color you want to Delete at your index')
    colors.splice(ind,clrDel)
    document.write('<b>colors after deleting color at your index:</b>'+ colors)
 document.write('<br>')
 var score=[23,67,54,76,34,65,12,98]
 document.write('<b>Students Score:</b>'+score)
 document.write('<br>')

 score.sort(function(a,b){return a-b})
 document.write('<b>Sorted Students Scores:</b>'+score)
 











