let btn = document.querySelector('#btn').addEventListener('click', () =>
{this.register.createAccount();});

var register = {
    createAccount: function()
    {
        let username = document.querySelector('#username').value;
        let email = document.querySelector('#email').value;
        let senha = document.querySelector("#senha"),value;

        if (username && email && senha)
        {
            console.log('vc foi registrado!')
        };


    },
};