let user1 = {
    admin(){
        console.log("this is manager");
    }
}

let user2 = {
    name : "John"
};

user1.admin?.();
user2.admin?.();

delete user?.name; // 만약 name이라는 프라퍼티
                   // 가 있으면 
let user = null;

alert(user?.address); //undefined
alert(user?.address.street); // undefined
//없는 프라퍼티지만 에러를 띄우지않고
//undefined로 띄어버린다