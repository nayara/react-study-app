const loadGapi = () =>
  (window as any).gapi.load('auth2', function () {
    (window as any).gapi.auth2.init({
      client_id:
        '557362487418-hfi2fpdrd7kd0orm0qq5p4gcbd25b8sa.apps.googleusercontent.com',
    });
  });

const loadAuth = () => {
  window.addEventListener('google-loaded', loadGapi);
};

const loginGoogle = () =>
  (window as any).gapi.auth2
    .getAuthInstance()
    .signIn()
    .then((user: any) => console.log(user))
    .catch((error: any) => console.log(error));


const logoutGoogle = () =>
  (window as any).gapi.auth2
    .getAuthInstance()
    .signOut()
    .then(() => console.log('Deslogado!'))
    .catch((error: any) => console.log(error));

export { loadAuth, loginGoogle, logoutGoogle };
