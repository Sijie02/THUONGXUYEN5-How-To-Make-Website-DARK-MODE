// // //Bai 2
// // var principal = 1000000;
// // var rate= 0.5;
// // var time= 2;

// // var interest = principal * rate * time / 100
// // var totalAmount = principal + interest
// // console.log(totalAmount);
// // //Bai 3
// // var radius = 5;
// // var chuVi = 2 * Math.PI * radius;
// // var dienTich = Math.PI * radius * radius
// // console.log(chuVi);
// // console.log(dienTich);
// // //Bai 4
// // function tinhTong(soHang1, soHang2)
// // {var sum = soHang1 + soHang2;
// //     console.log(sum);

// // }
// // tinhTong(10, 65);
// // tinhTong(2, 5);
// // tinhTong(12, 25);
// // tinhTong(40, 63);
// // //tinhTong (10, 65);
// // function tinhTong(soHang1, soHang2)
// // {var sum = soHang1 + soHang2;
// // return sum;
// // }
// // console.log(tinhTong(1+2)*2);
// // //Bai tap
// // function chuyenDoiNhietdo(C, F){
// //     var F =  C * 9/5 + 32
// //     return F
// // }
// //     console.log(chuyenDoiNhietdo(5))
// // //Bai tap cam on
// // function laiSuat(principal, rate, time)
// // {
// //     var interest = principal * rate * time / 100
// // var totalAmount = principal + interest
// // return totalAmount
// // }
// // console.log(laiSuat(2000000, 0.03, 3));   

// // function kiemTraChanLe (soNguyen){
// // if(soNguyen %2 == 0){
// //     console.log("So chan")
// // } else{
// //     console.log("So le")
// // }
// // }
// // kiemTraChanLe(11)

// // function tinhTienDien (soDien)
// // {
// //     if (soDien <= 50){
// //         console.log(soDien*1500)    
// //     } else{
// //         console.log(50*1500 + (soDien-50)*2000)
// //     }
// // }
// // tinhTienDien (70)

// // function diemTB (dtb){
// // if(dtb >= 9.5 && dtb<=10) {
// // console.log("Ban la HS xuat sac");
// // }
// // else if( dtb >=8 && dtb <=9.5){
// // console.log("Ban la HS gioi")
// // }
// // else if( dtb >=7 && dtb <=8){
// // console.log("Ban la HS kha");
// // }
// // else if( dtb >=5 && dtb <=7){
// // console.log("Ban la HS TB");
// // }
// // else {
// // console.log("Ban la Hs yeu");
// // }
// // }
// // diemTB (6.5)

// // for (let i=0; i<=5; i++){
// //     console.log(i, "I love U");
// // }
// // function soChan(n){
// // for ( i=1; i<=n; i++){
// //     if(i%2==0){
// //         console.log(i)
// //         }
// // }
// // }
// // soChan(20)

// // function bangCuuChuong(k){
// //     for ( i=0; i<=9; i++)
// //         {
// // console.log(k*i)
// //     }
// // }
// // bangCuuChuong(5)

// // function giaiThua(n){
// //     let rs=1;
// //     let i=n
// //     while(i<=n, i>0){
// //         rs*=i
// //         i--;
// //     }
// //     console.log(rs)
// // }
// // giaiThua(5)


// // // let  str="Hello LSTS";
// // // console.log (str[2]);

// // function demsolan(chuoi,kytu){
// //     let count= 0 ;
// //     for (let i = 0; i < chuoi.length; i++) {
// //        if( chuoi[i]==kytu){
// //         count ++;

// //        }
        
// //     }
// //     console.log(count);
// // }
// // demsolan("hello lsts","o")



// // function nameArr(arr) {
// //     for (let i = 0; i < arr.leng; i++) {
// // if (arr[1] % 2 ==0) {
    
// //     console.log(arr[i])
// // }
// //          }
// // }
// // nameArr([1,23,22])


// //  let book=[
// //         {title:"Math",
// //         author:"Peter",
// //           available: true},

// //           {title:"Math1",
// //             author:"Peter1",
// //               available: true},

// //               {title:"Math2",
// //                 author:"Peter2",
// //                   available: true},


// //                   {title:"Math3",
// //                     author:"Peter3",
// //                       available: true},
// //                   ]
// // function   findBookByTitle(booksArray, titlebook) {
   
// //                   for (let i = 0; i < book.length; i++) {
// //                    if (book[i].title== titlebook) 
// //                     {
// //                         if (book[1].available==trua) {
// //                             console.log ("Sach co san")
// //                             return;
            
