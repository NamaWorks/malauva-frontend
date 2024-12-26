
export const signupSubmit = async (idNumber:string, name:string, email:string, username:string, password:string) => {

  const formData = new FormData();


  formData.append('idNumber', idNumber);
  formData.append('personName', idNumber);

}