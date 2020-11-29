/*function student(){
    let a=100;
    let b=200;
    let c=a+b;
    
    let student=[1,2,3,4,5,6,7,8,9];
    console.log(c,student.length,student[7]);
}
student();
*/

student=()=>{ //arrow function
    let a=100;
    let b=200;
    // tính tổng a+b
    let c=a+b;
    let student=[1,2,3,4,5,6,7,8,9];
    // xóa phần tử thứ 5 1 lần
    let removed = student.splice(5, 1);
    // nhân 3 mảng mới 
    let hello=student.map(hello=>hello*3)
    // gọi ra
    console.log(c,student.length,student[7],student,hello);
    
}
student()
 /* Mảng */
    