// //                         }else{
// //                             console.log ("Sach khong co san")
// //                             return;
// //                         } 
// //                    } else {
// //                     console.log("Khong co sach do")
// //                     return;
// //                    } 
                    
// //                   }
// //                 }
// //         findBookByTitle(book,"Math")

// // function diemTB (diemToan, diemHoa,diemSinh){
// //     let dtb= (diemHoa + diemToan+diemSinh)/3 
// //     if(dtb >= 9.5 && dtb<=10) {
// //     console.log("Ban la HS xuat sac");
// //     }
// //     else if( dtb >=8 && dtb <=9.5){
// //     console.log("Ban la HS gioi")
// //     }
// //     else if( dtb >=7 && dtb <=8){
// //     console.log("Ban la HS kha");
// //     }
// //     else if( dtb >=5 && dtb <=7){
// //     console.log("Ban la HS TB");
// //     }
// //     else {
// //     console.log("Ban la Hs yeu");
// //     }
// //     }
// //     diemTB (9,6,5)
 

// // function electricBillCalculator(i) {
// //     if (isNaN(i) || i <= 0) {
// //         console.log("Dữ liệu không hợp lệ");
// //         return;
// //     }

// //     let total = 0; 
// //     if (i <= 50) {
// //         total = 1.728 * i;
// //     } else if (i <= 100) {
// //         total = 1.728 * 50 + 1.786 * (i - 50); 
// //     } else if (i <= 200) {
// //         total = 1.728 * 50 + 1.786 * 50 + 2.074 * (i - 100); 
// //     } else if (i <= 300) {
// //         total = 1.728 * 50 + 1.786 * 50 + 2.074 * 100 + 2.612 * (i - 200);
// //     } else if (i <= 400) {
// //         total = 1.728 * 50 + 1.786 * 50 + 2.074 * 100 + 2.612 * 100 + 2.919 * (i - 300); 
// //     } else {
// //         total = 1.728 * 50 + 1.786 * 50 + 2.074 * 100 + 2.612 * 100 + 2.919 * 100 + 3.015 * (i - 400); 
// //     }

// //     total = Math.round(total);

// //     console.log("Tiền điện cho " + i + " kWh là: " + total + " đồng.");
// // }

// // electricBillCalculator(51);

// // function taxCalculator(i) {
// //     if (isNaN(i) || i <= 0) {
// //         return "Vui lòng nhập lại";
// //     }

// //     let tax = 0;
// //     if (i <= 11) {
// //         return "Miễn thuế";
// //     } else if (i <= 16) {
// //         tax = (i- 11) * 5 / 100;
// //     } else if (i <= 21) {
// //         tax = (5 * 5 / 100) + (i - 16) * 10 / 100;
// //     } else if (i<= 32) {
// //         tax = (5 * 5 / 100) + (5 * 10 / 100) + (i - 21) * 15 / 100;
// //     } else if (i <= 52) {
// //         tax = (5 * 5 / 100) + (5 * 10 / 100) + (11 * 15 / 100) + (i - 32) * 20 / 100;
// //     } else if (i <= 80) {
// //         tax = (5 * 5 / 100) + (5 * 10 / 100) + (11 * 15 / 100) + (20 * 20 / 100) + (i - 52) * 25 / 100;
// //     } else {
// //         tax = (5 * 5 / 100) + (5 * 10 / 100) + (11 * 15 / 100) + (20 * 20 / 100) + (28 * 25 / 100) + (i - 80) * 35 / 100;
// //     }

// //     tax = Math.round(tax * 1000000);
// //     console.log ( "Tiền thuế là"+tax);
// // }
// // taxCalculator (100)



// // function taxCalculator(i) {
// //     if (isNaN(i) || i <= 0) {
// //         console.log("Dữ liệu không hợp lệ");
// //         return;
// //     }

