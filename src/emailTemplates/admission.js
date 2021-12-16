
export default function AdmissionEmailTemplateGenerator({email,password}) {
    const message=`
    Dear applicant,
    We are thrilled to inform you that you have been selected to join PRIMECS education.
    Please, find your login details below
    email: ${email}
    password: ${password}

    PS: You are advised to change the password immediately!
    
    `;
    return message;
  
}
