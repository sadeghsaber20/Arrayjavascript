// //جاوااسکریپت کد های کمکی ارایه
// برای جستجوی ارایه در جاوا اسکریپت
// const nmuber =[1,2,54,5];
// if(nmuber.includes())
// console.log('yes');
// ...............................
// /برای اضافه کردن یک ابجکت در ارایه
// const nmuber=[3,4];
// nmuber.push('sadegh')
// console.log(nmuber);
// ..............................
// برای حذف یک یک ابجکت در ارایه
// const nmuber=[3,4];
// nmuber.pop('sadegh')
// console.log(nmuber);
// ......................................
// نوع دوم از ارایه و ابجکت ها که مخصوص ارایه های محصولات است
// const nmubers=[

//     {id:1,name:'phone' ,price:30000},
//     {id:2,name:'pc' ,price:50000}
// ];
// const result =nmubers.find(function(nmuber){

//     // return nmuber.name==='phone'    
//     return nmuber.id===2

// });
// console.log(result);
// .......................................................
// /متد arrow functionپاس دادن یک فانکشن از اروی فانکشن استفاده می شود
// const course=[
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ];
// const results=course.find(corse=>corse.name ==='a');
// console.log(results);
// ..................................................
// //حذف همه المنت های ارایه 
// let nmubers=[1,2,3,4];
// let another=nmubers;
// // طول ارایه.........
// // nmubers.length=0;
// // ..نوع دوم
// // nmubers.splice(0,nmubers.length);
// console.log(nmubers);
// console.log(another);
// ...........................................
// الحاق و برش ارایه وصل کردن دو ارایه
// const first =[1,2,3];
// const second =[4,4,4];
// // وصل کردن یک ارایه به یک ارایه دیگر
// const combinde= first.concat(second);
// console.log(combinde);
// // ..........................اگر ورودی ندیم کپی می شود...
//  const slice=combinde.slice(1);
// console.log(slice);
// .........................
// const arryy=[{id:1}]
// arryy[0].id=30;
// console.log(arryy);
// .وصل کردن یک ارایه به یک ارایه دیگر...عملکرد اسپریت...........................................
// const first =[1,3,54,5];
// const secend =[3,4,5,3,2];
// const combindels =[...first,...secend];
// console.log(combindels);
// ...............................
// const first =[1,3,54,5];
// const secend =[3,4,5,3,2];
// const combindels =['sadegh',...first,...secend,'sadegh'];
// console.log(combindels);
// .................................
// پیمایش ارایه......................

// const nmubers=[1,32,43,4];
// for(let nmuber of nmubers){
//     console.log(nmuber);
// }

// nmubers.forEach(function(nmuber){


//     console.log(nmuber);


// });

// نوع بهتر پیماش
// nmubers.forEach((nmuber,i)=>console.log(nmuber+'=index='+i));
// /..................................جوین کردن یک ارایه.

// const nmuber =[1,3,54];
// const joined =nmuber.join('');
// console.log(joined);
// .....................
///مرتب کردن ارایه 
// const nmuber =[5,3,4];

// nmuber.sort();
// nmuber.reverse();
// console.log(nmuber);
// .....................................
// const nmuber =[

//     {id:1,name:'html'},
//     {id:2,name:'css'}
// ];
// nmuber.sort(function(a,b){
    
//     let nameA =a.name.toLowerCase();
//     let nameB =b.name.toLowerCase();

//     if(nameA<nameB)return -1;
//     if(nameA>nameB)return 1;
//     return 0;


// });
// console.log(nmuber);
// ..........................
//یا اینکه می توانیم چک کنیم که کسی تخلف کرده یانه//بتست المنت های ارایه ویا می توان از این کد برای چک اینکه ایا  حساب مشتری می تواند محصول را بخرد یانه
// const  nmuber =[1,3,45,5];

//  const allpositive=nmuber.every(function(value){

//     return  value>=0;


// });
// // ................این متد می اید اگر یکی فقط باشد را درست می گیرد
//  const allpositive2=nmuber.some(function(value){

//     return  value>=0;


// });
// console.log(allpositive);
// console.log(allpositive2);
// ..............................
// فیلتر کردن یک ارایه
// مثال  برای سایت هایی قرای است یک سری کاربرهای فیلتر شوند
// const nmuber =[1,3,-1,6,8];
// const filter=nmuber.filter(function(value){

//     return value>=0;
// });
// console.log(filter);

// ارایه از ابجکت ها
//از این کد می توانید برای شرایط سنی استفاده کنیم
// const  users =[
//     {name:'sadegh',age:19},
//     {name:'sadegh',age:27},
//     {name:'sadegh',age:25},
//     {name:'sadegh',age:24},
// ];
// const result=users.filter(users=>users.age>=18);
// console.log(result);
// مپ کردن ارایه که می توانیم نوع ارایه را به یک چیز دیگر تبدیل کنیم
// const nmubers =[1,3,54,6,7];
//  const result=nmubers.map(function(value){

//     return value *2;
// });
// console.log(result);
// .مهم برای اضاه کردن یک المن html
// const products =['html','css','js'];
// const itms =products.map(function(product){

//     return `<li>${product}</li>`;
// });

// const html =`<ul>${itms.join('')}</ul>`;
// console.log(html);
// const product =['html','css','js'];
// const itms =product.map(function(product){

//     const obj ={value:product};
//     return obj;

// });
// console.log(itms);
// .......................................





















































































































