// //     let total = 0; 
// //     if (i <= 11) {
// //         console.log("Miễn thuế");
// //     } else if ( i<=16) {
// //         total = 0.05 * (i - 11); 
// //     } else if ( i<=21) {
// //         total = 0.05 * (i - 11) + 0.1*(i-16); 
// //     } else if ( i<=29) {
// //         total = 0.05 * (i - 11) + 0.1*(i-16) + 0.15*(i-21);
// //     } else if ( i<=43) {
// //         total = 0.05 * (i - 11) + 0.1*(i-16) + 0.15*(i-21) + 0.2 *(i-29);
// //     } else if ( i<=63) {
// //         total = 0.05 * (i - 11) + 0.1*(i-16) + 0.15*(i-21) + 0.2 *(i-29) + 0.25*(i-43); 
// //     }
// //     else if ( i<=91) {
// //         total = 0.05 * (i - 11) + 0.1*(i-16) + 0.15*(i-21) + 0.2 *(i-29) + 0.25*(i-43) + 0.3*(i-63); 
// //     }
// //         else if (i >=91) {
// //             total = 0.05 * (i - 11) + 0.1*(i-16) + 0.15*(i-21) + 0.2 *(i-29) + 0.25*(i-43) + 0.3*(i-63) + 0.35*(i-91);  
// //         }
// //     total = Math.round(total);

// //     console.log("Tiền thuế cho " +  i + " triệu đồng tiền thu nhập: " + total + " triệu đồng.");
// // }

// // taxCalculator (100)



// // let numbers=[1, 2, 3, 4, 5]
// // let squared= numbers.map (num=> num*num);
// // console.log (squared); 


// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let evenNumbers= numbers.filter (num => num % 2 !==0);
// // console.log(evenNumbers);

// // let numbers = [1, 2, 3, 4, 5];
// // let sum=numbers.reduce((acc,num)=> acc + num,0);
// // console.log(sum);

// // let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// // let name= students.filter (student=> student.length>3);
// // console.log(name)


// let numbers = [1, 2, 3, 4, 5, 6];
// let old = numbers.filter(num => num % 2 !== 0);
// let tich = old.map(num => num * num);
// let sum = tich.reduce((acc, num) => acc * num, 1);
// console.log(sum);

// const rectangle = document.getElementById('rectangle');
// const button = document.getElementById('changeColorButton');

// button.addEventListener('click', function() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     rectangle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });
// let content = document.getElementById ("content")
// content.innerHTML ="<h2>Hello WEBL1</h2>"

// document.getElementById("change").addEventListener("click", function() {
//     let message = document.getElementById("message");
//     message.textContent = "Xin chào lớp WEBL1";
// });

// document.getElementById("add-hobby").addEventListener("click", function() {
//     // Lấy danh sách sở thích
//     const hobbyList = document.getElementById("hobby-list");

//     // Tạo phần tử mới
//     const newHobby = document.createElement("li");
//     newHobby.textContent = "Học Bài";

//     // Thêm phần tử mới vào danh sách
//     hobbyList.appendChild(newHobby);
// });


// document.querySelector("#change").addEventListener("click",function 
//     () { document.getElementById("text").classList.toggle("changecolor")
// })
// let inputF=document.getElementById("num")
// let inputF2=document.getElementById("num2")
// let result=document.getElementById("result")

// submit.addEventListener ("click",function () {
//     let num=inputF.value*1
//     let num2=inputF2.value*1
//     const sum= num+num2
//     result.textContent= "Tổng của hai số là: " + sum
// })

// document.getElementById("calculate").addEventListener("click", function () {
//     const weight = parseFloat(document.getElementById("weight").value) || 0;
//     const height = parseFloat(document.getElementById("height").value) || 0;

//     if (weight <= 0 || height <= 0) {
//         document.getElementById("result").textContent = "Vui lòng nhập cân nặng và chiều cao hợp lệ!";
//         return;
//     }

//     const bmi = weight / (height * height);

//     let status = "";
//     if (bmi < 18.5) {
//         status = "Bạn đang ở trạng thái gầy.";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         status = "Bạn có chỉ số BMI bình thường.";
//     } else {
//         status = "Bạn đang ở trạng thái thừa cân.";
//     }

//     document.getElementById("result").textContent =
//         `Chỉ số BMI của bạn là: ${bmi.toFixed(2)}. ${status}`;
// });
// let today = new Date();
// let currentYear = today.getFullYear();
// document.getElementById("calculate").addEventListener("click", function() {
//     let birthYear = document.getElementById("birthYear").value * 1;
//     if (!birthYear || birthYear > currentYear) {
//         document.getElementById("result").textContent = "Vui lòng nhập một năm sinh hợp lệ.";
//         return;
//     }

//     var age = currentYear - birthYear;

//     document.getElementById("result").textContent = "Tuổi của bạn là: " + age + " tuổi.";
// });
const circle = document.getElementById("circle");
        const moveButton = document.getElementById("moveButton");
        moveButton.addEventListener("click", function() {
            circle.style.transform = "translateX(300px)";});