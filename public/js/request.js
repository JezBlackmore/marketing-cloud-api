var request = new XMLHttpRequest();

request.onreadystatechange = function () {
   
     if (this.readyState === 4 && this.status === 200) {
       console.log(this.response);
       request.setRequestHeader('accessToken', '5fd7412f-6bf2-49e4-8666-0c2158642f41');
        request.setRequestHeader('expiresIn', '3600');
     }
   };   

request.open('POST', 'https://auth.exacttargetapis.com/v1/requestToken', true);
request.setRequestHeader('clientId', '');
request.setRequestHeader('clientSecret', '');
