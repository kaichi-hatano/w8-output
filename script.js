//自動入力
(()=>{
    const email$ = localStorage.getItem('email');
    const pass$ = localStorage.getItem('password');

    window.onload = function(){

        document.getElementById("email").value = email$
        document.getElementById("password").value = pass$
    }
})();

//クリックしたら保存
(()=>{
    const $elem = document.getElementById('js-btn');

    $elem.addEventListener('click', function(){

        const $email = document.getElementById("email").value;
        const $pass = document.getElementById("password").value;
        localStorage.setItem('email', $email);
        localStorage.setItem('password', $pass);
    });
})();
