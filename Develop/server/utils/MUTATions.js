import gql from "graphql";
export const loginUser =gql`
mutation login($email:string!,$password:String!){
    login(email: $email, password:$password){
        token:
        user:{
            _id
            username
        }
    }
}
`;



export const ADDUSER=gql`
mutation adduser($username: string, $email: string, $password: String){
    ADDUSER(username:$username, email: $email, password:$password){
        Token
        USER{
            _id
            username
        }
    }
}
`;



export const SAVEBOOK =gql`
mutation SAVEBOOK ($book:SAVEDBOOKINFO!){
    SAVEBOOK(book:$book){
        username
        bookcount
        email
        SAVEDBOOKS{
            author
            bookID
            image
            description
            link
            title
        }
    }
}`;
