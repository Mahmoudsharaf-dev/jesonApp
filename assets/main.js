$(document).ready(function(){
 //   $("#adduser").prop('disabled',true)
//إضافة مستخدم (عملية إنشاء حساب جديد)
$("#adduser").click(function(){
let uname=$("#username").val();
let uemail=$("#useremail").val();
let upassword=$("#userpassword").val();
var userData ={ name: uname, email: uemail,password:upassword};
//alert(JSON.stringify(userData))
 $.ajax({
 type: 'post',
 dataType: 'json',
 contentType: "application/json; charset=utf-8",
 url: "http://localhost:3000/api/addUser",
data:JSON.stringify(userData),
 success: function(){
    alert("تم التسجيل")
    },
 error: function() { alert("فشل التسجيل") }
 });

})
//--------------------------------------------------------------
//- عملية البحث عن المستخدم
$("#getuser").click(function(){
   let userid=$("#useritemsearch").val();
   $( "#usermail" ).prop( "disabled", true );
$.ajax({
   type: 'get',
   dataType: 'json',
   contentType: "application/json; charset=utf-8",
   url: "http://localhost:3000/api/getuserbyid/"+userid,
   success: function(data){
      console.log(data);
     $("#username").val(data.name)
     $("#usermail").val(data.email)
     $("#userpas").val(data.password)
     $("#userrol").val(data.role)
      },
   error: function() { alert(" error") }
   });

})
//-------------------------------------------------------------
//- عملية تحديث بيانات مستخدم
$("#updateitem").click(function(){
let userid=$("#useritemsearch").val();
let uname=$("#username").val();
let uemail=$("#usermail").val();
let upassword=$("#userpas").val();
let Role=$("#userrol").val();
var userData ={ name: uname, email: uemail,password:upassword,role:Role};
console.log(JSON.stringify(userData))
$.ajax({
   type: 'post',
   dataType: 'json',
   contentType: "application/json; charset=utf-8",
   url: "http://localhost:3000/api/updateUser/"+userid,
   data:JSON.stringify(userData),
   success: function(data){
      alert("تم تحديث بيانات المستخدم")
$("#username").val("");
$("#usermail").val("");
$("#userpas").val("");
$("#userrol").val("");
      },
   error: function() { 

    }
   });

})
//-------------------------------------------------------------
//-- عملية حذف مستخدم 
$("#deleteitem").click(function(){
let usrid=$("#useritemsearch").val();
$.ajax({
   type: 'DELETE',
   dataType: 'json',
   contentType: "application/json; charset=utf-8",
   url: "http://localhost:3000/api/deleteUser/"+usrid,
   success: function(){
      alert("تم حذف المستخدم")

      },
   error: function() { alert("Error") }
   });

})
//--------------------------------------------------------------
//عملية البحث عن سلعة
//--search item
$("#getpro").click(function(){
   let ser=$("#itemsearch").val();
$.ajax({
   type: 'get',
   dataType: 'json',
   contentType: "application/json; charset=utf-8",
   url: "http://localhost:3000/api/getbyid/"+ser,
   success: function(data){
     $("#itemprice").val(data.price)
     $("#itemname").val(data.name)

   
      },
   error: function() { alert("فشل التسجيل") }
   });

})
})
//---------------------------------------------------------------